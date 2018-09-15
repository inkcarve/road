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
      <ListItem button icon onPress={this.props.onPress} {...this.props}>
            <Left>
              {/*<Button transparent style={coreStyle.btn}>*/}
                <Icon name={this.props.leftIcon} style={[coreStyle.icon, coreStyle.iconMenuLeft]}/>
              {/*</Button>*/}
            </Left>
            <Body>
              <Text>{this.props.bodyText}</Text>
            </Body>
            <Right>
            <Text>{this.props.RightText}</Text>
              <Icon name={this.props.rightIcon} />
            </Right>
      </ListItem>
    );
  }
}
