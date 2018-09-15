## install 

* $ yarn global add react-native-cli
* $ yarn global add rnpm
* react-native init $projectName --template mobx
* clone git into $projectName
* $ yarn
* $ rnpm link
* add below to package.json
  "resolutions": {
    "mobx": "^4.3.0",
    "mobx-react": "^5.1.2"
  }

### ios
* xcode open this project
* $ react-native link lottie-ios
* build project
* $ react-native run-ios

### android

#### debug
Follow this

Go to your project directory and check if this folder exists android/app/src/main/assets
i) If it exists then delete two files viz index.android.bundle and index.android.bundle.meta
ii) If the folder assets doesn't exist then create the assets directory there.

From your root project directory do
cd android && ./gradlew clean

Finally, navigate back to the root directory and check if there is one single entry file called index.js
i) If there is only one file i.e. index.js then run following command
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

ii) If there are two files i.e index.android.js and index.ios.js then run this
react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

Now run react-native run-android