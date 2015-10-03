# CS115 - Team Hipster - Ionic SC 
Group repository for CS115 group

Names:
Andrew Lien
John Ta
Taylor Stratton
Kent Diao
Kangdi
Bryant Tran

Notes to team members (From Andy): 

--Where to start
All of our stuff will be modified under IonicSC/www/ the css, img, js, lib, and templates will have our relevent stuff. Don't worry about the other files. 

--How to start
To set up the dev environment, if you are on the mac, make sure you have Xcode, Android SDK (android studio down is OK), JDK 7, VirtualBox, and Genymotion. This option is not needed for the initial development phases.

What is essential is to have node.js installed on your machine. 

To install cordova: 
>> sudo npm install -g cordova 

And to install Ionic: 
>> sudo npm install -g ionic

To install Bower:
>> sudo npm install -g bower

To test app, go to the IonicSC/ root folder and use the
>> ionic serve
command to view the web application. 

Use
>>ionic serve --lab
to view the android and ios version running side by side. 

To add for ios and android platform, the process is as follows:
>> ionic platform ios
>> ionic platform android 

To build:
>> ionic build ios
>> ionic build android 

To test:
>> ionic emulate ios
>> ionic run android //for Genymotion
>> ionic emulate android //for the slower android emulator in the SDK

If you're getting
>> Error executing "adb devices": ADB server didn't ACK
   * failed to start daemon *
Go to Settings in Genymotion > ADB tab > Use custom Android SDK tools and select the path of your Android SDK installation. 

For the adventerous team members and want to test on your device: 
>> ionic run ios

>> ionic run android


