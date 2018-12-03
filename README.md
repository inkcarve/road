download APK from my google Driver [https://drive.google.com/open?id=1ixrg8WhWQChR_KTav5_e2EvtQomoCQ_D]

react-native version 0.55.4
## install
```
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
```

### ios xcode-10
```
* xcode open this project
* $ react-native link lottie-ios
* modify Build Phase: xcode > choose project > Build Phases
1.Build Phases > Link Binary With Libraries, modify (if lib lost , delete and add again)
2.Build Phases > Target Dependencies, add Lottie_iOS (if use lottie)
3.Build Phases > Copy Files (if none Copy Files , click + of Build Phases. Add one), if use lottie, Destination select Frameworks, add "Lottie.frameword" for ios (not ios TV or Other)
* xcode > choose project > General > Signing :
1.check Automatically manage signing
2.signing your Team
* xcode > choose project > General > Deployment Info :
1.select Deployment Target
2.modify other setting, if need ,like Device Orientation...
* if use react-native-splash-screen, following guide from https://github.com/crazycodeboy/react-native-splash-screen
* To fix 'SplashScreen.h' file not found, you have to select your project → Build Settings → Search Paths → Header Search Paths to add:
$(SRCROOT)/../node_modules/react-native-splash-screen/ios
$(SRCROOT)/../node_modules/react-native/Libraries/
* To fix <fishhook/fishhook.h> (react-native 0.55.4) not found, in xcode, choose RCTWebSocket.xcodeproj > Build Phases > Link Binary With Libraries > delete libfishhook.a then add it again
* xcode Edit Scheme => Run => Environment Variables => Add OS_ACTIVITY_MODE:disable
* build project
* $ react-native run-ios
```

##### xcode resolve config.h file not found

1. Close Xcode.
2. cd <Project-Folder>/node_modules/react-native/third-party/glog-0.3.4
3. Run ./configure
4. Run make
5. Run make install
6. Open Xcode and try building the Project.


### ios run on device
```

debug remote url yourIP:8081/debugger-ui/
* To fix "No member named rip in darwin_arm_thread_state64" , try found node_modules/react-native/third-party/glog-0.3.4/src/signalhandler.cc:
comment // return (void*)context->PC_FROM_UCONTEXT;
add "return (void*)context->uc_mcontext->__ss.__pc;"
if use simulator again
remove comment : return (void*)context->PC_FROM_UCONTEXT;
comment //return (void*)context->uc_mcontext->__ss.__pc;



```

### android



#### android debug
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

```
* error: cannot find symbol 'ReactActivity', You can do "File" -> "Invalidate Caches...", and select "Invalidate and Restart" option to fix this.
If the first one doesn't work, you can
Exit Android Studio
Back up your project
Delete all the .iml files and the .idea folder
Relaunch Android Studio and reimport your project
```

Now run react-native run-android

#### android fix Generate Single APK bug
```
update android plugin for gradle upper 3.2.0
```

#### release android

1. generate key
use android-studio: Build > Generate Signed bundle/APK , choose then next, tap "create new..." or "Choose existing..."
use command line "keytool" , https://ithelp.ithome.com.tw/articles/10188858
2. if generate release APK from command need :
* add parameter in ./android/gradle.properties
```
MYAPP_RELEASE_STORE_FILE=/path/to/key/file
MYAPP_RELEASE_KEY_ALIAS=key alias you set
MYAPP_RELEASE_STORE_PASSWORD=store password you set
MYAPP_RELEASE_KEY_PASSWORD=key password you set
```
* Edit the file android/app/build.gradle
```
...
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                storeFile file(MYAPP_RELEASE_STORE_FILE)
                storePassword MYAPP_RELEASE_STORE_PASSWORD
                keyAlias MYAPP_RELEASE_KEY_ALIAS
                keyPassword MYAPP_RELEASE_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
...
```
3. build android bundle, add below into package.json > script
```
    "build-android":"react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res",
```
4. test in android device, connect device by USB (need turn off device setting )
