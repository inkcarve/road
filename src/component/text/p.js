//** import lib
import React, {Component} from 'react'
import { View } from 'react-native'
// import * as Animatable from "react-native-animatable"
// import { Button , Container, Content, Grid, Row, Col, Icon, Footer, FooterTab} from "native-base"

//** import style
import coreStyle from '../../style/core-style'
// import libStyle from '../../style/lib-style'

//** import custom
// import ChapterService from "../../setting/chapter-service"
// import mapText from "../text/map-text"
// import FooterNext from "../footer/footer-next"

export default class P extends Component<{}> {

  state={
    content:[]    
  };

  render() {
    // console.log('p')
    return (
      <View style={coreStyle.p} {...this.props} />
    );
  }
}
