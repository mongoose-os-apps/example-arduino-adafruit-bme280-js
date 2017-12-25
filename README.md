# BME280 sensor usage example (JavaScript)

## Overview

This app is a BME280 sensor usage usage example in JavaScript.

## How to install this app

- Install and start [mos tool](https://mongoose-os.com/software.html)
- Switch to the Project page, find and import this app, build and flash it:

<p align="center">
  <img src="https://mongoose-os.com/images/app1.gif" width="75%">
</p>

Alternatively, you can build and flash this example from the command line:

```
### Build
$ git clone https://github.com/mongoose-os-apps/example-arduino-adafruit-bme280-js.git && cd example-arduino-adafruit-bme280-js
$ mos build --platform esp32
$ mos flash

### Wait for Boot and then set I2C Pins
$ mos console
$ mos config-set i2c.scl_gpio=22 i2c.sda_gpio=23

### Verify I2C
$ mos config-get i2c
```

## Using this Example

For this example to work properly you must ensure your I2C or SPI configuration is correct.  You can check your device's current configuration using `mos config-get`, look for the "i2c" or "spi" section.  

```
$ mos config-get i2c
Using port /dev/ttyUSB1
{
  "debug": false,
  "enable": true,
  "freq": 100000,
  "scl_gpio": 22,
  "sda_gpio": 23
}
```

When your device boots, the output should look like the following, watch carefully for the "mgos_i2c_create" (or equivilent SPI) line from the boot up messages to ensure your pins were initialized correctly via the Web UI or `mos console`:

```
[Dec 25 13:25:24.986] mgos_i2c_create      I2C GPIO init ok (SDA: 23, SCL: 22)
[Dec 25 13:25:24.992] mg_rpc_channel_uart  0x3ffbc478 UART0
[Dec 25 13:25:25.001] mgos_init            Init done, RAM: 317608 total, 275252 free, 275252 min free
[Dec 25 13:25:25.098] ====================== Starting ============================= 
[Dec 25 13:25:25.424] mongoose_poll        New heap free LWM: 261716
[Dec 25 13:25:27.426] Temperature: 22.960000 *C 
[Dec 25 13:25:27.433] Humidity: 43.640000 %RH 
[Dec 25 13:25:27.442] Pressure: 1025.687700 hPa 
[Dec 25 13:25:29.426] Temperature: 22.970000 *C 
[Dec 25 13:25:29.433] Humidity: 43.640000 %RH 
[Dec 25 13:25:29.441] Pressure: 1025.714100 hPa 
[Dec 25 13:25:31.425] Temperature: 22.960000 *C 
[Dec 25 13:25:31.433] Humidity: 43.650000 %RH 
[Dec 25 13:25:31.441] Pressure: 1025.692000 hPa 
```

Please note that on ESP8266 and ESP32 the pins you choose to use for I2C aren't important, just ensure your configuration is on the pins you've selected.
