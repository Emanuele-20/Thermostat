$(document).ready(function(){

    $('#current-city').change(function() {
        var city = $('#current-city').val();
        displayWeather(city)
    })

    function displayWeather(city) {
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
        var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
        var units = '&units=metric';
        $.get(url + token + units, function(data) {
        $('#current-temperature').text(data.main.temp);
        })
    }

    displayWeather('London');

    var thermostat = new Thermostat;
    updatedTemperature();

    $('#temperature-up').on('click', function(){
        thermostat.up();
        updatedTemperature();
    });
    $('#temperature-down').click(()=> {
        thermostat.down();
        updatedTemperature();
    });
    $('#temperature-reset').click(() => {
        thermostat.reset();
        updatedTemperature();
    });
    $("#powersaving-on").click(() => {
        thermostat.switchPowerSavingModeOn();
        $("#power-saving-status").text('ON')
        updatedTemperature()
    });
    $("#powersaving-off").click(() => {
        thermostat.switchPowerSavingModeOff();
        $("#power-saving-status").text('OFF')
        updatedTemperature()
    });
    
    function updatedTemperature(){
        $('#temperature').text(thermostat.temperature)
        $('#temperature').attr('class', thermostat.energyUsage())
        // if(thermostat.energyUsage() === 'Low-usage')
        //     $('#temperature').css('color', 'green')
        // if(thermostat.energyUsage() === 'Medium-usage')
        //     $('#temperature').css('color', 'black')
        // if(thermostat.energyUsage() === 'High-usage')
        //     $('#temperature').css('color', 'red')
    }






    
})