/*
 * Copyright (c) 2014-2017 Cesanta Software Limited
 * All rights reserved
 *
 * This example demonstrates how to use mJS Arduino Adafruit_BME280
 * library API to get data from BME280 combined humidity and pressure sensor.
 * 
 * DON'T FORGET TO SET YOUR I2C or SPI PINS IN THE MONGOOSE CONFIG!
 * Example:  `mos config-set i2c.scl_gpio=22 i2c.sda_gpio=23`
 * 
 * Please examine the README for helpful details on using this example.
 */

// Load Mongoose OS API
load('api_timer.js');
load('api_arduino_bme280.js');

// Sensors address (Usually: 0x76 or 0x77)
let sens_addr = 0x76;

// Initialize Adafruit_BME280 library using the I2C interface
let bme = Adafruit_BME280.createI2C(sens_addr);

// To use SPI instead of I2C, remove the above line and use one of the following:
// let bme = Adafruit_BME280.createSPI(cspin)
//      or 
// let bme = Adafruit_BME280.createSPIFull(cspin, mosipin, misopin, sckpin)
//   


// Initialize the sensor
if (bme.begin() === 0) {
  print('Cant find a sensor');
} else {
  // This function reads data from the BME280 sensor every 2 seconds
  Timer.set(2000 /* milliseconds */, Timer.REPEAT, function() {
    print('Temperature:', bme.readTemperature(), '*C');
    print('Humidity:', bme.readHumidity(), '%RH');
    print('Pressure:', bme.readPressure(), 'hPa');
  }, null);
}
