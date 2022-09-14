# Fast Pause Project - Home Automation Display

For work sabbatical, I am going to work on a home display. I plan on incorporating many different forms of automation for my home while consolidating it all into a home display. My day 1 plan is to use Magic Mirror as the basis for my home display and use Google Assistant + IFTT for home automation.



## Weather API - OpenWeather
Website: https://openweathermap.org/appid

API Key:<br/>
Location Keys <br/>
&nbsp;&nbsp;&nbsp;Tacoma, Washington: 5812944 <br/>
&nbsp;&nbsp;&nbsp;University Place, Washington: 5814450<br/>
&nbsp;&nbsp;&nbsp;Wellington, New Zealand: 2179537<br/>
  
Note: Could try and see if I can send a call to openweathermap with a location name, return the location key, and run a script to auto update the config file. 

## MMM Modules

#### 1) Network Symbol
Github: https://github.com/PoOwAa/MMM-network-signal<br/>
Prereq: NPM Ping<br/>
&nbsp;&nbsp;- https://www.npmjs.com/package/ping<br/>
&nbsp;&nbsp;- install command: npm install ping<br/>

Execute: <br/>
cd ~/MagicMirror/modules/<br/>
git clone https://github.com/PoOwAa/MMM-network-signal.git<br/>
cd MMM-network-signal<br/>
npm i<br/>

#### 2) Profile Switcher
Github: https://github.com/tosti007/MMM-ProfileSwitcher<br/>

#### 3) Voice Commands
Gitub: 
