/**
 * Controls for the Locking module
 */

$('#frontLocks').ready(function(){
    if (Server.isFrontDoorLocked()){
        lockOn('#frontLocks')
    } else {
        lockOff('#frontLocks')
    }
});

$('#backLocks').ready(function(){
    if (Server.isBackDoorLocked()){
        lockOn('#backLocks')
    } else {
        lockOff('#backLocks')
    }
});

function toggleFrontLocks(){
    Server.changeFrontDoor(function(isLocked){
        if (isLocked){
            lockOn('#frontLocks')
        } else {
            lockOff('#frontLocks')
        }
    })
}

function toggleBackLocks(){
    Server.changeBackDoor(function(isLocked){
        if (isLocked){
            lockOn('#backLocks')
        } else {
            lockOff('#backLocks')
        }
    })
}

function lockOn(id){
    $(id).attr('src', 'img/lock_on.jpg');
}

function lockOff(id){
    $(id).attr('src', 'img/lock_off.jpg');
}
