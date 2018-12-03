import React, {Component} from 'react';
import {AsyncStorage, SafeAreaView, StatusBar, Dimensions, View} from 'react-native';
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
import {observer , observable} from 'mobx'
import UserStore from './store/user-store'
import DrawerIcon from './component/menu/drawer-icon'
import DrawerBox from './component/menu/drawer-box'
import CodePush from 'react-native-code-push';

let winSize = Dimensions.get('window');

// global.UserStore = UserStore;
// UserStore;
let init = async ()=>{
  await ChapterService.init()
// setTimeout(()=>{Actions.drawerOpen()},1000)
}

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
class App extends Component {

  state = { restartAllowed: true };

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
  }



  render(){
    return(
  <View style={{flex:0, alignItems:'stretch', height:'100%'}}>
  {/*<SafeAreaView style={{flex:1}}>*/}
  <StatusBar hidden={true} />
  <StyleProvider style={getTheme(nativeBaseVar)}>
  <View style={{flex:0, alignItems:'stretch', height:'100%'}}>
  <DrawerBox>
  <Router wrapBy={observer}>
  <Lightbox key="lightbox">
    <Stack key="root">
      {/*<Drawer key="SideMenu"
       drawerIcon={null}
       contentComponent={SideMenu}
       drawerWidth={winSize.width-50}
       drawerBackgroundColor='rgba(255,255,255, 0.95)'
       hideDrawerButton={true}
       hideNavBar>*/}
        {chapter()}
      {/*</Drawer>*/}
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

let codePushOptions = {
      checkFrequency: CodePush.CheckFrequency.ON_APP_START,
      installMode: CodePush.InstallMode.ON_NEXT_RESTART,
      updateDialog: true
};
App = CodePush(codePushOptions)(App);

export default App;
