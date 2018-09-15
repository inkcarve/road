//** import lib
import React, {Component} from 'react'
import { Animated, StyleSheet, View, TouchableOpacity, Dimensions, Image, Easing } from 'react-native'
import * as Animatable from "react-native-animatable"
import {  Container,
  Content,
  Header,
  Title,
  Button,
  IconNB,
  DeckSwiper,
  Card,
  CardItem,
  Icon,
  Thumbnail,
  Text,
  Left,
  Right,
  Body,H1, H2, H3} from "native-base"
import Swiper from 'react-native-deck-swiper'
import FastImage from 'react-native-fast-image'
import {observer} from 'mobx-react'
import {observable} from 'mobx'
import Carousel from 'react-native-snap-carousel'



//** import style
import coreStyle from '../../style/core-style'
import libStyle from '../../style/lib-style'
import dynamicStyle from '../../style/dynamic-style'


//** import custom
import ChapterService from "../../setting/chapter-service"
import mapContent from "../text/map-content"
import FooterNext from "../footer/footer-next"
import HeaderBox from '../header/header-box'

//** import chart
import { sliderWidth, itemWidth, chartStyle } from '../../style/chart-style';
import VLine from "../victory-chart/v-line"


@observer class PageChart extends Component<{}> {
  
  handleViewRef = ref => this.view = ref;

  componentDidMount() {
  }

  chartList=ChapterService.chapterData.chartList
  content = ChapterService.chapterData.content

  @observable selectedItem = this.chartList[0]
  @observable slideIndex = 0

  chart(){
    // if(this.selectedItem.chartType)
  }

  _renderItem ({item, index}) {
    let Chart = this.selectedItem.chartComponent
    console.log("_renderItem")
    console.log(this.selectedItem.key)
        

    return (
            <Card >

              <CardItem>
              <Body>
              {this.slideIndex===index ?(
                <Chart 
                  data={item.data}
                  
                  {...item.setting}
                  />):null
                  }
                  </Body>
              </CardItem>
              <CardItem footer>
              <H3>{item.title}</H3>
              </CardItem>
            </Card>
     );
  }

  changeItem(slideIndex){
    this.selectedItem=this.chartList[slideIndex]
    this.slideIndex = slideIndex
  }

  choose(){
    if(this.selectedItem.goName){
      ChapterService.goByName(this.selectedItem.goName)
    }
  }

  render() {
    console.warn("page deck swiper render");
// console.log(this.chartList)

    return (

      <Container style={coreStyle.containerCenter}>
        <View style = {[coreStyle.overlayer,{justifyContent: 'center'}]}>
          <View style={[coreStyle.containerCenter,libStyle.bgNone,{flex:0 ,width:"100%",}]}>
            <View style={[{flex:0 ,width:itemWidth}, coreStyle.H1, this.selectedItem.titleBoxStyle, dynamicStyle('p_10')]}>
              <H1 style={[{textAlign:"center"}]}>{this.content.title}</H1>
                            <Text style={[{textAlign:"center", fontSize:10, color:"#aaa",opacity:this.content.subTitle?1:0}]}>{this.content.subTitle}</Text>

            </View>
          </View>
          <View style={[chartStyle.carouselBox]}>
          <Carousel
            ref={c => this._slider1Ref = c}
            data= {this.chartList}
            renderItem={this._renderItem.bind(this)}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            loop={false}
            onSnapToItem={this.changeItem.bind(this)}
            layout={"default"}
            layoutCardOffset={18}
          />
          </View>
        </View>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  content:{
    opacity:0,
  }
});

export default PageChart