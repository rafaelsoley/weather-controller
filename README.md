Web version available at [https://rafaelsoley.github.io/weather-controller/](https://rafaelsoley.github.io/weather-controller/)

# Weather-Controller
The receiving base of my MicroBit weather station, made with MakeCode and Python.

## Setup
**1. Set up the LEDs**<br>
Blue LED on pin 0 and gnd<br>
Red LED on pin 1 and gnd<br>
Yellow LED on pin 1 and gnd<br>
<br>
**2. Set up the transmitter**<br>
Follow the steps on [weather-base](https://github.com/rafaelsoley/weather-base)<br>
Once both microbits are turned on and with the programming set up, you should see the blue light turn on in the controller microbit.
<br><br>
**3. Set up the parameters (OPTIONAL)**<br>
For the base project, the parameters are as follows:<br>
- Minimum Temperature: 15 C<br>
- Medium Temperature: 24 C<br>
- Maximum Temperature: 35 C<br>
<br>
When the temperature is either under the minimum temperature, or is over the maximum temperature, the red light will turn on, and a SKULL emoji will appear on the LCD.<br>
When the temperature is exactly at 24 degrees, the yellow light will turn on.<br>
<br>
If the temperature is inside the parameters, only the blue light will be on.<br>
<br>

**4. Edit the code to your liking (OPTIONAL)**<br>
Feel like the code needs some improvements? Feel free to make your edits, and if you want that implemented, fill in a pull request, and I will happily merge the codes.

## Edit this project
![Build status badge](https://github.com/rafaelsoley/weather-controller/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/rafaelsoley/weather-controller** and click import

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/rafaelsoley/weather-controller/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/microbit
```html
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
```
