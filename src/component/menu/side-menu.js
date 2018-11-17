import React, { Component } from 'react'
import { StyleSheet, View, SafeAreaView, Platform, Image, findNodeHandle, Linking } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  ListItem,
  List,
  Text,
  Badge,
  Left,
  Right,
  Body,
  Switch,
  Radio,
  Picker,
  Separator} from "native-base"
import {Actions} from 'react-native-router-flux'
import FastImage from 'react-native-fast-image'
import { BlurView } from 'react-native-blur';

import coreStyle from "../../style/core-style"
import {is_ios, prefixIcon} from '../../style/core-style'
import libStyle from "../../style/lib-style"
import dynamicStyle from "../../style/dynamic-style"

import UserStore from '../../store/user-store';
import ChapterService from '../../setting/chapter-service';
import ListButton from '../button/list-button'
import DrawerIcon from './drawer-icon'

const Item = Picker.Item;

export default class SideMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewRef: null
    };
  }

  goIndex(){
    // this.clearData()
    ChapterService.goIndex();
    this.props.close()
    UserStore.navIconClose()
  }

  goRouter(name){
    ChapterService.goByName(name)
    this.props.close()
    UserStore.navIconClose()
  }

  setViewRef(e) {
    if(this.state.viewRef)return;
    this.setState({ viewRef: findNodeHandle(e) });
  }

  async clearData(){

    ChapterService.clearData()

  }

  blurView(){
    console.log(this._drawer)
    // if(!this._drawer || !this._drawer._open)return null
    return <BlurView
          style={{
            position: "absolute",
            top: 0, left: 0, bottom: 0, right: 0, zIndex:1
          }}
          viewRef={this.props.viewRef}
          blurType="light"
          blurAmount={10}
          blurRadius={15}
          downsampleFactor={5}
          overlayColor={'rgba(255, 255, 255, .25)'}
        />
  }

  componentWillMount(){
    const prefix = (is_ios? "ios-" : "md-");
    this._icon_home = prefix + "home"
    this._icon_mail = prefix + "mail"
    this._icon_happy = prefix + "happy"
    this._icon_refresh = prefix + "refresh"
    this._icon_arrow_forward = prefix + "arrow-forward"
  }


  render() {

    // UserStore.setViewRef = this.setViewRef.bind(this);
    this.close = this.props.close

    console.log('render drawer')

    return (

        <Container style={[{backgroundColor:"rgba(255,255,255,0.85)",flex:1,width:'100%',height:'100%'}]}>
      {/*  <DrawerIcon {...this.props}>
  </DrawerIcon>*/}
        {/*  <BlurView
          style={{
            position: "absolute",
            top: 0, left: 0, bottom: 0, right: 0
          }}
          viewRef={this.state.viewRef}
          blurType="light"
          blurAmount={10}
        />*/}
{/*        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>List Icon</Title>
          </Body>
          <Right />
        </Header>*/}

        <View style={[{padding:0,flex:1,flexDirection:'row',justifyContent:'center',width:'100%'},libStyle.bgNone]}>
          <Content style={[libStyle.bgNone,{paddingTop:60, paddingBottom:60}]}>
          {/*<Separator bordered noTopBorder style={coreStyle.saparator}/>*/}
            <List>

              <ListButton onPress={()=>{this.goRouter("door")}} leftIcon={this._icon_home} bodyText="回到入口" rightIcon={this._icon_arrow_forward}/>
              <ListButton onPress={this.goIndex.bind(this)} leftIcon={this._icon_refresh} bodyText="重置狀態" rightIcon={this._icon_arrow_forward}/>
              <ListButton onPress={()=>{this.goRouter("about")}} leftIcon={this._icon_refresh} bodyText="關於" rightIcon={this._icon_arrow_forward}/>
              <ListButton onPress={()=>{Linking.openURL('https://github.com/inkcarve')}} leftIcon="logo-github" bodyText="GitHub / inkcarve" rightIcon={null}/>
              <ListButton onPress={()=>{Linking.openURL('tel://+886982783047')}} leftIcon={prefixIcon('call')} bodyText="Call Me / +886 0982783047" rightIcon={null}/>
              <ListButton onPress={()=>{Linking.openURL('mailto:inkcarve@gmail.com')}} leftIcon={this._icon_mail} bodyText="Email Me / inkcarve@gmail.com" rightIcon={null}/>
              <ListButton onPress={()=>{Linking.openURL('https://ting-wei-log.herokuapp.com/resume')}} leftIcon={prefixIcon('sunny')} bodyText="More About Me in Web Site" rightIcon={null}/>

              {/*<Separator bordered />*/}
            </List>
          </Content>
        </View>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  }
});
