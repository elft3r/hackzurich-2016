import _ from 'underscore'

var streamData = function() {
	return getData()
}

var getData = function() {
	return [{
			"name": "-1",
			"value": 20
		},{
			"name": "0",
			"value": 40
		},{
			"name": "1",
			"value": 10
		},{
			"name": "3",
			"value": 20
		},{
			"name": "4",
			"value": 10
		}]
}

export default {
	getData: getData,
	streamData: streamData
}
