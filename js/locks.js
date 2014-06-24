/**
 * Created by andresmonroy on 6/23/14.
 */

$('#frontLocks').ready(function(){
    if (Server.isLightsOn()){
        lightOn()
    } else {
        lightOff()
    }
});

$('#backLocks').ready(function(){
    if (Server.isLightsOn()){
        lightOn()
    } else {
        lightOff()
    }
});

function toggleLights(){
    Server.changeLights(function(isLightOn){
        if (isLightOn){
            lightOn()
        } else {
            lightOff()
        }
    })
}

function lockOn(id){
    $(id).attr('src', 'img/bulb_on.jpg');
}

function lockOff(id){
    $(id).attr('src', 'img/bulb_off.jpg');
}
