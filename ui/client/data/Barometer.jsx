import _ from 'underscore'

var getStartDate = function() {
	return new Date(_.first(getData())["date"]);
}

var streamData = function(time) {
	return _.filter(getData(), function(val) {
		return new Date(val["date"]) < time;
	});

}

var getData = function() {
	return [{
		"relativeAltitude" : -18.9769287109375,
		"pressure" : 96.8427734375,
		"date" : "2016-09-17T20:45:07.420+02:00",
		"type" : "Barometer"
	},
		{
			"relativeAltitude" : -18.9769287109375,
			"pressure" : 96.8427734375,
			"date" : "2016-09-17T20:45:08.826+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -18.96286010742188,
			"pressure" : 96.84260559082031,
			"date" : "2016-09-17T20:45:10.233+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.0609130859375,
			"pressure" : 96.84375,
			"date" : "2016-09-17T20:45:11.666+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.0609130859375,
			"pressure" : 96.84375,
			"date" : "2016-09-17T20:45:13.043+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.0609130859375,
			"pressure" : 96.84375,
			"date" : "2016-09-17T20:45:14.449+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.00979614257812,
			"pressure" : 96.84315490722656,
			"date" : "2016-09-17T20:45:15.867+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -18.99624633789062,
			"pressure" : 96.84300231933594,
			"date" : "2016-09-17T20:45:17.261+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -18.99624633789062,
			"pressure" : 96.84300231933594,
			"date" : "2016-09-17T20:45:18.667+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -18.951904296875,
			"pressure" : 96.84248352050781,
			"date" : "2016-09-17T20:45:20.074+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.01187133789062,
			"pressure" : 96.84317779541016,
			"date" : "2016-09-17T20:45:21.479+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.02334594726562,
			"pressure" : 96.84331512451172,
			"date" : "2016-09-17T20:45:22.885+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.02490234375,
			"pressure" : 96.84333038330078,
			"date" : "2016-09-17T20:45:24.291+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.03482055664062,
			"pressure" : 96.84344482421875,
			"date" : "2016-09-17T20:45:25.697+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.03482055664062,
			"pressure" : 96.84344482421875,
			"date" : "2016-09-17T20:45:27.103+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.03482055664062,
			"pressure" : 96.84344482421875,
			"date" : "2016-09-17T20:45:28.509+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.02804565429688,
			"pressure" : 96.84336853027344,
			"date" : "2016-09-17T20:45:29.915+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.04318237304688,
			"pressure" : 96.84353637695312,
			"date" : "2016-09-17T20:45:31.321+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.04318237304688,
			"pressure" : 96.84353637695312,
			"date" : "2016-09-17T20:45:32.727+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.0859375,
			"pressure" : 96.84403991699219,
			"date" : "2016-09-17T20:45:34.132+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.0859375,
			"pressure" : 96.84403991699219,
			"date" : "2016-09-17T20:45:35.538+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.06454467773438,
			"pressure" : 96.84378814697266,
			"date" : "2016-09-17T20:45:36.945+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.06454467773438,
			"pressure" : 96.84378814697266,
			"date" : "2016-09-17T20:45:38.350+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.10366821289062,
			"pressure" : 96.84424591064453,
			"date" : "2016-09-17T20:45:39.756+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.11825561523438,
			"pressure" : 96.84441375732422,
			"date" : "2016-09-17T20:45:41.162+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.10366821289062,
			"pressure" : 96.84424591064453,
			"date" : "2016-09-17T20:45:42.568+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.10836791992188,
			"pressure" : 96.84429931640625,
			"date" : "2016-09-17T20:45:43.975+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.10836791992188,
			"pressure" : 96.84429931640625,
			"date" : "2016-09-17T20:45:45.404+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.10836791992188,
			"pressure" : 96.84429931640625,
			"date" : "2016-09-17T20:45:46.790+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.10104370117188,
			"pressure" : 96.84420776367188,
			"date" : "2016-09-17T20:45:48.192+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.05621337890625,
			"pressure" : 96.84369659423828,
			"date" : "2016-09-17T20:45:49.598+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.05621337890625,
			"pressure" : 96.84369659423828,
			"date" : "2016-09-17T20:45:51.004+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.13076782226562,
			"pressure" : 96.84455108642578,
			"date" : "2016-09-17T20:45:52.410+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.13076782226562,
			"pressure" : 96.84455108642578,
			"date" : "2016-09-17T20:45:53.816+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.10992431640625,
			"pressure" : 96.84431457519531,
			"date" : "2016-09-17T20:45:55.222+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.10992431640625,
			"pressure" : 96.84431457519531,
			"date" : "2016-09-17T20:45:56.628+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.11251831054688,
			"pressure" : 96.84434509277344,
			"date" : "2016-09-17T20:45:58.034+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.11251831054688,
			"pressure" : 96.84434509277344,
			"date" : "2016-09-17T20:45:59.439+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.17718505859375,
			"pressure" : 96.8450927734375,
			"date" : "2016-09-17T20:46:00.846+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.14434814453125,
			"pressure" : 96.84471130371094,
			"date" : "2016-09-17T20:46:02.280+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.14434814453125,
			"pressure" : 96.84471130371094,
			"date" : "2016-09-17T20:46:03.657+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.14434814453125,
			"pressure" : 96.84471130371094,
			"date" : "2016-09-17T20:46:05.063+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.22360229492188,
			"pressure" : 96.84563446044922,
			"date" : "2016-09-17T20:46:06.469+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.23403930664062,
			"pressure" : 96.84574890136719,
			"date" : "2016-09-17T20:46:07.875+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.24758911132812,
			"pressure" : 96.84590911865234,
			"date" : "2016-09-17T20:46:09.281+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.25018310546875,
			"pressure" : 96.84593963623047,
			"date" : "2016-09-17T20:46:10.687+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.25018310546875,
			"pressure" : 96.84593963623047,
			"date" : "2016-09-17T20:46:12.100+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.26480102539062,
			"pressure" : 96.84610748291016,
			"date" : "2016-09-17T20:46:13.499+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.27157592773438,
			"pressure" : 96.84618377685547,
			"date" : "2016-09-17T20:46:14.905+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.3565673828125,
			"pressure" : 96.84717559814453,
			"date" : "2016-09-17T20:46:16.311+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.3565673828125,
			"pressure" : 96.84717559814453,
			"date" : "2016-09-17T20:46:17.717+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.3565673828125,
			"pressure" : 96.84717559814453,
			"date" : "2016-09-17T20:46:19.123+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.39047241210938,
			"pressure" : 96.84756469726562,
			"date" : "2016-09-17T20:46:20.529+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.4619140625,
			"pressure" : 96.848388671875,
			"date" : "2016-09-17T20:46:21.935+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.4619140625,
			"pressure" : 96.848388671875,
			"date" : "2016-09-17T20:46:23.341+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.42855834960938,
			"pressure" : 96.84800720214844,
			"date" : "2016-09-17T20:46:24.747+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.42855834960938,
			"pressure" : 96.84800720214844,
			"date" : "2016-09-17T20:46:26.152+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.42855834960938,
			"pressure" : 96.84800720214844,
			"date" : "2016-09-17T20:46:27.558+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.47390747070312,
			"pressure" : 96.84853363037109,
			"date" : "2016-09-17T20:46:28.967+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.496337890625,
			"pressure" : 96.84878540039062,
			"date" : "2016-09-17T20:46:30.370+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.496337890625,
			"pressure" : 96.84878540039062,
			"date" : "2016-09-17T20:46:31.776+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.43374633789062,
			"pressure" : 96.84806060791016,
			"date" : "2016-09-17T20:46:33.182+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.43374633789062,
			"pressure" : 96.84806060791016,
			"date" : "2016-09-17T20:46:34.594+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.43637084960938,
			"pressure" : 96.84809112548828,
			"date" : "2016-09-17T20:46:35.994+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.48434448242188,
			"pressure" : 96.84864807128906,
			"date" : "2016-09-17T20:46:37.407+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.52658081054688,
			"pressure" : 96.84914398193359,
			"date" : "2016-09-17T20:46:38.806+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.52658081054688,
			"pressure" : 96.84914398193359,
			"date" : "2016-09-17T20:46:40.212+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.52658081054688,
			"pressure" : 96.84914398193359,
			"date" : "2016-09-17T20:46:41.618+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.54690551757812,
			"pressure" : 96.84937286376953,
			"date" : "2016-09-17T20:46:43.026+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.5615234375,
			"pressure" : 96.84954833984375,
			"date" : "2016-09-17T20:46:44.430+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.60897827148438,
			"pressure" : 96.85009002685547,
			"date" : "2016-09-17T20:46:45.837+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.60897827148438,
			"pressure" : 96.85009002685547,
			"date" : "2016-09-17T20:46:47.242+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.52032470703125,
			"pressure" : 96.84906768798828,
			"date" : "2016-09-17T20:46:48.648+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.52032470703125,
			"pressure" : 96.84906768798828,
			"date" : "2016-09-17T20:46:50.054+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.58810424804688,
			"pressure" : 96.849853515625,
			"date" : "2016-09-17T20:46:51.459+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.58810424804688,
			"pressure" : 96.849853515625,
			"date" : "2016-09-17T20:46:52.866+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.63711547851562,
			"pressure" : 96.85041809082031,
			"date" : "2016-09-17T20:46:54.271+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.56307983398438,
			"pressure" : 96.84956359863281,
			"date" : "2016-09-17T20:46:55.680+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.634521484375,
			"pressure" : 96.85038757324219,
			"date" : "2016-09-17T20:46:57.083+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.60531616210938,
			"pressure" : 96.85005187988281,
			"date" : "2016-09-17T20:46:58.490+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.634521484375,
			"pressure" : 96.85038757324219,
			"date" : "2016-09-17T20:46:59.895+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.66580200195312,
			"pressure" : 96.85075378417969,
			"date" : "2016-09-17T20:47:01.301+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.66580200195312,
			"pressure" : 96.85075378417969,
			"date" : "2016-09-17T20:47:02.707+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.62252807617188,
			"pressure" : 96.85025024414062,
			"date" : "2016-09-17T20:47:04.142+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.62252807617188,
			"pressure" : 96.85025024414062,
			"date" : "2016-09-17T20:47:05.519+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.62252807617188,
			"pressure" : 96.85025024414062,
			"date" : "2016-09-17T20:47:06.925+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.58914184570312,
			"pressure" : 96.84986877441406,
			"date" : "2016-09-17T20:47:08.331+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.58914184570312,
			"pressure" : 96.84986877441406,
			"date" : "2016-09-17T20:47:09.737+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.58914184570312,
			"pressure" : 96.84986877441406,
			"date" : "2016-09-17T20:47:11.170+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.51876831054688,
			"pressure" : 96.84904479980469,
			"date" : "2016-09-17T20:47:12.549+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.51199340820312,
			"pressure" : 96.84896850585938,
			"date" : "2016-09-17T20:47:13.955+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.47756958007812,
			"pressure" : 96.84857177734375,
			"date" : "2016-09-17T20:47:15.360+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.51199340820312,
			"pressure" : 96.84896850585938,
			"date" : "2016-09-17T20:47:16.773+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.54690551757812,
			"pressure" : 96.84937286376953,
			"date" : "2016-09-17T20:47:18.172+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.58706665039062,
			"pressure" : 96.84984588623047,
			"date" : "2016-09-17T20:47:19.578+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.67364501953125,
			"pressure" : 96.85084533691406,
			"date" : "2016-09-17T20:47:20.985+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.67364501953125,
			"pressure" : 96.85084533691406,
			"date" : "2016-09-17T20:47:22.390+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.67050170898438,
			"pressure" : 96.85080718994141,
			"date" : "2016-09-17T20:47:23.796+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.62826538085938,
			"pressure" : 96.85031890869141,
			"date" : "2016-09-17T20:47:25.202+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.60427856445312,
			"pressure" : 96.85003662109375,
			"date" : "2016-09-17T20:47:26.608+02:00",
			"type" : "Barometer"
		},
		{
			"relativeAltitude" : -19.59698486328125,
			"pressure" : 96.84995269775391,
			"date" : "2016-09-17T20:47:28.014+02:00",
			"type" : "Barometer"
		}]
}

export default {
	getData: getData,
	streamData: streamData,
	getStartDate: getStartDate
}
