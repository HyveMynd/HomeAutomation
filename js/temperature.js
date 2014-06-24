$('#temperature').ready(function(){
    var temp = Server.getTemperature();
    setTemp(temp);
});

function temperatureUp(){
    var temp = Server.getTemperature();
    Server.setTemperature(++temp, function (currentTemp){
        setTemp(currentTemp);
    });
}

function temperatureDown(){
    var temp = Server.getTemperature();
    Server.setTemperature(--temp, function (currentTemp){
        setTemp(currentTemp);
    });
}

function setTemp(temp){
    $('#temperature').css('width', temp + '%').text(temp);
}