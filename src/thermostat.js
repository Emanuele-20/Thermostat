class Thermostat{

  constructor(){   // object constructor function
    this.DEFAULT_TEMPERATURE = 20
    this.temperature = this.DEFAULT_TEMPERATURE; // property
    this.MINIMUM_TEMPERATURE = 10; // comunicate a constant
    this.powerSavingMode = true;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
    this.HIGH_ENERGY_USAGE_LIMIT = 25;
  };

   getCurrentTemperature(){
    return this.temperature;
  }

  up(){
    if (this.isMaximumTeperature()){
      return
    }
    this.temperature += 1;
  }

  down(){
    if (this.isMinimumTemperature()){
      return 'Can set temperature lower that 10 degrees';
    } // if is true stop, if not continue
    this.temperature -= 1;
  }

  isMinimumTemperature(){ // "is" because we want a boolean value
    return this.temperature === this.MINIMUM_TEMPERATURE; // will be true just when current temperature is 10
  } // return always false as soon the temperature is 10 degrees

  isPowerSavingModeOn(){
    return this.powerSavingMode === true;
  }

  isPowerSavingModeOff(){
    return this.powerSavingMode = false;
  }

  switchPowerSavingModeOff(){
    this.powerSavingMode = false;
  }

  switchPowerSavingModeOn(){
    this.powerSavingMode = true;
  }

  isMaximumTeperature(){
    if (this.isPowerSavingModeOn() === false) {
      return this.temperature === this.MAX_LIMIT_PSM_OFF;
    }
    return this.temperature === this.MAX_LIMIT_PSM_ON
  }

  reset(){
    this.temperature = this.DEFAULT_TEMPERATURE;
  }

  energyUsage(){
    if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT){
      return 'Low-usage';
    }
    if (this.temperature <= this.HIGH_ENERGY_USAGE_LIMIT){
      return 'Medium-usage';
    }
    return "High-usage";
  };



};