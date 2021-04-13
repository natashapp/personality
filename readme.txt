Ios added

first plugin to add ionic storage

** Start App
ionic serve

** List plugins
 npx cap ls

** List platform
can not find

help
*** npx ng g --help


** create service
ionic generate service services/storage

** BILD


Setup na firebase
https://console.firebase.google.com/u/0/project/sofiapps-personalities/overview
Dodadeno e 	pod 'Firebase/Analytics'
pod install imase problem
Ignoring ffi-1.13.1 because its extensions are not built. Try: gem pristine ffi --version 1.13.1
resenie
sudo gem install cocoapods
poslem toa pod install bese ok


Download the apple key
https://developer.apple.com/account/resources/authkeys/add
Name:ApplePushNotification
Key ID:ULC6YQ32V3
Services:Apple Push Notifications service (APNs)
file was downloaded and added to personalities root AuthKey_ULC6YQ32V3.p8

Update ios after pod file change
npx cap update ios

Tutorial for Messaging
https://devdactic.com/push-notifications-ionic-capacitor/

//My Iphone FCM token
diffrent on every instalation  d2KIle4lhkFjmkzMonnBs3:APA91bHXAZVwO7zmITLyC7SXhmV-GODIH_oaDhXd41pUEOPeBTVfB9NHYSej2BdJLb77huAkGg9F4gRr0W_w6j9ktehp1c569Yb8z5EPhqPBXbWOgsF5QbEnUUqg4TO0JWIrHvMtC-NV

build and sync with npx
ionic build
npx cap sync

add mobs
google.com, pub-1935322587860934, DIRECT, f08c47fec0942fa0

Complete the instructions in the Google Mobile Ads SDK guide using this app ID:
Personality Test sca-app-pub-1935322587860934~6750485226
Follow the rewarded implementation guide to integrate the SDK. You'll specify ad type and placement when you integrate the code using this ad unit ID:
SingleRewardca-app-pub-1935322587860934/3751419815
Review the AdMob policies to ensure your implementation complies.


npm install --save @capacitor-community/admob
npx cap update //updates ios pods

Firebase Auth
npm install cordova-plugin-firebase-authentication
npm install @ionic-native/firebase-authentication
ionic cap sync
 -- build problem after this so I had to deinstal
npm uninstall @ionic-native/firebase-authentication
npm uninstall cordova-plugin-firebase-authentication
ionic cap sync
-- so it seems that I will have to go without firebase
or I can try again but copy the project before

try connect with apple
npm install cordova-plugin-sign-in-with-apple
npm install @ionic-native/sign-in-with-apple
ionic cap sync

facebook (https://capacitorjs.com/docs/cordova/using-cordova-plugins)
ionic cordova plugin add cordova-plugin-facebook-connect --variable APP_ID="224464747599602" --variable APP_NAME="Personality Tests"

https://www.joshmorony.com/using-cordova-plugins-that-require-install-variables-with-capacitor/
npm i cordova-plugin-facebook-connect

npm install cordova-plugin-facebook-connect
npm install @ionic-native/facebook
ionic cap sync
and add setting directly in info.plist
