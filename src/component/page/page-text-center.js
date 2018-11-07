//** import lib
import React, {Component} from 'react'
import { Animated, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import * as Animatable from "react-native-animatable"
import { Button , Container, Content, Grid, Row, Col, Icon, Footer, FooterTab} from "native-base"
import FastImage from 'react-native-fast-image'
import {observer} from 'mobx-react'
import {observable} from 'mobx'

//** import style
import coreStyle from '../../style/core-style'
import libStyle from '../../style/lib-style'

//** import custom
import ChapterService from "../../setting/chapter-service"
import mapContent from "../text/map-content"
import FooterNext from "../footer/footer-next"

@observer class TextCenter extends Component<{}> {

  state={
    content:[]    
  };

  content=ChapterService.chapterData.content
  @observable show=true
  pIndex=0

  componentDidMount(){

    // this.content = ChapterService.chapterData.content
    // this.pIndex = 0
  }

  nextP(){
    this.show=false
    if(this.pIndex+1 >= this.content.length){
      
      let goName = ChapterService.chapterData.goName
      if(goName){
        ChapterService.goByName(goName)
      }else{
        ChapterService.go();
      }
      return
    }
    this.pIndex++
    this.show=true
  }

  render() {
    // console.log('TextCenter')
    // console.log(this);

    if(!this.show)return null

    return (
      
      <Container style={styles.container}>
      <TouchableOpacity onPress={this.nextP.bind(this)} style={coreStyle.containerCenter}>
        <Content padder contentContainerStyle={{ justifyContent: 'center', flex: 1 }}>
          {mapContent(this.content[this.pIndex])}
        </Content>
      
      </TouchableOpacity>
       {/*<FooterNext data={{id:this.props.id, secId:this.props.secId}} />*/}
      </Container>
    );
  }
}

export default TextCenter

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
  },
  content:{
    opacity:0,
  }
});
