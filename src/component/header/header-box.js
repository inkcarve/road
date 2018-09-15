//** import lib
import React, {Component} from 'react'
import { Animated, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import * as Animatable from "react-native-animatable"
import { Button , Container, Content, Grid, Row, Col, Icon, Header} from "native-base"

//** import style
import coreStyle from '../../style/core-style'
import libStyle from '../../style/lib-style'
import {observer} from 'mobx-react'

//** import custom
import ChapterService from "../../setting/chapter-service"
import RouterList from "../../router/router-list"
import mapText from "../text/map-text"


export default class HeaderBox extends Component<{}> {

  render() {
    let style = [coreStyle.header];
    // console.log('p')
     if(RouterList[ChapterService.chapterData.tpl].emptyHeader)style.push({opacity:0});
    return (
      <Header style={style} {...this.props} >
      </Header>
    );
  }
}
