var fs = require('fs');

//var files =['Hochlaufen_Herunter_Aufzug.json']; 
var files =['-.txt']; 

files.forEach(function(file) {

	var obj = JSON.parse(fs.readFileSync(file, 'utf8'));

	var pressure = obj.pressure;
	var activity = obj.activity;

	var result = [];

	var last = '';
	for (var k in pressure){
		if (pressure.hasOwnProperty(k)) {
			if (activity[k] == '') {
				activity[k] = last;
			} else {
				last = 	activity[k];
			}
			result.push({
				"pressure": pressure[k],
				"activity": activity[k],
				"time": Number(k)
			})
			//console.log("Key is " + k + ", value is" + pressure[k]);
		}
	}


	//var last = '';
	//for (var k in activity) {
	//if (activity.hasOwnProperty(k)) {
	//if (activity[k] == '') {
	//activity[k] = last;
	//} else {
	//last = 	activity[k];
	//}
	//result.push({
	//"activity": activity[k],
	//"time": Number(k)
	//}); 
	//}
	//}


	console.log("[");
	result.forEach(function(data) {
		console.log(data );
		console.log(',')
		//fs.appendFile('message.txt', data, function (err) {

		//});
		//console.log("The file was saved!");
	});
});

console.log("]");


//console.log(result);
//obj.forEach(function(data) {
//});
