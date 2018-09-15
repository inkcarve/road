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
import { VictoryChart, VictoryTheme, VictoryLine, VictoryAxis } from "victory-native";


//** import style
import coreStyle from '../../style/core-style'
import libStyle from '../../style/lib-style'
import dynamicStyle from '../../style/dynamic-style'

//** import custom
// import ChapterService from "../../setting/chapter-service"


class VLine extends Component<{}> {
  
  handleViewRef = ref => this.view = ref;

  componentDidMount() {
  }

  // @observable selectedItem = chartList[0]

  render() {

    return (

        <VictoryChart {...this.props.chartSetting}>
{/*        <VictoryAxis crossAxis
    width={400}
    height={400}
    domain={[0, 10]}

    standalone={false}
  />
  <VictoryAxis dependentAxis crossAxis
    width={400}
    height={400}
    domain={[-10, 10]}
    theme={VictoryTheme.material}
    offsetX={200}
    standalone={false}
  />*/}
  <VictoryAxis crossAxis
  {...this.props.xAxisSetting}
  />
  <VictoryAxis dependentAxis crossAxis
  {...this.props.yAxisSetting}
  />
          <VictoryLine
            {...this.props.lineSetting}
            data={this.props.data}
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

export default VLine