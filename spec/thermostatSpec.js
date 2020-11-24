'use strict';

var thermostat;
var i = 0;

beforeEach(function(){
    thermostat = new Thermostat();
});

describe('Thermostat:', () => {

    it('Starts at 20 degrees', () => {
        expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

    it('Can increase the temperature', () => {
        thermostat.up();
        expect(thermostat.getCurrentTemperature()).toBe(21);
    })

    it('Can decrease the temperature', () => {
        thermostat.down();
        expect(thermostat.getCurrentTemperature()).toEqual(19)
    })

    it('Has a minimus of 10 degrees', () => {
    for ( i = 0; i < 10; i ++){ // repeat 10 times
        thermostat.down()
    }
        expect(thermostat.getCurrentTemperature()).toEqual(10)
    });

    it('Has power saving mode on by default', () => {
        expect(thermostat.isPowerSavingModeOn()).toBe(true)
    });

    it('Can switch the PSM off', () => {
        thermostat.switchPowerSavingModeOff();
        expect(thermostat.isPowerSavingModeOn()).toBe(false);
    })

    it('Can switch the PSM back on', () => {
        thermostat.switchPowerSavingModeOff();
        expect(thermostat.isPowerSavingModeOn()).toBe(false);
        thermostat.switchPowerSavingModeOn();
        expect(thermostat.isPowerSavingModeOn()).toBe(true);
    })
});

describe('When Power Saving Mode is on', () => {

    it('Has a maximum temperature of 25 degrees', () => {
        for (var i = 0; i < 6; i++) {
            thermostat.up();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(25)
    })
})

describe('When Power Saving Mode is off', () => {

    it('Has a maximum temperature of 32 degrees', () => {
        thermostat.switchPowerSavingModeOff();
        for (i = 0; i < 13; i++){
            thermostat.up();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(32)
    })
})

describe("Reset", () => {

    it('Can be reset to the default temperature', () => {
        for (var i = 0; i < 8; i++) {
            thermostat.up()
        }
        thermostat.reset()
        expect(thermostat.getCurrentTemperature()).toBe(20)
    })
})

describe('Displaying usage levels', () => {
    
    describe('When the temperature is below 18 degrees', () => {
        it('It is considered LOW-USAGE', () => {
            for (i=0; i < 3; i ++) {
                thermostat.down();
            }
            expect(thermostat.energyUsage()).toEqual('Low-usage')
        });
    });

    describe('When the temperature is between 18 and 25 degrees', () => {
        it('It is considered MEDIUM-USAGE', () => {
            expect(thermostat.energyUsage()).toBe('Medium-usage')
        });
    });

    describe('When the temperature is higher than 25', () => {
        it('It is considered HIGH-USAGE', () => {
            thermostat.powerSavingMode = false;
            for (i = 0; i < 7; i++) {
                thermostat.up();
        };
        expect(thermostat.energyUsage()).toEqual('High-usage')
    });
});

});