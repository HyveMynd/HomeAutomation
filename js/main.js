/**
 * Loads different modules into the main content area according to the active module.
 */

function loadTemp(){
    $("#main").load('includes/temperature.html');
}

function loadHome(){
    $('#main').load('includes/home.html');
}

function loadLights(){
    $('#main').load('includes/lights.html');
}

function loadGarage(){
    $('#main').load('includes/garage.html');
}

function loadLocks(){
    $('#main').load('includes/locks.html');
}

$('#main').ready(function(){
    loadHome();
});

