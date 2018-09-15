//** import lib
import React, {Component} from 'react'
import { Animated, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import * as Animatable from "react-native-animatable"
import { 
  Container, 
  Content, 
  // Grid, 
  // Row, 
  // Col
} from "native-base"
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

//** import style
import coreStyle from '../../style/core-style'

//** import custom
import ChapterService from "../../setting/chapter-service"
import mapContent from "../text/map-content"
import FooterNext from "../footer/footer-next"
import HeaderBox from '../header/header-box'


export default class ScrollContent extends Component<{}> {

  state={
    content:[]
  };

  render() {
    // console.warn(this.props);

    this.state.content= ChapterService.chapterData.content;

    return (
      <Container style={styles.container}>
        <HeaderBox>
        </HeaderBox>
        <Content padder>
          {mapContent(this.state.content)}
        </Content>
        <FooterNext data={{id:this.props.id, secId:this.props.secId}} />
      </Container>
    );
  }
}

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
