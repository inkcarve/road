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
import Carousel , { Pagination } from 'react-native-snap-carousel'

//** import style
import coreStyle from '../../style/core-style'
import libStyle from '../../style/lib-style'
import dynamicStyle from '../../style/dynamic-style'
import { sliderWidth, itemWidth, doorStyle } from '../../style/door-style';

//** import custom
import ChapterService from "../../setting/chapter-service"
import mapContent from "../text/map-content"
import FooterNext from "../footer/footer-next"
import HeaderBox from '../header/header-box'
import { doorList } from "../../setting/door-data"
import { chartData, chartList } from "../../setting/chart-data"


@observer class PageDoor extends Component<{}> {
  
  handleViewRef = ref => this.view = ref;

  @observable selectedItem = doorList[0]
  activeIndex=0

  handleViewRef = ref => this.view = ref;

  componentDidMount(){
    ChapterService.chapterList.chart = chartData
  }

  _renderItem ({item, index}) {
    return (
      <TouchableOpacity onPress={this.choose.bind(this)}  style={[coreStyle.overlayer,{justifyContent: 'flex-end'}]}>
        <Container style={{flex:1, height:'auto'}}>
            <Card style={[libStyle.m0]}>
              <CardItem style={[{height:"100%"},libStyle.p0]}>
                <FastImage style={{
                      width: "100%",
                      height:"100%",
                      flex: 1,
                      // height: 300
                    }} 
                    source={item.image} 
                    resizeMode={FastImage.resizeMode[item.imageResizeMode]}
                  />
              </CardItem>
            </Card>
        </Container>
         </TouchableOpacity>
     );
  }

  changeItem(activeIndex){
    this.selectedItem=doorList[activeIndex]
    this.activeIndex = activeIndex;
  }

  goByName (){
    ChapterService.goByName(this.selectedItem.goName)
  }

  choose(){
    if(this.selectedItem.goName){
      this.view.fadeOut(700).then(endState=>{
        if(endState){
            this.goByName.call(this)
        }
      });
    }
  }

    get pagination () {
        // const { entries, activeSlide } = this.state;
        return (
            <Pagination
              dotsLength={doorList.length}
              activeDotIndex={this.activeIndex}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: 'rgba(0, 0, 0, 0.12)'
              }}
              inactiveDotStyle={{
                  // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
        );
    }

  render() {
    console.warn("page deck swiper render");

    return (

      <Container style={coreStyle.containerCenter}>
        <FastImage style={{
                      width: "100%",
                      height:"100%",
                      flex: 1,
                      // height: 300
                    }} source={this.selectedItem.boxBg} 
                    resizeMode={FastImage.resizeMode.cover}
                  />
        <View style = {[coreStyle.overlayer,{justifyContent: 'center'}]}>
          <View style={[coreStyle.containerCenter,libStyle.bgNone,{flex:0 ,width:"100%",}]}>
            <View style={[{flex:0 ,width:itemWidth}, coreStyle.H1, this.selectedItem.titleBoxStyle, dynamicStyle('m_10')]}>
              <H1 style={[this.selectedItem.titleStyle]}>{this.selectedItem.title}</H1>
            </View>
          </View>

          <Animatable.View style={[coreStyle.containerCenter,libStyle.bgNone,{flex:0 ,width:"100%",}]} ref={this.handleViewRef}>
          <View style={[doorStyle.carouselBox]}>
          <Carousel
            ref={c => this._slider1Ref = c}
            data= {doorList}
            renderItem={this._renderItem.bind(this)}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            loop={true}
            onSnapToItem={this.changeItem.bind(this)}
          />
          {this.pagination}
          </View>
          <View style={[coreStyle.containerCenter,libStyle.bgNone,{flex:0 ,width:"100%",}]}>
            <View style={[{flex:0 ,width:itemWidth}, coreStyle.H1, dynamicStyle('m_10')]}>
              <Text style={[{textAlign:"right", fontSize:10, color:"#FFFFFF"},this.selectedItem.hintStyle]}>*左右滑動來選擇前往的項目</Text>
            </View>
          </View>
          </Animatable.View>
          
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

export default PageDoor