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