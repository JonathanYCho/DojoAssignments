function VehicleConstructor(name, wheels, passengers, speed){
	//private vars & methods
	this.distanceTraveled = 0;
	this.updateDistanceTraveled = function(){
		this.distanceTraveled += this.speed;
		console.log(this.distanceTraveled);
	}
	
	//public
	this.name = name;
	this.wheels = wheels;
	this.passengers =passengers;
	this.speed = speed;
}

	VehicleConstructor.prototype.noise = function(noise){
		var noise = noise || "honk honk";
		console.log(noise);
		return this
	};
	VehicleConstructor.prototype.move = function(){
		this.updateDistanceTraveled();
		this.noise();
		return this
	};
	VehicleConstructor.prototype.checkMiles = function(){
		console.log(this.distanceTraveled);
		return this
	}


var car = new VehicleConstructor('car', 4, 2, 40);
car.move();










