import React, { Component } from 'react'
import { StyleSheet, View, SafeAreaView, Platform, Animated, Easing } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  ListItem,
  Text,
  Badge,
  Left,
  Right,
  Body,
  Switch,
  Radio,
  Picker,
  Separator} from "native-base"
import {Actions} from 'react-native-router-flux';
import LottieView from 'lottie-react-native';
import drawerIconJson from '../../lottie/drawer-icon.json'
import {observer} from 'mobx-react'
import {observable} from 'mobx'

import color from '../../style/color'
import coreStyle from "../../style/core-style"
import libStyle from "../../style/lib-style"
import dynamicStyle from "../../style/dynamic-style"

import UserStore from '../../store/user-store';
import ChapterService from '../../setting/chapter-service';
import ListButton from '../button/list-button'

const Item = Picker.Item;

@observer class DrawerIcon extends Component {

  state = {
    open:false,
    progress: new Animated.Value(0),
    hideCustomNav : ChapterService.routerData.hideCustomNav,
  }

  @observable hideCustomNav = ChapterService.routerData.hideCustomNav


  animateIconOpen(){
    Animated.timing(this.state.progress, {
      toValue: 0.5,
      duration: 1000,
      easing: Easing.quad,
    }).start();
    this.state.open = true
  }

  animateIconClose(){
    Animated.timing(this.state.progress, {
      toValue: 0,
      duration: 1000,
      easing: Easing.quad,
    }).start();
    this.state.open = false
  }


  click(){
    // console.log('nav icon click')
    if(!this.state.open){
    // Actions.drawerOpen();
    this.props.open();
    this.animateIconOpen()

    // UserStore.setViewRef(UserStore.viewRef);
    }else{
      // Actions.drawerClose();
      this.props.close();
      this.animateIconClose()
    }
  }

  drawerIconToggle (){
    this.hideCustomNav = ChapterService.routerData.hideCustomNav
  }

  componentWillMount(){
    ChapterService.drawerIconToggle = this.drawerIconToggle.bind(this)
  }

  // getButton(){
  //   if(!this.state.progress || !drawerIconJson)return;
  //   return (<Button transparent icon  onPress={()=>{this.click()}}
  //     style={{zIndex:10000000,right:0,top:0,width:50,height:50,opacity:(ChapterService.routerData.hideCustomNav && 1)}}>
  //           <LottieView source={drawerIconJson} progress={this.state.progress}/>
  //   </Button>)
  // }

  render() {
    // console.log(this)

    UserStore.navIconOpen = this.animateIconOpen.bind(this)
    UserStore.navIconClose = this.animateIconClose.bind(this)

    return (
    <View style={[libStyle.absLayerTopRight,{
      zIndex:10000000,left:0,top:0,width:50,height:50,justifyContent:'center',alignItems:'center',overflow:'hidden',
    },{height:(this.hideCustomNav ? 0 : 50),opacity:(this.hideCustomNav ? 0 : 1)}]} none={this.hideCustomNav}>
    {/*this.getButton()*/}
    <Button transparent icon onPress={()=>{this.click()}}
      style={{alignSelf:'center',width:50,height:50,justifyContent:'center',alignItems:'center',opacity:(ChapterService.routerData.hideCustomNav && 1)}}>
            <View style={{width:50,height:50,justifyContent:'center',alignItems:'center'}}>
            <LottieView style={{width:200,height:200}} source={drawerIconJson} progress={this.state.progress}/>
            </View>
    </Button>
      </View>
    );
  }
}

export default DrawerIcon
