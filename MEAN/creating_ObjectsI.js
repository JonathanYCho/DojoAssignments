function VehicleConstructor(name, wheels, passengers){
	var vehicle = {};

	vehicle.name = name;
	vehicle.wheels = wheels;
	vehicle.passengers = passengers;

	vehicle.noise = function(noise){
		var noise = noise;
		console.log(noise);
	}
	return vehicle;
}

var bike = VehicleConstructor("bike", 2, 1){
	bike.noise = function(){
	console.log("ring, ring")
	}
}


var sedan = VehicleConstructor("sedan", 4, 4){
	sedan.noise = function(){
		console.log("honk, honk")
	}
}

var bus = VehicleConstructor('bus', 8, 25){
	bus.pickupPassengers = function(newPassengers){
 	bus.passengers += newPassengers;
	}
	return bus.passengers;
}