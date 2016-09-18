import _ from 'underscore'
import DateFormat from 'dateformat'

var getStartDate = function() {
	return new Date(Number(_.first(getData())["time"]));
}

var streamData = function(time) {
	return _.chain(getData())
		.filter(function(val) {
			return new Date(Number(val["time"])) < time;
		})
		.map(function(val) {
			val["dateLabel"] = DateFormat(Number(val["time"]), "h:MM:ss")
			return val
		}).value();
}

var getData = function() {
	return	[
{ pressure: 0.0000916962, activity: '', time: 1474132103000 }
,
{ pressure: 0.0000875282, activity: '', time: 1474132104000 }
,
{ pressure: 0.0000833602, activity: '', time: 1474132105000 }
,
{ pressure: 0.0000791922, activity: '', time: 1474132106000 }
,
{ pressure: 0.0000750242, activity: '', time: 1474132107000 }
,
{ pressure: 0.0000708562, activity: '', time: 1474132108000 }
,
{ pressure: 0.0000666882, activity: '', time: 1474132109000 }
,
{ pressure: 0.0000625201, activity: '', time: 1474132110000 }
,
{ pressure: 0.0000583521, activity: '', time: 1474132111000 }
,
{ pressure: 0.0000541841, activity: '', time: 1474132112000 }
,
{ pressure: 0.0000500161, activity: '', time: 1474132113000 }
,
{ pressure: 0.0000458481, activity: '', time: 1474132114000 }
,
{ pressure: 0.0000416801, activity: '', time: 1474132115000 }
,
{ pressure: 0.0000375121, activity: '', time: 1474132116000 }
,
{ pressure: 0.0000333441, activity: '', time: 1474132117000 }
,
{ pressure: 0.0000291761, activity: '', time: 1474132118000 }
,
{ pressure: 0.0000250081, activity: '', time: 1474132119000 }
,
{ pressure: 0.00002084, activity: '', time: 1474132120000 }
,
{ pressure: 0.000016672, activity: '', time: 1474132121000 }
,
{ pressure: 0.000012504, activity: '', time: 1474132122000 }
,
{ pressure: 0.000008336, activity: '', time: 1474132123000 }
,
{ pressure: 0.000004168, activity: '', time: 1474132124000 }
,
{ pressure: 0, activity: '', time: 1474132125000 }
,
{ pressure: 0.0057373047, activity: '', time: 1474132126000 }
,
{ pressure: 0.0114746094,
  activity: 'walking',
  time: 1474132127000 }
,
{ pressure: 0.0213928223,
  activity: 'walking',
  time: 1474132128000 }
,
{ pressure: 0.0719909668,
  activity: 'walking',
  time: 1474132129000 }
,
{ pressure: 0.0824279785,
  activity: 'walking',
  time: 1474132130000 }
,
{ pressure: 0.0928649902,
  activity: 'walking',
  time: 1474132131000 }
,
{ pressure: 0.1512756348,
  activity: 'walking',
  time: 1474132132000 }
,
{ pressure: 0.155456543,
  activity: 'walking',
  time: 1474132133000 }
,
{ pressure: 0.1596374512,
  activity: 'walking',
  time: 1474132134000 }
,
{ pressure: 0.2785644531,
  activity: 'walking',
  time: 1474132135000 }
,
{ pressure: 0.283782959,
  activity: 'walking',
  time: 1474132136000 }
,
{ pressure: 0.2890014648,
  activity: 'walking',
  time: 1474132137000 }
,
{ pressure: 0.4189147949,
  activity: 'walking',
  time: 1474132138000 }
,
{ pressure: 0.4189147949,
  activity: 'walking',
  time: 1474132139000 }
,
{ pressure: 0.4189147949,
  activity: 'walking',
  time: 1474132140000 }
,
{ pressure: 0.4189147949,
  activity: 'walking',
  time: 1474132141000 }
,
{ pressure: 0.4183959961,
  activity: 'walking',
  time: 1474132142000 }
,
{ pressure: 0.4288330078,
  activity: 'walking',
  time: 1474132143000 }
,
{ pressure: 0.4392700195,
  activity: 'walking',
  time: 1474132144000 }
,
{ pressure: 0.428314209,
  activity: 'walking',
  time: 1474132145000 }
,
{ pressure: 0.5571594238,
  activity: 'walking',
  time: 1474132146000 }
,
{ pressure: 0.5143737793,
  activity: 'walking',
  time: 1474132147000 }
,
{ pressure: 0.4715881348,
  activity: 'walking',
  time: 1474132148000 }
,
{ pressure: 0.5947265625,
  activity: 'walking',
  time: 1474132149000 }
,
{ pressure: 0.7303619385,
  activity: 'walking',
  time: 1474132150000 }
,
{ pressure: 0.8659973145,
  activity: 'walking',
  time: 1474132151000 }
,
{ pressure: 1.3423461914,
  activity: 'walking',
  time: 1474132152000 }
,
{ pressure: 1.9569396973,
  activity: 'walking',
  time: 1474132153000 }
,
{ pressure: 2.209487915,
  activity: 'walking up',
  time: 1474132154000 }
,
{ pressure: 2.4620361328,
  activity: 'walking up',
  time: 1474132155000 }
,
{ pressure: 2.4792480469,
  activity: 'walking up',
  time: 1474132156000 }
,
{ pressure: 2.5778656006,
  activity: 'walking up',
  time: 1474132157000 }
,
{ pressure: 2.6764831543,
  activity: 'walking up',
  time: 1474132158000 }
,
{ pressure: 3.1273498535,
  activity: 'walking up',
  time: 1474132159000 }
,
{ pressure: 3.4331359863,
  activity: 'walking up',
  time: 1474132160000 }
,
{ pressure: 3.6658782959,
  activity: 'walking up',
  time: 1474132161000 }
,
{ pressure: 3.8986206055,
  activity: 'walking up',
  time: 1474132162000 }
,
{ pressure: 4.372467041,
  activity: 'walking up',
  time: 1474132163000 }
,
{ pressure: 4.3829193115,
  activity: 'walking up',
  time: 1474132164000 }
,
{ pressure: 4.393371582,
  activity: 'walking up',
  time: 1474132165000 }
,
{ pressure: 4.7618103027,
  activity: 'walking up',
  time: 1474132166000 }
,
{ pressure: 5.1041870117,
  activity: 'walking up',
  time: 1474132167000 }
,
{ pressure: 5.2881622314,
  activity: 'walking up',
  time: 1474132168000 }
,
{ pressure: 5.4721374512,
  activity: 'walking up',
  time: 1474132169000 }
,
{ pressure: 5.920501709,
  activity: 'walking up',
  time: 1474132170000 }
,
{ pressure: 5.9677429199,
  activity: 'walking up',
  time: 1474132171000 }
,
{ pressure: 6.0149841309,
  activity: 'walking up',
  time: 1474132172000 }
,
{ pressure: 6.0494384766,
  activity: 'walking up',
  time: 1474132173000 }
,
{ pressure: 6.4586791992,
  activity: 'walking up',
  time: 1474132174000 }
,
{ pressure: 6.7058410645,
  activity: 'walking up',
  time: 1474132175000 }
,
{ pressure: 6.9530029297,
  activity: 'walking up',
  time: 1474132176000 }
,
{ pressure: 7.193145752,
  activity: 'walking up',
  time: 1474132177000 }
,
{ pressure: 7.2779693604,
  activity: 'walking up',
  time: 1474132178000 }
,
{ pressure: 7.3627929688,
  activity: 'walking up',
  time: 1474132179000 }
,
{ pressure: 7.4014282227,
  activity: 'walking up',
  time: 1474132180000 }
,
{ pressure: 7.7914123535,
  activity: 'walking up',
  time: 1474132181000 }
,
{ pressure: 8.0106811523,
  activity: 'walking up',
  time: 1474132182000 }
,
{ pressure: 8.2299499512,
  activity: 'walking up',
  time: 1474132183000 }
,
{ pressure: 8.6173400879,
  activity: 'walking up',
  time: 1474132184000 }
,
{ pressure: 8.8079071045,
  activity: 'walking up',
  time: 1474132185000 }
,
{ pressure: 8.9984741211,
  activity: 'walking up',
  time: 1474132186000 }
,
{ pressure: 9.2370910645,
  activity: 'walking up',
  time: 1474132187000 }
,
{ pressure: 9.2376098633,
  activity: 'walking up',
  time: 1474132188000 }
,
{ pressure: 9.2381286621,
  activity: 'walking up',
  time: 1474132189000 }
,
{ pressure: 9.5963134766,
  activity: 'walking up',
  time: 1474132190000 }
,
{ pressure: 10.1226501465,
  activity: 'walking up',
  time: 1474132191000 }
,
{ pressure: 10.2850494385,
  activity: 'walking up',
  time: 1474132192000 }
,
{ pressure: 10.4474487305,
  activity: 'walking up',
  time: 1474132193000 }
,
{ pressure: 10.7409362793,
  activity: 'walking up',
  time: 1474132194000 }
,
{ pressure: 10.7482452393,
  activity: 'walking up',
  time: 1474132195000 }
,
{ pressure: 10.7555541992,
  activity: 'walking up',
  time: 1474132196000 }
,
{ pressure: 10.7555541992,
  activity: 'walking up',
  time: 1474132197000 }
,
{ pressure: 11.1273803711,
  activity: 'walking up',
  time: 1474132198000 }
,
{ pressure: 11.2720336914,
  activity: 'walking up',
  time: 1474132199000 }
,
{ pressure: 11.4166870117,
  activity: 'walking up',
  time: 1474132200000 }
,
{ pressure: 11.934753418,
  activity: 'walking up',
  time: 1474132201000 }
,
{ pressure: 12.0603637695,
  activity: 'walking up',
  time: 1474132202000 }
,
{ pressure: 12.1859741211,
  activity: 'walking up',
  time: 1474132203000 }
,
{ pressure: 12.221496582,
  activity: 'walking up',
  time: 1474132204000 }
,
{ pressure: 12.5740356445,
  activity: 'walking up',
  time: 1474132205000 }
,
{ pressure: 12.8216094971,
  activity: 'walking up',
  time: 1474132206000 }
,
{ pressure: 13.0691833496,
  activity: 'walking up',
  time: 1474132207000 }
,
{ pressure: 13.4927978516,
  activity: 'walking up',
  time: 1474132208000 }
,
{ pressure: 13.6502990723,
  activity: 'walking up',
  time: 1474132209000 }
,
{ pressure: 13.807800293,
  activity: 'walking up',
  time: 1474132210000 }
,
{ pressure: 13.807800293,
  activity: 'walking up',
  time: 1474132211000 }
,
{ pressure: 13.7827148438,
  activity: 'walking up',
  time: 1474132212000 }
,
{ pressure: 13.7827148438,
  activity: 'walking up',
  time: 1474132213000 }
,
{ pressure: 13.7827148438,
  activity: 'walking',
  time: 1474132214000 }
,
{ pressure: 13.7900390625,
  activity: 'walking',
  time: 1474132215000 }
,
{ pressure: 13.8020477295,
  activity: 'walking',
  time: 1474132216000 }
,
{ pressure: 13.8140563965,
  activity: 'walking',
  time: 1474132217000 }
,
{ pressure: 13.7900390625,
  activity: 'walking',
  time: 1474132218000 }
,
{ pressure: 13.8307800293,
  activity: 'walking',
  time: 1474132219000 }
,
{ pressure: 13.8307800293,
  activity: 'walking',
  time: 1474132220000 }
,
{ pressure: 13.8307800293,
  activity: 'walking',
  time: 1474132221000 }
,
{ pressure: 13.8349609375,
  activity: 'walking',
  time: 1474132222000 }
,
{ pressure: 13.8746490479,
  activity: 'walking',
  time: 1474132223000 }
,
{ pressure: 13.9143371582,
  activity: 'walking',
  time: 1474132224000 }
,
{ pressure: 13.9462280273,
  activity: 'walking',
  time: 1474132225000 }
,
{ pressure: 13.9462280273,
  activity: 'walking',
  time: 1474132226000 }
,
{ pressure: 13.9621582031,
  activity: 'walking',
  time: 1474132227000 }
,
{ pressure: 13.9780883789,
  activity: 'walking',
  time: 1474132228000 }
,
{ pressure: 13.9927062988,
  activity: 'walking',
  time: 1474132229000 }
,
{ pressure: 14.0211791992,
  activity: 'walking',
  time: 1474132230000 }
,
{ pressure: 14.0496520996,
  activity: 'walking',
  time: 1474132231000 }
,
{ pressure: 14.2518005371,
  activity: 'walking',
  time: 1474132232000 }
,
{ pressure: 14.26171875,
  activity: 'walking',
  time: 1474132233000 }
,
{ pressure: 14.2567596436,
  activity: 'walking',
  time: 1474132234000 }
,
{ pressure: 14.2518005371,
  activity: 'walking',
  time: 1474132235000 }
,
{ pressure: 14.197479248,
  activity: 'walking',
  time: 1474132236000 }
,
{ pressure: 14.197479248,
  activity: 'walking',
  time: 1474132237000 }
,
{ pressure: 14.197479248,
  activity: 'walking',
  time: 1474132238000 }
,
{ pressure: 14.2387390137,
  activity: 'walking',
  time: 1474132239000 }
,
{ pressure: 14.2387390137,
  activity: 'walking',
  time: 1474132240000 }
,
{ pressure: 14.2387390137,
  activity: 'walking',
  time: 1474132241000 }
,
{ pressure: 14.1854553223,
  activity: 'walking',
  time: 1474132242000 }
,
{ pressure: 14.1854553223,
  activity: 'walking',
  time: 1474132243000 }
,
{ pressure: 14.1828460693,
  activity: 'walking',
  time: 1474132244000 }
,
{ pressure: 14.1802368164,
  activity: 'walking',
  time: 1474132245000 }
,
{ pressure: 14.1353149414,
  activity: 'walking',
  time: 1474132246000 }
,
{ pressure: 14.1123352051,
  activity: 'walking',
  time: 1474132247000 }
,
{ pressure: 14.0893554688,
  activity: 'walking',
  time: 1474132248000 }
,
{ pressure: 14.0449523926,
  activity: 'walking',
  time: 1474132249000 }
,
{ pressure: 14.0449523926,
  activity: 'walking',
  time: 1474132250000 }
,
{ pressure: 14.0530395508,
  activity: 'walking',
  time: 1474132251000 }
,
{ pressure: 14.061126709,
  activity: 'walking',
  time: 1474132252000 }
,
{ pressure: 14.1295776367,
  activity: 'walking',
  time: 1474132253000 }
,
{ pressure: 14.1512451172,
  activity: 'walking',
  time: 1474132254000 }
,
{ pressure: 14.1729125977,
  activity: 'walking',
  time: 1474132255000 }
,
{ pressure: 14.183380127,
  activity: 'walking',
  time: 1474132256000 }
,
{ pressure: 14.3113708496,
  activity: 'walking',
  time: 1474132257000 }
,
{ pressure: 14.3442687988,
  activity: 'walking',
  time: 1474132258000 }
,
{ pressure: 14.377166748,
  activity: 'walking',
  time: 1474132259000 }
,
{ pressure: 14.3808288574,
  activity: 'walking',
  time: 1474132260000 }
,
{ pressure: 14.385269165,
  activity: 'walking',
  time: 1474132261000 }
,
{ pressure: 14.3897094727,
  activity: 'walking',
  time: 1474132262000 }
,
{ pressure: 14.4262695312,
  activity: 'walking',
  time: 1474132263000 }
,
{ pressure: 14.4262695312,
  activity: 'walking',
  time: 1474132264000 }
,
{ pressure: 14.4262695312,
  activity: 'walking',
  time: 1474132265000 }
,
{ pressure: 14.4262695312,
  activity: 'walking',
  time: 1474132266000 }
,
{ pressure: 14.363067627,
  activity: 'walking',
  time: 1474132267000 }
,
{ pressure: 14.3560180664,
  activity: 'walking',
  time: 1474132268000 }
,
{ pressure: 14.3489685059,
  activity: 'walking',
  time: 1474132269000 }
,
{ pressure: 14.2455444336,
  activity: 'walking',
  time: 1474132270000 }
,
{ pressure: 14.2382202148,
  activity: 'walking',
  time: 1474132271000 }
,
{ pressure: 14.2418823242,
  activity: 'walking',
  time: 1474132272000 }
,
{ pressure: 14.2455444336,
  activity: 'walking',
  time: 1474132273000 }
,
{ pressure: 14.2455444336,
  activity: 'walking',
  time: 1474132274000 }
,
{ pressure: 14.2455444336,
  activity: 'walking',
  time: 1474132275000 }
,
{ pressure: 14.2455444336,
  activity: 'walking',
  time: 1474132276000 }
,
{ pressure: 14.0862121582,
  activity: 'walking',
  time: 1474132277000 }
,
{ pressure: 13.4327392578,
  activity: 'walking',
  time: 1474132278000 }
,
{ pressure: 12.5597076416,
  activity: 'walking',
  time: 1474132279000 }
,
{ pressure: 11.6866760254,
  activity: 'elevator down',
  time: 1474132280000 }
,
{ pressure: 9.5675964355,
  activity: 'elevator down',
  time: 1474132281000 }
,
{ pressure: 8.9575042725,
  activity: 'elevator down',
  time: 1474132282000 }
,
{ pressure: 8.3474121094,
  activity: 'elevator down',
  time: 1474132283000 }
,
{ pressure: 7.8660583496,
  activity: 'elevator down',
  time: 1474132284000 }
,
{ pressure: 7.8660583496,
  activity: 'elevator down',
  time: 1474132285000 }
,
{ pressure: 7.8660583496,
  activity: 'elevator down',
  time: 1474132286000 }
,
{ pressure: 7.8686523438,
  activity: 'elevator down',
  time: 1474132287000 }
,
{ pressure: 7.8827514648,
  activity: 'elevator down',
  time: 1474132288000 }
,
{ pressure: 7.8759613037,
  activity: 'elevator down',
  time: 1474132289000 }
,
{ pressure: 7.8691711426,
  activity: 'elevator down',
  time: 1474132290000 }
,
{ pressure: 7.8827514648,
  activity: 'elevator down',
  time: 1474132291000 }
,
{ pressure: 7.8804016113,
  activity: 'elevator down',
  time: 1474132292000 }
,
{ pressure: 7.8780517578,
  activity: 'elevator down',
  time: 1474132293000 }
,
{ pressure: 7.8780517578,
  activity: 'elevator down',
  time: 1474132294000 }
,
{ pressure: 7.3278198242,
  activity: 'elevator down',
  time: 1474132295000 }
,
{ pressure: 6.7152557373,
  activity: 'elevator down',
  time: 1474132296000 }
,
{ pressure: 6.1026916504,
  activity: 'elevator down',
  time: 1474132297000 }
,
{ pressure: 3.9982910156,
  activity: 'elevator down',
  time: 1474132298000 }
,
{ pressure: 3.0783233643,
  activity: 'elevator down',
  time: 1474132299000 }
,
{ pressure: 2.1583557129,
  activity: 'elevator down',
  time: 1474132300000 }
,
{ pressure: 1.1706848145,
  activity: 'elevator down',
  time: 1474132301000 }
,
{ pressure: 0.9844360352,
  activity: 'elevator down',
  time: 1474132302000 }
,
{ pressure: 0.9366912842,
  activity: 'elevator down',
  time: 1474132303000 }
,
{ pressure: 0.8889465332,
  activity: 'elevator down',
  time: 1474132304000 }
,
{ pressure: 0.8889465332,
  activity: 'elevator down',
  time: 1474132305000 }
,
{ pressure: 0.9030456543,
  activity: 'walking',
  time: 1474132306000 }
,
{ pressure: 0.9171447754,
  activity: 'walking',
  time: 1474132307000 }
,
{ pressure: 0.921295166,
  activity: 'walking',
  time: 1474132308000 }
,
{ pressure: 0.9609680176,
  activity: 'walking',
  time: 1474132309000 }
,
{ pressure: 0.9609680176,
  activity: 'walking',
  time: 1474132310000 }
,
{ pressure: 0.9609680176,
  activity: 'walking',
  time: 1474132311000 }
,
{ pressure: 0.9473876953,
  activity: 'walking',
  time: 1474132312000 }
,
{ pressure: 0.8959960938,
  activity: 'walking',
  time: 1474132313000 }
,
{ pressure: 0.8446044922,
  activity: 'walking',
  time: 1474132314000 }
,
{ pressure: 0.9353942871,
  activity: 'walking',
  time: 1474132315000 }
,
{ pressure: 0.8440856934,
  activity: 'walking',
  time: 1474132316000 }
,
{ pressure: 0.8704376221,
  activity: 'walking',
  time: 1474132317000 }
,
{ pressure: 0.8967895508,
  activity: 'walking',
  time: 1474132318000 }
,
{ pressure: 0.8440856934,
  activity: 'walking',
  time: 1474132319000 }
,
{ pressure: 0.8276519775,
  activity: 'walking',
  time: 1474132320000 }
,
{ pressure: 0.8112182617,
  activity: 'walking',
  time: 1474132321000 }
,
{ pressure: 0.8096618652,
  activity: 'walking',
  time: 1474132322000 }
,
{ pressure: 0.7585449219,
  activity: 'walking',
  time: 1474132323000 }
,
{ pressure: 0.704284668,
  activity: 'walking',
  time: 1474132324000 }
,
{ pressure: 0.6500244141,
  activity: 'walking',
  time: 1474132325000 }
,
{ pressure: 0.529510498,
  activity: 'walking',
  time: 1474132326000 }
,
{ pressure: 0.5133361816,
  activity: 'walking',
  time: 1474132327000 }
,
{ pressure: 0.4971618652,
  activity: 'walking',
  time: 1474132328000 }
,
{ pressure: 0.4762878418,
  activity: 'walking',
  time: 1474132329000 }
,
{ pressure: 0.4762878418,
  activity: 'walking',
  time: 1474132330000 }
,
{ pressure: 0.5302886963,
  activity: 'walking',
  time: 1474132331000 }
,
{ pressure: 0.5842895508,
  activity: 'walking',
  time: 1474132332000 }
,
{ pressure: 0.5842895508,
  activity: 'walking',
  time: 1474132333000 }
,
{ pressure: 0.5866394043,
  activity: 'walking',
  time: 1474132334000 }
,
{ pressure: 0.5889892578,
  activity: 'walking',
  time: 1474132335000 }
,
{ pressure: 0.5790710449,
  activity: 'walking',
  time: 1474132336000 }
,
{ pressure: 0.5840301514,
  activity: 'walking',
  time: 1474132337000 }
,
{ pressure: 0.5889892578,
  activity: 'walking',
  time: 1474132338000 }
,
{ pressure: 0.596282959,
  activity: 'walking',
  time: 1474132339000 }
,
{ pressure: 0.6192321777,
  activity: 'walking',
  time: 1474132340000 }
,
{ pressure: 0.6192321777,
  activity: 'walking',
  time: 1474132341000 }
,
{ pressure: 0.6192321777,
  activity: 'walking',
  time: 1474132342000 }
,
{ pressure: 0.5472412109,
  activity: 'walking',
  time: 1474132343000 }
,
{ pressure: 0.5094146729,
  activity: 'walking',
  time: 1474132344000 }
,
{ pressure: 0.4715881348,
  activity: 'walking',
  time: 1474132345000 }
,
{ pressure: 0.4606323242,
  activity: 'walking',
  time: 1474132346000 }
,
{ pressure: 0.4350891113,
  activity: 'walking',
  time: 1474132347000 }
,
{ pressure: 0.4350891113,
  activity: 'walking',
  time: 1474132348000 }
,
{ pressure: 0.4350891113,
  activity: 'walking',
  time: 1474132349000 }
,
{ pressure: 0.4262084961,
  activity: 'walking',
  time: 1474132350000 }
,
{ pressure: 0.4032592773,
  activity: 'walking',
  time: 1474132351000 }
,
{ pressure: 0.3803100586,
  activity: 'walking',
  time: 1474132352000 }
,
{ pressure: 0.3803100586,
  activity: 'walking',
  time: 1474132353000 }
,
{ pressure: 0.4246520996,
  activity: 'walking',
  time: 1474132354000 }
,
{ pressure: 0.4246520996,
  activity: 'walking',
  time: 1474132355000 }
,
{ pressure: 0.4246520996,
  activity: 'walking',
  time: 1474132356000 }
,
{ pressure: 0.4246520996,
  activity: 'walking',
  time: 1474132357000 }
,
{ pressure: 0.4196929932,
  activity: 'walking',
  time: 1474132358000 }
,
{ pressure: 0.4147338867,
  activity: 'walking',
  time: 1474132359000 }
,
{ pressure: 0.4481201172,
  activity: 'walking',
  time: 1474132360000 }
,
{ pressure: 0.4570007324,
  activity: 'walking',
  time: 1474132361000 }
,
{ pressure: 0.4585571289,
  activity: 'walking',
  time: 1474132362000 }
,
{ pressure: 0.4601135254,
  activity: 'walking',
  time: 1474132363000 }
,
{ pressure: 0.4570007324,
  activity: 'walking',
  time: 1474132364000 }
,
{ pressure: 0.4496917725,
  activity: 'walking',
  time: 1474132365000 }
,
{ pressure: 0.4423828125,
  activity: 'walking',
  time: 1474132366000 }
,
{ pressure: 0.3948974609,
  activity: 'walking',
  time: 1474132367000 }
,
{ pressure: 0.4423828125,
  activity: 'walking',
  time: 1474132368000 }
,
{ pressure: 0.4186401367,
  activity: 'walking',
  time: 1474132369000 }
,
{ pressure: 0.3948974609,
  activity: 'walking',
  time: 1474132370000 }
,
{ pressure: 0.4548950195,
  activity: 'walking',
  time: 1474132371000 }
,
{ pressure: 0.4619445801,
  activity: 'walking',
  time: 1474132372000 }
,
{ pressure: 0.4689941406,
  activity: 'walking',
  time: 1474132373000 }
,
{ pressure: 0.4966430664,
  activity: 'walking',
  time: 1474132374000 }
,
{ pressure: 0.4966430664,
  activity: 'walking',
  time: 1474132375000 }
,
{ pressure: 0.4966430664,
  activity: 'walking',
  time: 1474132376000 }
,
{ pressure: 0.4966430664,
  activity: 'walking',
  time: 1474132377000 }
,
{ pressure: 0.4966430664,
  activity: 'walking',
  time: 1474132378000 }
,
{ pressure: 0.5016021729,
  activity: 'walking',
  time: 1474132379000 }
,
{ pressure: 0.5065612793,
  activity: 'walking',
  time: 1474132380000 }
,
{ pressure: 0.5065612793,
  activity: 'walking',
  time: 1474132381000 }
,
{ pressure: 0.5096740723,
  activity: 'walking',
  time: 1474132382000 }
,
{ pressure: 0.4924621582,
  activity: 'walking',
  time: 1474132383000 }
,
{ pressure: 0.4752502441,
  activity: 'walking',
  time: 1474132384000 }
,
{ pressure: 0.4204711914,
  activity: 'walking',
  time: 1474132385000 }
,
{ pressure: 0.4204711914,
  activity: 'walking',
  time: 1474132386000 }
,
{ pressure: 0.4204711914,
  activity: 'walking',
  time: 1474132387000 }
,
{ pressure: 0.4079589844,
  activity: 'walking',
  time: 1474132388000 }
,
{ pressure: 0.2801513672,
  activity: 'walking',
  time: 1474132389000 }
,
{ pressure: 0.15234375,
  activity: 'walking',
  time: 1474132390000 }
,
{ pressure: 0.15234375,
  activity: 'walking',
  time: 1474132391000 }
,
{ pressure: 0.15234375,
  activity: 'walking',
  time: 1474132392000 }
,
{ pressure: 0.1810302734,
  activity: 'walking',
  time: 1474132393000 }
,
{ pressure: 0.2097167969,
  activity: 'walking',
  time: 1474132394000 }
,
{ pressure: 0.2097167969,
  activity: 'walking',
  time: 1474132395000 }
,
{ pressure: 0.2097167969,
  activity: 'walking',
  time: 1474132396000 }
,
{ pressure: 0.2097167969,
  activity: 'walking',
  time: 1474132397000 }
,
{ pressure: 0.2775268555,
  activity: 'walking',
  time: 1474132398000 }
,
{ pressure: 0.236328125,
  activity: 'walking',
  time: 1474132399000 }
,
{ pressure: 0.236328125,
  activity: 'walking',
  time: 1474132400000 }
,
{ pressure: 0.236328125,
  activity: 'walking',
  time: 1474132401000 }
,
{ pressure: 0.236328125,
  activity: 'walking',
  time: 1474132402000 }
,
{ pressure: 0.2287597656,
  activity: 'walking',
  time: 1474132403000 }
,
{ pressure: 0.2211914062,
  activity: 'walking',
  time: 1474132404000 }
,
{ pressure: 0.2368469238,
  activity: 'walking',
  time: 1474132405000 }
,
{ pressure: 0.2368469238,
  activity: 'walking',
  time: 1474132406000 }
,
{ pressure: 0.3002319336,
  activity: 'walking',
  time: 1474132407000 }
,
{ pressure: 0.3636169434,
  activity: 'walking',
  time: 1474132408000 }
,
{ pressure: 0.3636169434,
  activity: 'walking',
  time: 1474132409000 }
,
{ pressure: 0.3346557617,
  activity: 'walking',
  time: 1474132410000 }
,
{ pressure: 0.3056945801,
  activity: 'walking',
  time: 1474132411000 }
,
{ pressure: 0.3056945801,
  activity: 'walking',
  time: 1474132412000 }
,
{ pressure: 0.3056945801,
  activity: 'walking',
  time: 1474132413000 }
,
{ pressure: 0.2978668213,
  activity: 'walking',
  time: 1474132414000 }
,
{ pressure: 0.2900390625,
  activity: 'walking',
  time: 1474132415000 }
,
{ pressure: 0.2900390625,
  activity: 'walking',
  time: 1474132416000 }
,
{ pressure: 0.2989196777,
  activity: 'walking',
  time: 1474132417000 }
,
{ pressure: 0.307800293,
  activity: 'walking',
  time: 1474132418000 }
,
{ pressure: 0.307800293,
  activity: 'walking',
  time: 1474132419000 }
,
{ pressure: 0.3103942871,
  activity: 'walking',
  time: 1474132420000 }
,
{ pressure: 0.3059692383,
  activity: 'walking',
  time: 1474132421000 }
,
{ pressure: 0.3015441895,
  activity: 'walking',
  time: 1474132422000 }
,
{ pressure: 0.3103942871,
  activity: 'walking',
  time: 1474132423000 }
,
{ pressure: 0.3119659424,
  activity: 'walking',
  time: 1474132424000 }
,
{ pressure: 0.3135375977,
  activity: 'walking',
  time: 1474132425000 }
,
{ pressure: 0.3135375977,
  activity: 'walking',
  time: 1474132426000 }
,
{ pressure: 0.3020629883,
  activity: 'walking',
  time: 1474132427000 }
,
{ pressure: 0.2582397461,
  activity: 'walking',
  time: 1474132428000 }
,
{ pressure: 0.2144165039,
  activity: 'walking',
  time: 1474132429000 }
,
{ pressure: 0.2133789062,
  activity: 'walking',
  time: 1474132430000 }
,
{ pressure: 0.2029418945,
  activity: 'walking',
  time: 1474132431000 }
,
{ pressure: 0.1925048828,
  activity: 'walking',
  time: 1474132432000 }
,
{ pressure: 0.1596374512,
  activity: 'walking',
  time: 1474132433000 }
,
{ pressure: 0.1596374512,
  activity: 'walking',
  time: 1474132434000 }
,
{ pressure: 0.1596374512,
  activity: 'walking',
  time: 1474132435000 }
,
{ pressure: 0.3223876953,
  activity: 'walking',
  time: 1474132436000 }
,
{ pressure: 0.3797912598,
  activity: 'walking',
  time: 1474132437000 }
,
{ pressure: 0.3797912598,
  activity: 'walking',
  time: 1474132438000 }
,
{ pressure: 0.3797912598,
  activity: 'walking',
  time: 1474132439000 }
,
{ pressure: 0.3130187988,
  activity: 'walking',
  time: 1474132440000 }
,
{ pressure: 0.2517089844,
  activity: 'walking',
  time: 1474132441000 }
,
{ pressure: 0.1903991699,
  activity: 'walking',
  time: 1474132442000 }
,
{ pressure: 0.1903991699,
  activity: 'walking',
  time: 1474132443000 }
,
{ pressure: 0.352142334,
  activity: 'walking',
  time: 1474132444000 }
,
{ pressure: 0.3531799316,
  activity: 'walking',
  time: 1474132445000 }
,
{ pressure: 0.3542175293,
  activity: 'walking',
  time: 1474132446000 }
,
{ pressure: 0.352142334,
  activity: 'walking',
  time: 1474132447000 }
,
{ pressure: 0.3531799316,
  activity: 'walking',
  time: 1474132448000 }
,
{ pressure: 0.3542175293,
  activity: 'walking',
  time: 1474132449000 }
,
{ pressure: 0.2973632812,
  activity: 'walking',
  time: 1474132450000 }
,
{ pressure: 0.2973632812,
  activity: 'walking',
  time: 1474132451000 }
,
{ pressure: 0.2973632812,
  activity: 'walking',
  time: 1474132452000 }
,
{ pressure: 0.2973632812,
  activity: 'walking',
  time: 1474132453000 }
,
{ pressure: 0.2738952637,
  activity: 'walking',
  time: 1474132454000 }
,
{ pressure: 0.2621459961,
  activity: 'walking',
  time: 1474132455000 }
,
{ pressure: 0.2503967285,
  activity: 'walking',
  time: 1474132456000 }
,
{ pressure: 0.2300720215,
  activity: 'walking',
  time: 1474132457000 }
,
{ pressure: 0.2300720215,
  activity: 'walking',
  time: 1474132458000 }
,
{ pressure: 0.3075408936,
  activity: 'walking',
  time: 1474132459000 }
,
{ pressure: 0.3850097656,
  activity: 'walking',
  time: 1474132460000 }
,
{ pressure: 0.3850097656,
  activity: 'walking',
  time: 1474132461000 }
,
{ pressure: 0.2342376709,
  activity: 'walking',
  time: 1474132462000 }
,
{ pressure: 0.0834655762,
  activity: 'walking',
  time: 1474132463000 }
,
{ pressure: 0.0834655762,
  activity: 'walking',
  time: 1474132464000 }
,
{ pressure: 0.0855712891,
  activity: 'walking',
  time: 1474132465000 }
,
{ pressure: 0.0855712891,
  activity: 'walking',
  time: 1474132466000 }
,
{ pressure: 0.0855712891,
  activity: 'walking',
  time: 1474132467000 }
,
{ pressure: 0.0777282715,
  activity: 'walking',
  time: 1474132468000 }
,
{ pressure: 0.0777282715,
  activity: 'walking',
  time: 1474132469000 }
,
{ pressure: 0.0777282715,
  activity: 'walking',
  time: 1474132470000 }
,
{ pressure: 0.0599975586,
  activity: 'walking',
  time: 1474132471000 }
,
{ pressure: 0.0599975586,
  activity: 'walking',
  time: 1474132472000 }
,
{ pressure: 0.0599975586,
  activity: 'walking',
  time: 1474132473000 }
,
{ pressure: 0.0599975586,
  activity: 'walking',
  time: 1474132474000 }
,
{ pressure: 0.0693969727,
  activity: 'walking',
  time: 1474132475000 }
,
{ pressure: 0.0858306885,
  activity: 'walking',
  time: 1474132476000 }
,
{ pressure: 0.1022644043,
  activity: 'walking',
  time: 1474132477000 }
,
{ pressure: 0.108001709,
  activity: 'walking',
  time: 1474132478000 }
,
{ pressure: 0.108001709,
  activity: 'walking',
  time: 1474132479000 }
,
{ pressure: 0.1108703613,
  activity: 'walking',
  time: 1474132480000 }
,
{ pressure: 0.1137390137,
  activity: 'walking',
  time: 1474132481000 }
,
{ pressure: 0.1137390137,
  activity: 'walking',
  time: 1474132482000 }
,
{ pressure: 0.0975646973,
  activity: 'walking',
  time: 1474132483000 }
,
{ pressure: 0.0813903809,
  activity: 'walking',
  time: 1474132484000 }
,
{ pressure: 0.0813903809,
  activity: 'walking',
  time: 1474132485000 }
,
{ pressure: 0.083480835,
  activity: 'walking',
  time: 1474132486000 }
,
{ pressure: 0.0855712891,
  activity: 'walking',
  time: 1474132487000 }
,
{ pressure: 0.1611938477,
  activity: 'walking',
  time: 1474132488000 }
,
{ pressure: 0.1611938477,
  activity: 'walking',
  time: 1474132489000 }
,
{ pressure: 0.1611938477,
  activity: 'walking',
  time: 1474132490000 }
,
{ pressure: 0.1611938477,
  activity: 'walking',
  time: 1474132491000 }
,
{ pressure: 0.1611938477,
  activity: 'walking',
  time: 1474132492000 }
,
{ pressure: 0.1358947754,
  activity: 'walking',
  time: 1474132493000 }
,
{ pressure: 0.1105957031,
  activity: 'walking',
  time: 1474132494000 }
,
{ pressure: 0.1512756348,
  activity: 'walking',
  time: 1474132495000 }
,
{ pressure: 0.1105957031,
  activity: 'walking',
  time: 1474132496000 }
,
{ pressure: 0.1176452637,
  activity: 'walking',
  time: 1474132497000 }
,
{ pressure: 0.1246948242,
  activity: 'walking',
  time: 1474132498000 }
,
{ pressure: 0.1246948242,
  activity: 'walking',
  time: 1474132499000 }
,
{ pressure: 0.1246948242,
  activity: 'walking',
  time: 1474132500000 }
,
{ pressure: 0.1246948242,
  activity: 'walking',
  time: 1474132501000 }
,
{ pressure: -0.0041809082,
  activity: 'walking',
  time: 1474132502000 }
,
{ pressure: -0.0234680176,
  activity: 'walking',
  time: 1474132503000 }
,
{ pressure: -0.0234680176,
  activity: 'walking',
  time: 1474132504000 }
,
{ pressure: -0.0234680176,
  activity: 'walking',
  time: 1474132505000 }
,
{ pressure: -0.0005187988,
  activity: 'walking',
  time: 1474132506000 }
,
{ pressure: 0.0020904541,
  activity: 'walking',
  time: 1474132507000 }
,
{ pressure: 0.004699707,
  activity: 'walking',
  time: 1474132508000 }
,
{ pressure: 0.0255737305,
  activity: 'walking',
  time: 1474132509000 }
,
{ pressure: 0.0485229492,
  activity: 'walking',
  time: 1474132510000 }
,
{ pressure: 0.0485229492,
  activity: 'walking',
  time: 1474132511000 }
,
{ pressure: 0.0485229492,
  activity: 'walking',
  time: 1474132512000 }
,
{ pressure: 0.0485229492,
  activity: 'walking',
  time: 1474132513000 }
,
{ pressure: 0.0396575928,
  activity: 'walking',
  time: 1474132514000 }
,
{ pressure: 0.0307922363,
  activity: 'walking',
  time: 1474132515000 }
,
{ pressure: 0.0307922363,
  activity: 'walking',
  time: 1474132516000 }
,
{ pressure: 0.0307922363,
  activity: 'walking',
  time: 1474132517000 }
,
{ pressure: 0.0015716553,
  activity: 'walking',
  time: 1474132518000 }
,
{ pressure: -0.0276489258,
  activity: 'walking',
  time: 1474132519000 }
,
{ pressure: -0.0276489258,
  activity: 'walking',
  time: 1474132520000 }
,
{ pressure: -0.0644226074,
  activity: 'walking',
  time: 1474132521000 }
,
{ pressure: -0.1011962891,
  activity: 'walking',
  time: 1474132522000 }
,
{ pressure: -0.1377258301,
  activity: 'walking',
  time: 1474132523000 }
,
{ pressure: -0.1377258301,
  activity: 'walking',
  time: 1474132524000 }
,
{ pressure: -0.1338043213,
  activity: 'walking',
  time: 1474132525000 }
,
{ pressure: -0.1298828125,
  activity: 'walking',
  time: 1474132526000 }
,
{ pressure: -0.1194458008,
  activity: 'walking',
  time: 1474132527000 }
,
{ pressure: -0.0936279297,
  activity: 'walking',
  time: 1474132528000 }
,
{ pressure: -0.0678100586,
  activity: 'walking',
  time: 1474132529000 }
,
{ pressure: -0.0678100586,
  activity: 'walking',
  time: 1474132530000 }
,
{ pressure: -0.0691223145,
  activity: 'walking',
  time: 1474132531000 }
,
{ pressure: -0.0704345703,
  activity: 'walking',
  time: 1474132532000 }
,
{ pressure: -0.0704345703,
  activity: 'walking',
  time: 1474132533000 }
,
{ pressure: -0.0980529785,
  activity: 'walking',
  time: 1474132534000 }
,
{ pressure: -0.0821533203,
  activity: 'walking',
  time: 1474132535000 }
,
{ pressure: -0.0662536621,
  activity: 'walking',
  time: 1474132536000 }
,
{ pressure: -0.1194458008,
  activity: 'walking',
  time: 1474132537000 }
,
{ pressure: -0.1064147949,
  activity: 'walking',
  time: 1474132538000 }
,
{ pressure: -0.0933837891,
  activity: 'walking',
  time: 1474132539000 }
,
{ pressure: -0.1278076172,
  activity: 'walking',
  time: 1474132540000 }
,
{ pressure: -0.1278076172,
  activity: 'walking',
  time: 1474132541000 }
,
{ pressure: -0.1278076172,
  activity: 'walking',
  time: 1474132542000 }
,
{ pressure: -0.1278076172,
  activity: 'walking',
  time: 1474132543000 }
,
{ pressure: -0.1439819336,
  activity: 'walking',
  time: 1474132544000 }
,
{ pressure: -0.1439819336,
  activity: 'walking',
  time: 1474132545000 }
]}


export default {
	getData: getData,
	streamData: streamData,
	getStartDate: getStartDate
}
