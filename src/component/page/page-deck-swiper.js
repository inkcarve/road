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
  Body} from "native-base"
import Swiper from 'react-native-deck-swiper'
import FastImage from 'react-native-fast-image'
import {observer} from 'mobx-react'
import {observable} from 'mobx'
import LottieView from 'lottie-react-native';
import lottieSwipeJson from '../../lottie/swipe.json'

//** import style
import colorStyle from '../../style/color'
import coreStyle from '../../style/core-style'
import libStyle from '../../style/lib-style'
import {leftOrRightStyle} from '../../style/left-or-right-style'

//** import custom
import ChapterService from "../../setting/chapter-service"
import mapContent from "../text/map-content"
import FooterNext from "../footer/footer-next"
import HeaderBox from '../header/header-box'

//** import chart
// import {leftOrRightChartSetting} from '../../setting/'
import { sliderWidth, itemWidth, chartStyle } from '../../style/chart-style';
import { leftOrRight_ChartSetting } from "../../setting/chart-data"
import VLine from "../victory-chart/v-line"
import { chartData } from "../../setting/chart-data"


@observer class PageDeckSwiper extends Component<{}> {

  @observable statistics={
      l:{
        count:0
      },
      r:{
        count:0
      },
      t:{
        count:0
      },
      b:{
        count:0
      },
      correct:0,
      
    }
  @observable chapterData = ChapterService.getContent();
  @observable cards = ChapterService.getContent().cards;
  @observable overlayer = true
  @observable footer = false 
  @observable turnOnSwiper = true
  @observable progress = new Animated.Value(0)

  timeCount = 0
  timer = null
  timerFn (){
    this.timeCount++
  }
  timerStart(){
    this.timer = setInterval(this.timerFn.bind(this),100)
  }
  timerStop(){
    clearInterval(this.timer)
    this.timeCount = 0
    this.timer=null
  }
  timeRecord=[{x:0,y:0}]
  // now = 0

  state = {
    progress:0
  }

  handleViewRef = ref => this.view = ref;
  overlayerClick = ()=> {
    this.view.fadeOut(300).then(endState => {
      if(endState) {
        this.overlayer=false;
        this.timerStart()
      }
    });
  }

  onSwipeCallBack = (data)=>{
    let card = this.cards[data.index];
    this.statistics[data.side].count++;
    this.timeRecord.push({x:data.index+1,y:this.timeCount})
    if(card.value === data.side){
      this.statistics.correct++;
    }
  }

  onSwipeRight = i=>{console.log('onSwipeRight');
    this.onSwipeCallBack({side:'r',index:i})
    this.timerStop()
    if(i<this.cards.length){
    this.timerStart()
    }
    console.log(i)
  }

  onSwipeLeft = i=>{console.log('onSwipeLeft');
    this.onSwipeCallBack({side:'l',index:i})
    this.timerStop()
    if(i<this.cards.length){
    this.timerStart()
  }
    console.log(i)
  }

  onSwipedAll (){
    console.log('onSwipedAll')
    // this.turnOnSwiper = false
    // console.log(this.turnOnSwiper)
  }

  deckSwiper = ()=>{
    // let cards = this.cards
    console.log('deckSwiper')
    // console.log(this)
    // if(!this.turnOnSwiper)return null;
    return  (
      <Swiper cards={this.cards}
            style={{opacity:this.turnOnSwiper?1:0,height:this.turnOnSwiper?'auto':0}}
            cardStyle={{justifyContent:"center", backgroundColor:'transparent'}}
            renderCard={(item) => {
                return (
              <View style={[coreStyle.containerCenter,{alignItems:"center",height:'100%', backgroundColor:'#ececec'}]}>
              <Card  style={leftOrRightStyle.card}>
                <CardItem cardBody style={leftOrRightStyle.cardBody}>
                  
                  <FastImage
                  resizeMode={FastImage.resizeMode.contain}
                    style={{
                      width: "100%",
                      height:"100%",
                      flex: 1,
                    }}
                    source={item.image}
                  />
                  
                </CardItem>
              </Card>
              </View>
                )
            }}
            onSwiped={(cardIndex) => {
              console.log(cardIndex);
              if(cardIndex >= (this.cards.length-1))return;
              this.cards[cardIndex+1].show=true
            }}
            onSwipedLeft={this.onSwipeLeft}
            onSwipedRight={this.onSwipeRight}
            onSwipedAll={this.onSwipedAll.bind(this)}
            disableBottomSwipe = {true}
            cardIndex={0}
            backgroundColor={'transparent'}
            showSecondCard = {true}
            stackSize= {3}
            infinite={false}
            overlayLabels={{
            // bottom: {
            //   title: 'BLEAH',
            //   style: {
            //     label: {
            //       backgroundColor: 'black',
            //       borderColor: 'black',
            //       color: 'white',
            //       borderWidth: 1
            //     },
            //     wrapper: {
            //       flexDirection: 'column',
            //       alignItems: 'center',
            //       justifyContent: 'center'
            //     }
            //   }
            // },
            left: {
              title: 'left',
              style: {
                label: {
                  backgroundColor: 'transparent',
                  borderColor: 'black',
                  color: colorStyle.hint,
                  borderWidth: 1,
                  fontSize:14,
                  borderWidth:0,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: -30,
                  borderWidth:0,
                }
              }
            },
            right: {
              title: 'right',
              style: {
                label: {
                  backgroundColor: 'transparent',
                  borderColor: 'black',
                  color: colorStyle.hint,
                  borderWidth: 1,
                  fontSize:14,
                  borderWidth:0,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: 30,
                  borderWidth:0,
                }
              }
            },
            // top: {
            //   title: 'SUPER LIKE',
            //   style: {
            //     label: {
            //       backgroundColor: 'black',
            //       borderColor: 'black',
            //       color: 'white',
            //       borderWidth: 1
            //     },
            //     wrapper: {
            //       flexDirection: 'column',
            //       alignItems: 'center',
            //       justifyContent: 'center'
            //     }
            //   }
            // }
          }}
          /*animateOverlayLabelsOpacity*/
          /*animateCardOpacity*/>
            <View style={[coreStyle.containerCenter,{flex:1,paddingLeft:12,paddingRight:12},libStyle.justifyCenter,{alignItems:"center"}]}>
          {<Text>一共答對 {this.statistics.correct}</Text>}
          <Button light={false}
          disabled={false} 
          onPress={this.goResult.bind(this)} 
          success 
          bordered={false}
          full
          style={[coreStyle.btn,{marginTop:10,width:150,alignSelf:"center"}]}
          ><Text>送出</Text></Button>
          </View>
          </Swiper>)
  }

