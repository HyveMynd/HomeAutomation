/**
 * Created by andresmonroy on 6/23/14.
 */

$('#lights').ready(function(){
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

function lightOn(){
    $('#lights').attr('src', 'img/bulb_on.jpg');
}

function lightOff(){
    $('#lights').attr('src', 'img/bulb_off.jpg');
}
