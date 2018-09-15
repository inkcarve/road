//** import lib
import React, {Component} from 'react'
// import { Animated, StyleSheet, View, TouchableOpacity, Dimensions, Image, Easing } from 'react-native'
// import * as Animatable from "react-native-animatable"
// import {  Container,
//   Content,
//   Header,
//   Title,
//   Button,
//   IconNB,
//   DeckSwiper,
//   Card,
//   CardItem,
//   Icon,
//   Thumbnail,
//   Text,
//   Left,
//   Right,
//   Body,H1, H2, H3} from "native-base"
// import FastImage from 'react-native-fast-image'
// import {observer} from 'mobx-react'
// import {observable} from 'mobx'
import { VictoryChart, VictoryTheme, VictoryBar, VictoryAxis } from "victory-native";


//** import style
import coreStyle from '../../style/core-style'
import libStyle from '../../style/lib-style'
import dynamicStyle from '../../style/dynamic-style'

//** import custom
// import ChapterService from "../../setting/chapter-service"


class VBar extends Component<{}> {
  
  handleViewRef = ref => this.view = ref;

  componentDidMount() {
  }

  // @observable selectedItem = chartList[0]

  render() {

    return (

        <VictoryChart domainPadding={25} {...this.props}>
  <VictoryBar {...this.props}
  />
</VictoryChart>

    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//   },
//   content:{
//     opacity:0,
//   }
// });

export default VBar