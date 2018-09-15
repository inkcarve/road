import React, { Component } from 'react'
import { StyleSheet, Text, View, Animated, TextInput, AsyncStorage } from 'react-native'
import * as Animatable from 'react-native-animatable'
import {Button, Footer, Container, FooterTab, Icon} from "native-base"

// import style
import coreStyle from "../../style/core-style"
import libStyle from "../../style/lib-style"
import dynamicStyle from "../../style/dynamic-style"

//** import custom
import ChapterService from "../../setting/chapter-service"

export default class FooterNext extends Component<{}> {
    
    nextClick = ()=>ChapterService.go()

        /*<Footer style={[libStyle.bgNone,{borderWidth:0}]}>
        <FooterTab style={{justifyContent:'flex-end'}} >
            <View>
              <Button transparent dark onPress={nextClick} style={[coreStyle.btn,{flexDirection:'row'}]}><Text>繼續</Text><Icon name="chevron-right"></Icon></Button>
            </View>
        </FooterTab>
        </Footer>*/
  render() {
    console.log('FooterNext render')
    // console.log(ChapterService)
    // let nextClick = ChapterService.go;
    // if(this.props.nextClick){nextClick = this.props.nextClick}
    return (
      <Footer style={[libStyle.bgNone,{borderWidth:0}]}>
        <FooterTab style={{justifyContent:'flex-end'}} >
            <View>
              <Button transparent dark onPress={this.nextClick} style={[coreStyle.btn,{flexDirection:'row'}]}><Text>繼續</Text><Icon name="ios-arrow-forward"></Icon></Button>
            </View>
        </FooterTab>
        </Footer>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});