  componentDidMount() {
    // this.animation.play();
    // Or set a specific startFrame and endFrame with:
    // this.animation.play(30, 120);
    console.log(this.state.progress)
if(this.overlayer){
    Animated.loop(Animated.timing(this.progress, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
    })).start();
  }
  }

  async goResult(){
    // console.log(ChapterService.chapterList.chart.pages)
    // let chartList = await ChapterService.chapterList.chart.pages
    leftOrRight_ChartSetting[0].data = this.timeRecord;
    let chartDataNew = JSON.parse(JSON.stringify(chartData))
    chartDataNew.pages["0"]={
      ...chartDataNew.pages["0"],
      chartList : leftOrRight_ChartSetting,
      content : {title:" Left/Right 結果統計",subTitle:"＊每張卡統計時間"},
      activeSections:[0],
    }
    // console.log(chartDataNew)
    ChapterService.chapterList.chart = chartDataNew;
    // ChapterService.chapterList.chart.pages["0"].chartList = leftOrRight_ChartSetting
    // ChapterService.chapterList.chart.pages["0"].content = {...ChapterService.chapterList.chart.pages["0"].content,title:" Left/Right 結果統計",subTitle:"＊每張卡統計時間"}
    // console.log()
    ChapterService.goByName('chart')
  }

  render() {
    console.warn("page deck swiper render");

      if(!lottieSwipeJson){
        return null
      }

    return (


      <Container style={styles.container}>
        <HeaderBox>
        </HeaderBox>
          {/*<View style={[coreStyle.containerCenter,{flex:1,paddingLeft:12,paddingRight:12},libStyle.justifyCenter,{alignItems:"center"}]}>
          {!this.turnOnSwiper ? <Text>一共答對 {this.statistics.correct}</Text> : null}
          <Button light={false}
          disabled={false} 
          onPress={this.goResult.bind(this)} 
          success 
          bordered={false}
          full
          style={[coreStyle.btn,{marginTop:10,width:150,alignSelf:"center"}]}
          ><Text>送出</Text></Button></View>*/}
     {/*     {this.turnOnSwiper ? this.deckSwiper(this.cards):null}*/}
          {/*this.turnOnSwiper?this.deckSwiper():null*/}
          {this.deckSwiper()}
        
        {/*overlayer*/}
        {this.overlayer?(<TouchableOpacity onPress={this.overlayerClick}  style={[coreStyle.overlayer]}>
        <Animatable.View useNativeDriver={true} ref={this.handleViewRef} style={coreStyle.containerCenter}>
          <Container style={coreStyle.containerCenter}>
            <Content padder contentContainerStyle={{ 
                justifyContent: 'center',
                flex: 1 }}>
                {mapContent(this.chapterData.overlayer)}
                <View style={{position:'relative', height:140}}>
                <LottieView style={{}} source={lottieSwipeJson} loop={true} progress={this.progress}/>
                </View>
            </Content>
          </Container>
      </Animatable.View>
      </TouchableOpacity>):null}

        {this.footer?<FooterNext data={{id:this.props.id, secId:this.props.secId}} /> : null}
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

export default PageDeckSwiper