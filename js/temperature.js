$('#temperature').ready(function(){
   var temp = Server.getTemperature();
   $('#temperature').css('width', temp + '%');
});

function temperatureUp(){
    var temp = Server.getTemperature();
    Server.setTemperature(++temp, function (currentTemp){
        $('#temperature').css('width', currentTemp + '%');
    });
}

function temperatureDown(){
    var temp = Server.getTemperature();
    Server.setTemperature(--temp, function (currentTemp){
        $('#temperature').css('width', currentTemp + '%');
    });
}