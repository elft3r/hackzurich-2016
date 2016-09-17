import _ from 'underscore'

var getStartDate = function() {
	return new Date(_.first(getData())[0]["date"]);
}

var streamData = function(time) {
	return  _.chain(getData())
		.filter(function(val) {
		return new Date(val[0]["date"]) < time;
		})
		 .last()
		.value();
}

var getData = function() {
	return [
		[
			{"date" : "2016-09-17t20:45:07.420+02:00"},
			{"name": "elevator_1", "floor": 1},
			{"name": "elevator_2", "floor": 3},
			{"name": "elevator_3", "floor": 7},
			{"name": "elevator_4", "floor": 2},
			{"name": "elevator_5", "floor": 8},
			{"name": "elevator_6", "floor": 2},
			{"name": "elevator_7", "floor": 0}
		], [
			{"date" : "2016-09-17t20:45:12.420+02:00"},
			{"name": "elevator_1", "floor": 2},
			{"name": "elevator_2", "floor": 5},
			{"name": "elevator_3", "floor": 8},
			{"name": "elevator_4", "floor": -1},
			{"name": "elevator_5", "floor": 1},
			{"name": "elevator_6", "floor": 2},
			{"name": "elevator_7", "floor": 0}
		], [
			{"date" : "2016-09-17t20:45:17.420+02:00"},
			{"name": "elevator_1", "floor": 8},
			{"name": "elevator_2", "floor": 2},
			{"name": "elevator_3", "floor": 1},
			{"name": "elevator_4", "floor": -1},
			{"name": "elevator_5", "floor": -1},
			{"name": "elevator_6", "floor": 2},
			{"name": "elevator_7", "floor": 7}
		], [
			{"date" : "2016-09-17t20:45:22.420+02:00"},
			{"name": "elevator_1", "floor": 1},
			{"name": "elevator_2", "floor": 6},
			{"name": "elevator_3", "floor": 4},
			{"name": "elevator_4", "floor": 1},
			{"name": "elevator_5", "floor": 8},
			{"name": "elevator_6", "floor": 1},
			{"name": "elevator_7", "floor": 0}
		]]
}

export default {
	getData: getData,
	streamData: streamData,
	getStartDate: getStartDate
}
