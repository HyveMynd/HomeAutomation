/**
 * Created by andresmonroy on 6/24/14.
 */
var Server = {
    house: {
        lights: false,
        garage: false,
        frontDoor: true,
        backDoor: true,
        temperature: 72
    },

    isLightsOn: function(){
      return this.house.lights;
    },

    isGarageOpen: function(){
        return this.house.garage
    },

    isFrontDoorLocked: function(){
        return this.house.frontDoor;
    },

    isBackDoorLocked: function(){
        return this.house.backDoor;
    },

    getTemperature: function(){
        return this.house.temperature;
    },

    changeLights: function(callback){
        this.house.lights = !this.house.lights;
        callback(this.house.lights);
    },

    changeGarage: function(callback){
        this.house.garage = !this.house.garage;
        callback(this.house.garage);
    },

    changeFrontDoor: function(callback){
        this.house.frontDoor = !this.house.frontDoor;
        callback(this.house.frontDoor);
    },

    changeBackDoor: function(callback){
        this.house.backDoor = !this.house.backDoor;
        callback(this.house.backDoor);
    },

    setTemperature: function(temp, callback){
        this.house.temperature = temp;
        callback(this.house.temperature);
    }
}