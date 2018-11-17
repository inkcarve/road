//** import lib
import React, {Component} from 'react'
import { Animated, StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native'
import * as Animatable from "react-native-animatable"
import { Button , Container, Content, Grid, Row, Col, Icon, ListItem, Left, Body, Right, Text} from "native-base"

//** import style
import coreStyle from '../../style/core-style'
import libStyle from '../../style/lib-style'

//** import custom
import ChapterService from "../../setting/chapter-service"
import mapContent from "../text/map-content"
import FooterNext from "../footer/footer-next"

export default class ListButton extends Component {


  render() {
    // console.log('TextCenter')
    // console.log(this.props);

    return (
      <ListItem button icon
        onPress={this.props.onPress} {...this.props}
        style={{paddingTop:10,paddingBottom:10,height:'auto'}}>
            <Left>
              {/*<Button transparent style={coreStyle.btn}>*/}
                <Icon name={this.props.leftIcon} style={[coreStyle.icon, coreStyle.iconMenuLeft]}/>
              {/*</Button>*/}
            </Left>
            <Body>
              <Text>{this.props.bodyText}</Text>
            </Body>
            <Right style={{justifyContent:'center',minWidth:45}}>
            <Text>{this.props.RightText}</Text>
              <Icon name={this.props.rightIcon}
                style={[coreStyle.icon, coreStyle.iconMenuLeft, {paddingLeft:0,width:20}]}/>
            </Right>
      </ListItem>
    );
  }
}
