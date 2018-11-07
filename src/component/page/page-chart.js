//** import lib
import React, { Component } from 'react'
import { Animated, StyleSheet, View, TouchableOpacity, Dimensions, Image, Easing } from 'react-native'
import * as Animatable from "react-native-animatable"
import {
    Container,
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
    List,
    ListItem,
    Body,
    H1,
    H2,
    H3
} from "native-base"
import Swiper from 'react-native-deck-swiper'
import FastImage from 'react-native-fast-image'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import Accordion from 'react-native-collapsible/Accordion';


//** import style
import color from '../../style/color';
import coreStyle, { viewportHeight, viewportWidth, contentPadding } from '../../style/core-style'
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

const contentPadder = contentPadding(viewportWidth - 80, 420);
@observer class PageChart extends Component < {} > {

    handleViewRef = ref => this.view = ref;
    chartList = ChapterService.chapterData.chartList
    content = ChapterService.chapterData.content

    state={
      activeSections : ChapterService.chapterData.activeSections ? ChapterService.chapterData.activeSections : []
    }

    _renderSectionTitle = section => {
        return (
            <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
        );
    };

    _renderHeader = (item, index, isActive, items) => {
        return (
            <View style={[(index+1==items.length?null:libStyle.borderBottomCCC)]}>
      <Animatable.View
        duration={300}
        transition="backgroundColor"
        style={{ backgroundColor: (isActive ? color.primary : 'rgba(255,255,255,1)')}}>
        <Animatable.Text
        transition={["fontSize","color"]}
        style={[{paddingTop: 20, paddingBottom: 20, textAlign:'center'},(isActive ? {fontSize:14,color:'#ffffff'} : {fontSize:20,color:color.secondary})]}>
          {item.title}
        </Animatable.Text>
        {/*<H3 style={[{paddingTop: 30, paddingBottom: 30, textAlign:'center'},(isActive ? {color:'#ffffff'} : null)]}>{item.title}</H3>*/}
        </Animatable.View>
      </View>
        );
    };

    _renderContent = (item, index, isActive) => {
        let Chart = item.chartComponent
        console.log("_renderItem")
        // console.log(index)
        if (!Chart) return null;

        return (
          <Animatable.View
        duration={300}
        transition="backgroundColor"
        style={{ backgroundColor: (isActive ? color.light : 'rgba(255,255,255,1)'), marginBottom:20 }}>
        <View style={[libStyle.borderBottomCCC,{justifyContent:'center'}]}>
              {/*this.slideIndex===index ?(
                <Chart 
                  data={item.data}
                  {...item.setting}
                  />):<Text>Loading</Text>*/
                  <Body style={{ width:'100%'}}>
                  <Chart 
                  data={item.data}
                  {...item.setting}
                  />
                  </Body>
                  }
          </View>
          </Animatable.View>
        );
    };

    _updateSections = activeSections => {
        this.setState({ activeSections });
    };

    componentDidMount() {}

    

    @observable selectedItem = this.chartList[0]
    slideIndex = 0

    changeItem(slideIndex) {
        this.selectedItem = this.chartList[slideIndex]
        this.slideIndex = slideIndex
    }

    choose() {
        if (this.selectedItem.goName) {
            ChapterService.goByName(this.selectedItem.goName)
        }
    }

    get pagination() {
        // const { entries, activeSlide } = this.state;
        return (
            <Pagination
              dotsLength={this.chartList.length}
              activeDotIndex={this.slideIndex}
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

            <Container>
        <Content padder>
        <View style={[contentPadder]}>
        <View style = {[{justifyContent: 'center'}]}>
          <View style={[coreStyle.containerCenter,libStyle.bgNone,{flex:0 ,width:"100%",}]}>
            <View style={[{flex:0 ,width:itemWidth}, coreStyle.H1, this.selectedItem.titleBoxStyle, dynamicStyle('p_10')]}>
              <H1 style={[{textAlign:"center"}]}>{this.content.title}</H1>
              <Text style={[{textAlign:"center", fontSize:10, color:"#aaa",opacity:this.content.subTitle?1:0}]}>{this.content.subTitle}</Text>
            </View>
          </View>
          <Accordion
        sections={this.chartList}
        activeSections={this.state.activeSections}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        onChange={this._updateSections}
        expandMultiple={true}
      />

        </View>
        </View>
        </Content>
      </Container>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    content: {
        opacity: 0,
    }
});

export default PageChart