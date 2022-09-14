/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: true, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	
	modules: [
		{//------------------Default Modules-----------------------------
		},
		{//Alerts
			module: "alert",
			classes: "default everyone"
		},
		{//Notifications
			module: "updatenotification",
			position: "top_bar"
			classes: "default everyone"
		},
		{//Clock
			module: "clock",
			position: "top_left",
			classes: "default everyone"
		},	
		{//Network Symbol
			module: "MMM-network-signal", //https://github.com/PoOwAa/MMM-network-signal
			position: "bottom_right",
			config: {
				updateInterval: 6000
			},
			classes: "default everyone"
		},
		{//REMOVE: Compliment Bar
			module: "compliments",
			position: "lower_third",
			classes: "default everyone"
		}, 
		{//------------------Schoeler Board------------------------------
		},
		{//REMOVE: US Holidays
			//TODO: Find a calendar API for integrating with Jenny's calendar
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
					}
				]
			},
			classes: "schoeler"
		},
		{//Schoeler Date Countdowns
			//TODO: Create a date calculation for Schoeler significant dates
			module: "calendar",
			header: "Special Dates",
			position: "top_left",
			config: {
				calendars: [
					{
						
					}
				]
			},
			classes: "schoeler"
		},
		{//Calendar - Today and Tomorrow
			module: "calendar",
			header: "Schoeler Calendar",
			position: "top_left",
			config: {//TODO: Find a calendar API for integrating with Jenny's calendar
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
					}
				]
			},
			classes: "schoeler"
		},
		{//Weather-Current
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "University Place",
				locationID: "5814450", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "f679cd76218b842ca92e8f109f5d7d78"
			},
			classes: "schoeler"
		},
		{//Weather-Forecast
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "University Place",
				locationID: "5814450", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "f679cd76218b842ca92e8f109f5d7d78"
			},
			classes: "schoeler"
		},
		{//Newsfeed-NewYorkTimes
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			},
			classes: "schoeler"
		},
		{//------------------Jaxon Board------------------------------
			module: "custommodules/mymodule"
		},
		{//Daily Pokemon
			module: "custommodules/mymodule"
		},
		{//Daily Joke
			module: "custommodules/mymodule"
		},
		{//Birthday Countdown
			module: "custommodules/mymodule"
		},
		{//Use module schedular to show earth during day and constilations
		},
		{//------------------Keaton Board------------------------------
			module: "custommodules/mymodule"
		},
		{//Birthday Countdown
			module: "custommodules/mymodule"
		},
		{//------------------Calendar Board------------------------------
			//TODO: Full page calendar with edit commands
		},
		{//------------------System Modules------------------------------
		},
		{//Profiles with Messages
			module: "MMM-ProfileSwitcher", //https://github.com/tosti007/MMM-ProfileSwitcher
			config: {
				alwaysShowLeave: true,
				enterMessages: {
					"Michael Jenny Schoeler": ["Hello %profile%","Welcome %profile%","Good Day %profile%"]
					"Jaxon Keaton": ["Hello Master %profile%", "Looking good today %profile%", "Welcome Wise %profile%", "Have a great day %profile%"]
					"Jaxon": ["Hello Jaxon the Bookworm"]
					"Keaton": ["Hello Crouching Tiger, Hidden Keaton"]
				}
				leaveMessages: {
					"everyone": "Goodbye!"
				}
			}
		},
		{//Voice Commands
			module: "MMM-Voice-Commands",
			config: {
				debug: false, //Displays end results and errors from annyang in the Log
				autoStart: true, //Adds annyang commands when it first starts
				activateCommand: "hello board", //Command to active all other commands
				deactivateCommand: "goodbye board", //Command to deactivate all other commands
				alertHeard: false, //Whether an alert should be shown when annyang hears a phrase (mostly for debug)
				commands: {
					"command statement :variable (optional statement)": "SOCKET_NOTIFICATION_NAME",
					//The payload of the socket notification will be whatever is said in the :variable
					"command statement *variable": function(param){
						alert("Whatever is said in the *variable space is given as the "+param);
						//These function's 'this' are bound to the module's 'this' so you can do stuff like:
						this.sendNotification("PAGE_SELECT", "2");
					}
				}
			}
		},
		{//Walt Disney Wait Times - Disneyland
			module: "MMM-DisneyWaitTimes",
			header: "Magic Kingdom - Disneyland",
			position: "top_left",
			config: {
				park: {
					name: "Magic Kingdom - Disneyland",
					rides: [
						"Alice in Wonderland",
						"Astro Orbitor",
						"Autopia",
						"Big Thunder Mountain Railroad",
						"Buzz Lightyear Astro Blasters",
						"Casey Jr. Circus Train",
						"Davy Crockett's Explorer Canoes",
						"Disneyland Monorail",
						"Disneyland Railroad - Tomorrowland Station",
						"Dumbo the Flying Elephant",
						"Encounter the Dark Side at Star Wars Launch Bay",
						"Fantasmic!",
						"Finding Nemo Submarine Voyage",
						"Gadget's Go Coaster",
						"Haunted Mansion",
						"Indiana Jones™ Adventure",
						"it's a small world",
						"Jungle Cruise",
						"King Arthur Carrousel",
						"Mad Tea Party",
						"Mark Twain Riverboat",
						"Matterhorn Bobsleds",
						"Meet Disney Princesses at Royal Hall",
						"Meet the Resistance at Star Wars Launch Bay",
						"Meet Tinker Bell at Pixie Hollow",
						"Mickey and the Magical Map",
						"Mickey's House and Meet Mickey",
						"Millennium Falcon: Smugglers Run",
						"Mr. Toad's Wild Ride",
						"Peter Pan's Flight",
						"Pinocchio's Daring Journey",
						"Pirate's Lair on Tom Sawyer Island",
						"Pirates of the Caribbean",
						"Roger Rabbit's Car Toon Spin",
						"Sailing Ship Columbia",
						"Snow White's Scary Adventures",
						"Space Mountain",
						"Splash Mountain",
						"Star Tours – The Adventures Continue",
						"Star Wars Launch Bay",
						"Storybook Land Canal Boats",
						"Tarzan's Treehouse™",
						"The Disneyland Story presenting Great Moments with Mr. Lincoln",
						"The Many Adventures of Winnie the Pooh",
						"Walt Disney's Enchanted Tiki Room"
					]
				}
			}
		},
		{//Walt Disney Wait Times - California Adventures
			module: "MMM-DisneyWaitTimes",
			header: "California Adventure - Disneyland",
			position: "top_left",
			config: {
				park: {
					name: "California Adventure - Disneyland",
					rides: [
						"Animation Academy",
						"Disney Junior Dance Party!",
						"Frozen – Live at the Hyperion",
						"Golden Zephyr",
						"Goofy's Sky School",
						"Grizzly River Run",
						"Guardians of the Galaxy – Mission: BREAKOUT!",
						"Heroic Encounter: Captain Marvel",
						"Incredicoaster",
						"Inside Out Emotional Whirlwind",
						"Jessie's Critter Carousel",
						"Jumpin' Jellyfish",
						"Luigi's Rollickin' Roadsters",
						"Mater's Junkyard Jamboree",
						"Mickey's PhilharMagic",
						"Monsters Inc. Mike & Sulley to the Rescue!",
						"Pixar Pal-A-Round – Non-Swinging",
						"Pixar Pal-A-Round – Swinging",
						"Radiator Springs Racers",
						"Red Car Trolley - Buena Vista Street",
						"Redwood Creek Challenge Trail",
						"Silly Symphony Swings",
						"Soarin' Over California",
						"Sorcerer's Workshop",
						"The Little Mermaid ~ Ariel's Undersea Adventure",
						"Toy Story Midway Mania!",
						"Turtle Talk with Crush",
						"Walt Disney Imagineering Blue Sky Cellar",
						"World of Color"
					]
				}
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
