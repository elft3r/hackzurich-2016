import json
import pandas as pd

file = '../../data/elavator/artificial_small.json'


def json_load_byteified(file_handle):
    return _byteify(
        json.load(file_handle, object_hook=_byteify),
        ignore_dicts=True
    )


def json_loads_byteified(json_text):
    return _byteify(
        json.loads(json_text, object_hook=_byteify),
        ignore_dicts=True
    )


def _byteify(data, ignore_dicts=False):
    # if this is a unicode string, return its string representation
    if isinstance(data, unicode):
        return data.encode('utf-8')
    # if this is a list of values, return list of byteified values
    if isinstance(data, list):
        return [_byteify(item, ignore_dicts=True) for item in data]
    # if this is a dictionary, return dictionary of byteified keys and values
    # but only if we haven't already byteified it
    if isinstance(data, dict) and not ignore_dicts:
        return {
            _byteify(key, ignore_dicts=True): _byteify(value, ignore_dicts=True)
            for key, value in data.iteritems()
            }
    # if it's anything else, return it in its original form
    return data


def read_json_file(file):
    with open(file) as data_file:
        return json_load_byteified(data_file)


def get_sensor_data(device_dict, device, sensor):
    target_dict_list = device_dict[device]
    if target_dict_list is None:
        raise NameError("Device %s not found" % device)

    target_sensor_data = []
    for v in target_dict_list:
        if v['type'] == sensor:
            target_sensor_data.append(v)
    return target_sensor_data


def get_device_sensor_tables(device_dict, devices, sensor='Barometer'):
    device_data = {}
    for d in devices:
        temp_data = get_sensor_data(device_dict, d, sensor)

        df = pd.DataFrame(temp_data)
        df = df.set_index(pd.DatetimeIndex(df['date']))
        df = df.dropna()
        if sensor == 'Barometer':
            device_data[d] = df.resample('1s').mean().interpolate()
        else:
            raise NameError("Sensor type %s not found" % sensor)
    return device_data


def label_levels(date_start, date_end, df_baro):
    level_alt_diff = 2.8
    min_floor = -1
    max_floor = 7
    dates = pd.date_range(date_start, date_end, freq='S')

    df_baro['diff'] = df_baro['relativeAltitude'] - df_baro['relativeAltitude'].shift(3, freq='S')

    change_points = {}
    last_level = min(max(int(round(df_baro.loc[dates[0]]['relativeAltitude'] / level_alt_diff)), min_floor), max_floor)
    change_points[dates[0]] = last_level
    print("First level %d" % last_level)
    for date in dates:
        diff = df_baro.loc[date]['diff']
        level = min(max(int(round(df_baro.loc[date]['relativeAltitude'] / level_alt_diff)), min_floor), max_floor)
        if abs(diff) > 2.0 and last_level is not level:
            last_level = level
            change_points[date] = level
            print("[%s] Arrived on level %d" % (date, level))
    return change_points

input = read_json_file(file)
df_devices = get_device_sensor_tables(input, input.keys())

date_start = '2016-09-17 09:13'
date_end = '2016-09-17 09:19'
output = []
for d in input:
    change_points = label_levels(date_start, date_end, df_devices[d])
    for date, level in change_points.iteritems():
        output.append({"date": date.strftime('%Y-%m-%dt%H:%M:%S'), "name": d, "floor": level})

with open('../../data/elavator.json', 'w') as outfile:
    json.dump(output, outfile)



