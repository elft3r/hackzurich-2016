
var randomNumber = function() {
return Math.floor(Math.random() * 8) - 1;
}
var getRandomData = function(data) {
 var result = 	
			[
						{"date" : data},
						{"name": "elevator_0", "floor": randomNumber()},
						{"name": "elevator_1", "floor": randomNumber()},
						{"name": "elevator_2", "floor": randomNumber()},
						{"name": "elevator_3", "floor": randomNumber()},
						{"name": "elevator_4", "floor": randomNumber()},
						{"name": "elevator_5", "floor": randomNumber()},
						{"name": "elevator_6", "floor": randomNumber()}
			];

			console.log(result);
			return result;

}

var result = [];

for (var i = 0;  i < 100; i++) {
	var t = new Date();
	t = t.setSeconds(t.getSeconds() + 10 * i);
	result.push(getRandomData(t));
}

console.log(result);

