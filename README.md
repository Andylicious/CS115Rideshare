# CS115 - Team Hipster - Ionic SC 
##Group repository for CS115 group

Names:

Andrew Lien

John Ta

Taylor Stratton

Kent Diao

Kangdi Ni

Bryant Tran

##Summary of the App 

This is a hybrid web application written entirely in javascript for the CMPS 115 - Intro to Software Engineering class at the University of California, Santa Cruz. Our team is using the Ionic Framework as the front-end user interface, and are attempting to write the entire web scraper and parser on the client side for the purpose of the class. Future implementations will be moving the app onto a dedicated server where we will write server sided code that will parse UCSc’s public class page and the app will use the server’s information, instead of UCSC’s 

Our application uses AngularJS’ ‘$http’ requests for the GET and POST request, and we’re using crossorigin.me as a cors proxy for the GET request, in order to get around the CORs issue. So far, POST request is not working for the average user, but once the application gets ported to their respective app stores (iOS and Android), users should be able to search for their classes successfully. 

##screenshots 

![Alt text](screenshots/app1_screenshot.png?raw=true “Screenshot 1“)

![Alt text](screenshots/app2_screenshot.png?raw=true “Screenshot 2“)


##Notes to team members (From Andy): 

### Where to start

All of our stuff will be modified under IonicSC/www/ the css, img, js, lib, and templates will have our relevent stuff. Don't worry about the other files. 

### How to start

To set up the dev environment, if you are on the mac, make sure you have Xcode, Android SDK (android studio down is OK), JDK 7, VirtualBox, and Genymotion. This option is not needed for the initial development phases.

What is essential is to have node.js installed on your machine. 

To install cordova: 
‘ sudo npm install -g cordova ‘

And to install Ionic: 
‘ sudo npm install -g ionic ‘

To install Bower:
‘ sudo npm install -g bower ‘

To test app, go to the IonicSC/ root folder and use the

‘ ionic serve ‘

command to view the web application. 

Use

‘ ionic serve --lab ‘

to view the android and ios version running side by side. 

To add for ios and android platform, the process is as follows:

‘ ionic platform ios ‘

‘ ionic platform android ‘

To build:

‘ ionic build ios ‘

‘ ionic build android ‘

To test:

‘ ionic emulate ios ‘

‘ ionic run android //for Genymotion ‘

‘  ionic emulate android //for the slower android emulator in the SDK  ‘

If you're getting

‘ Error executing "adb devices": ADB server didn't ACK 

   * failed to start daemon * ‘

Go to Settings in Genymotion > ADB tab > Use custom Android SDK tools and select the path of your Android SDK installation. 

For the adventerous team members and want to test on your device: 

‘ ionic run ios ‘

‘ ionic run android ‘


