import React, {Component} from 'react';
import {AsyncStorage, SafeAreaView, StatusBar, Dimensions, View, ActivityIndicator, Text} from 'react-native';
import SideMenu from './component/menu/side-menu';
import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';
import {getTheme, StyleProvider, platform} from 'native-base'
import SplashScreen from 'react-native-splash-screen'

import nativeBaseVar from "./style/native-base-var"
import RouterList from './router/router-list'
import ChapterService from './setting/chapter-service'
import chapterList from "./setting/chapter-list"
import { observer, Provider } from 'mobx-react'
import {observable, action} from 'mobx'
import UserStore from './store/user-store'
import DrawerIcon from './component/menu/drawer-icon'
import DrawerBox from './component/menu/drawer-box'
import CodePush from 'react-native-code-push';

//style
import coreStyle from './style/core-style'
import libStyle from './style/lib-style'
import color from './style/color'

// global.UserStore = UserStore;
// UserStore;
let init = async ()=>{
  await ChapterService.init()
// setTimeout(()=>{Actions.drawerOpen()},1000)
}

let codePushOptions = {
      checkFrequency: CodePush.CheckFrequency.ON_APP_START,
      installMode: CodePush.InstallMode.ON_NEXT_RESTART,
      updateDialog: true
};

init().then(res=>{console.log('ok')}).catch(err=>{console.error('app init error');console.error(err)})


const getSceneStyle = () => ({
  backgroundColor: '#F5FCFF',
  shadowOpacity: 1,
  shadowRadius: 3,
});

const chapter = ()=>{
  let output = Object.keys(RouterList).map((key,i)=>{
    obj = RouterList[key];
    return (<Scene key={obj.name} path={obj.path} component={obj.component} hideNavBar = {obj.hideNavBar} hideDrawerButton={true} navTransparent>
      </Scene>)
  })
  return output;
}



// const App = () => (
@observer
class App extends Component {

  constructor(){
    super();
    // @observable this.loading = UserStore.loading;
  }

  state = { restartAllowed: true };
  @observable syncMessage:string;
  @observable progress;
  componentDidMount(){

    SplashScreen.hide();
    // CodePush.sync({ updateDialog: true, installMode: CodePush.InstallMode.IMMEDIATE },
    //   (status) => {
    //     // switch (status) {
    //     //   case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
    //     //     this.setState({showDownloadingModal: true});
    //     //     break;
    //     //   case CodePush.SyncStatus.INSTALLING_UPDATE:
    //     //     this.setState({showInstalling: true});
    //     //     break;
    //     //   case CodePush.SyncStatus.UPDATE_INSTALLED:
    //     //     this.setState({showDownloadingModal: false});
    //     //     break;
    //     // }
    //
    //   },
    //   ({ receivedBytes, totalBytes, }) => {
    //       this.setState({downloadProgress: receivedBytes / totalBytes * 100});
    //   }
    // );
    this.sync();
  }

  sync() {
    console.log('CodePush sync')
    CodePush.sync(
      codePushOptions,
      this.codePushStatusDidChange.bind(this),
      // this.codePushDownloadDidProgress.bind(this)
    );
  }

  @action codePushStatusDidChange(syncStatus) {
    // console.log('codePushStatusDidChange')
    // console.log(syncStatus)
    // console.log(`UserStore loading: ${UserStore.loading}`)
  switch(syncStatus) {

    case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
      UserStore.loading = true;
      this.syncMessage= "Checking for update.";
      break;
    case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
      this.syncMessage= "Downloading package.";
      break;
    case CodePush.SyncStatus.AWAITING_USER_ACTION:
      this.syncMessage= "Awaiting user action.";
      break;
    case CodePush.SyncStatus.INSTALLING_UPDATE:
      this.syncMessage= "Installing update.";
      break;
    case CodePush.SyncStatus.UP_TO_DATE:
      UserStore.setLoading(false);
      this.syncMessage= "App up to date."
      this.progress= false;
      break;
    case CodePush.SyncStatus.UPDATE_IGNORED:
      UserStore.setLoading(false);
      this.syncMessage= "Update cancelled by user."
      this.progress= false ;
      break;
    case CodePush.SyncStatus.UPDATE_INSTALLED:
      UserStore.setLoading(false);
      this.syncMessage= "Update installed and will be applied on restart."
      this.progress= false;
      break;
    case CodePush.SyncStatus.UNKNOWN_ERROR:
      UserStore.setLoading(false);
      this.syncMessage= "An unknown error occurred."
      this.progress= false;
      break;
  }
}

  render(){
    return(
  <View style={{flex:0, alignItems:'stretch', height:'100%'}}>
  {/*<SafeAreaView style={{flex:1}}>*/}
  <StatusBar hidden={true} />
  <StyleProvider style={getTheme(nativeBaseVar)}>
  <View style={[coreStyle.containerCenter,{flex:1, alignItems:'stretch', height:'100%'}]}>
  <Text>{UserStore.loading}</Text>
  {UserStore.loading && <View style={[coreStyle.overlay,coreStyle.containerCenter,{zIndex:10000, backgroundColor:'#fff'}]}>
  <ActivityIndicator color={color.primary}/>
  <Text>{this.syncMessage}</Text>
  </View>}
  <DrawerBox>
  <Router wrapBy={observer}>
  <Lightbox key="lightbox">
    <Stack key="root">
        {chapter()}
    </Stack>
    </Lightbox>
  </Router>
  </DrawerBox>
  </View>
  </StyleProvider>
  {/*</SafeAreaView>*/}
  </View>
  )
  }
// )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width:'100%',
//   },
// });


// App = CodePush(codePushOptions)(App);

export default App;
