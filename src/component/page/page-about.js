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
    Tab, Tabs, ScrollableTab, TabHeading,
    Grid, Row, Col,
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


@observer class PageAbout extends Component < {} > {

    handleViewRef = ref => this.view = ref;
    chapterData = ChapterService.chapterData;

    state={
    }

    @observable keepSecret = null;

    componentDidMount() {}

    mapPackakge(){
      const packageData = this.chapterData.package;
      return Object.keys(this.chapterData.package).map((obj,i)=>{
        return (<Text key={i}>- {obj} : {packageData[obj]}</Text>)
      });
    }

    answerSecret(value){
        this.view.fadeOut(700).then(endState=>{
          if(endState){
              this.keepSecret = value;
          }
        });
    }

    resetSecret(){
      this.keepSecret=null
    }

    resultDetail(item, isContent){
      let itemStyle=isContent?
      {fontSize:12}:
      null;
      if(item.isComponent){
        return (<View>{item.data}</View>);
      // }
      // else if(item.link){
      //   return (<Button style={[itemStyle]} onPress={()=>{Linking.openURL(link)}}>{item.data}</Button>)
      }else{
        return <Text style={[itemStyle]}>{item.data}</Text>
      }
    }

    mapDetail(){
      const data = this.chapterData.detail;

      return data.map((obj,i)=>{
        const Cell = obj.row? Row : Col;
        return (
          <View>

            {/* <Cell><Text style={{paddingBottom:5}}>{obj.label}</Text></Cell>
            <Cell><Text style={{fontSize:12}}>{obj.content}</Text></Cell> */}
            {obj.row ?
              (
                <View>
                <Row style={{paddingBottom:5}}>{this.resultDetail(obj.label)}</Row>
                <Row style={{paddingBottom:5}}>{this.resultDetail(obj.content)}</Row>
              </View>
            )
            :
            (

              <Row  style={{paddingBottom:5}}>
                <View style={{minWidth:120, flex:0}}>{this.resultDetail(obj.label)}</View>
                <View style={{flex:1}}>{this.resultDetail(obj.content)}</View>
              </Row>

            )}

          </View>
        )
      })
    }

    render() {

        return (

            <Container>
        <Content>
        <View style = {[{justifyContent: 'center'}]}>
          <View style={[coreStyle.containerCenter,libStyle.bgNone,{minHeight:viewportHeight, paddingTop:30, paddingBottom:30}]}>
            <View style={[coreStyle.H1,  dynamicStyle('p_10')]}>
              <H1 style={[{textAlign:"center", color:color.primary}]}>{this.chapterData.title}</H1>
              <Text style={[{textAlign:"center", color:color.primaryR}]}>{this.chapterData.subTitle}</Text>
            </View>
            <Tabs
              style={{backgroundColor:"#fff", justifyContent:'center'}}
              renderTabBar={()=> <ScrollableTab style={{backgroundColor:"#fff", justifyContent:'center'}}/>}>

          <Tab heading={<TabHeading><Text>Author</Text></TabHeading>}>
            {this.keepSecret===null?(
              <Animatable.View style={[coreStyle.containerCenter,{padding:15}]} animation={"fadeIn"}>
              <Animatable.View ref={this.handleViewRef} style={[coreStyle.containerCenter]} >

              {/* <Card style={[{width:'100%'}]}>
                <CardItem style={[libStyle.p0]}> */}
              <View><View style={{width:'60%',aspectRatio:4/3,maxWidth:400}}>
                  <FastImage style={{
                        width: "100%",
                        aspectRatio:4/3,
                        // flex: 1,
                        // height: 300
                      }}
                      source={this.chapterData.secret}
                      resizeMode={FastImage.resizeMode["contain"]}
                    />
                    </View>
                    <View>
                    <H3 style={[coreStyle.H3,{textAlign:'center'}]}><Text>你能夠保守秘密嗎？</Text></H3>
                    </View>
                    <View style={[coreStyle.H3 ,{justifyContent:'center', flexDirection:'row'}]}>
                      <Button bordered primary style={[coreStyle.btn, {margin:10}]} onPress={()=>{this.answerSecret('no')}}>
                        <Text>No</Text>
                      </Button>
                      <Button primary style={[coreStyle.btn, {margin:10}]} onPress={()=>{this.answerSecret('yes')}}>
                        <Text>Yes</Text>
                      </Button>
                    </View></View>

                {/* </CardItem>
              </Card> */}
              </Animatable.View>
            </Animatable.View>):null}
            {this.keepSecret==='no'?(<Animatable.View animation={"fadeIn"} style={[coreStyle.containerCenter,{padding:15}]}>
              <H1 style={coreStyle.H1}><Text style={coreStyle.H1_Text}>哪泥 ？！</Text></H1>
              <View style={{width:'80%',aspectRatio:4/3,maxWidth:440}}>
              <FastImage style={[{
                    width: "100%",
                    aspectRatio:4/3,
                    // flex: 1,
                    // height: 300

                      borderWidth:3,
                      borderColor:color.primary,

                  }]}
                  source={this.chapterData.shockCat}
                  resizeMode={FastImage.resizeMode["cover"]}
                />
              </View>
              <View style={[coreStyle.H3 ,{justifyContent:'center', flexDirection:'row'}]}>
              <Button bordered primary style={[coreStyle.btn, {margin:10}]} onPress={()=>{this.resetSecret()}}>
                <Text>Choose Again</Text>
              </Button>
            </View>
            </Animatable.View>):null}
            {this.keepSecret==='yes'?(<Animatable.View animation={"fadeIn"} style={[coreStyle.containerCenter,{padding:15}]}>
              <Card style={{padding:15,flex:1,width:'100%'}}><CardItem>
                <View style={{width:'80%',aspectRatio:4/3,maxWidth:440}}>
                <FastImage style={{
                      width: "100%",
                      aspectRatio:1,
                      // flex: 1,
                      // height: 300
                    }}
                    source={this.chapterData.me}
                    resizeMode={FastImage.resizeMode[""]}
                  />
                </View>
              </CardItem>
              <CardItem style={[{alignItems:'flex-end',paddingBottom:0}]}>

                <H2>林庭瑋</H2><H3 style={{fontSize:14, paddingLeft:5}}><Text >Ting-Wei Lin</Text></H3>
              </CardItem>

                <CardItem style={{paddingTop:3,paddingBottom:0}}>
                  <CardItem style={[libStyle.borderBottomCCC,libStyle.p0,{paddingBottom:10, width:'100%'}]}>
                <H3><Text style={{fontSize:12, marginLeft:20}}>/ Web Frontend Enginer</Text></H3>
                </CardItem>
              </CardItem>
              <CardItem>
                <Grid>
                  <Col>
                {this.mapDetail()}
                </Col>
              </Grid>
              </CardItem>
            </Card>
            </Animatable.View>):null}
          </Tab>
          <Tab heading={<TabHeading><Text>App</Text></TabHeading>}>
          <View style={[coreStyle.containerCenter,{padding:15}]}>
            <View style={[{textAlign:'left', padding:15}]}>
              <H3 style={[coreStyle.H3]}>Feature Packages:</H3>
            {this.mapPackakge()}
            </View>
          </View>
          </Tab>
        </Tabs>

          </View>
        </View>
        </Content>
      </Container>

        );
    }
}

export default PageAbout
