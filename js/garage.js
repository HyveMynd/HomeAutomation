/**
 * Created by andresmonroy on 6/23/14.
 */

$('#garage').ready(function(){
   if(Server.isGarageOpen()){
       garageOpen();
   } else {
       garageClose();
   }
});

function toggleGarage(){
    Server.changeGarage(function(isGarageOpen){
        if (isGarageOpen){
            garageOpen();
        } else {
            garageClose();
        }
    });
}

function garageOpen(){
    $('#garage').attr('src', 'img/garage_open.jpg');
}

function garageClose(){
    $('#garage').attr('src', 'img/garage_closed.jpg');
}