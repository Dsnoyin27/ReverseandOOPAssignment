function Car (name, model, type){
    this.name = name || 'General';
    this.model = model || 'GM';
    this.type = type || 'General';
  this.isSaloon = (type === "trailer") ? false : true;
    this.numOfWheels = this.isSaloon ? 4 : 8;
    this.numOfDoors = (name === "Porshe") || (name === "Koenigsegg") ? 2 : 4;
  this.speed = '0 km/h';
   
}
Car.prototype.drive = function( rate ){
  
  var accel = (this.type === "trailer") ? 11 : 50;
  
  this.speed = (accel * rate ) + ' km/h';
  
  return this;
};