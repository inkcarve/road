import React, { Component } from 'react'
import { Animated, StyleSheet, View, TouchableOpacity, Dimensions, Image, Easing, Linking } from 'react-native'
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
    Link,
    H1,
    H2,
    H3
} from "native-base"

//** import style
import color from '../style/color';
import coreStyle, { prefixIcon } from '../style/core-style'
import libStyle from '../style/lib-style'
import dynamicStyle from '../style/dynamic-style'

const me = require('../image/about/me.jpg');
const secret = require('../image/about/can-you-keep-a-secret.jpeg');
const shockCat = require('../image/about/shock-cat.gif');

export const aboutData = {
    pages:{
        "0":{
            tpl:"about",
            title:"Aount Something",
            subTitle:"關於",
            package:{
              // "babel-core": "6",
              "lottie-react-native": "^2.5.9",
              "mobx": "^4.3.0",
              "mobx-react": "^5.1.2",
              "native-base": "^2.4.3",
              // "react": "16.3.1",
              // "react-native": "0.55.4",
              "react-native-animatable": "^1.2.4",
              "react-native-blur": "^3.2.2",
              // "react-native-chart-kit": "^1.1.5",
              // "react-native-charts-wrapper": "^0.5.0",
              "react-native-code-push": "^5.4.2",
              "react-native-collapsible": "^1.3.0",
              "react-native-deck-swiper": "^1.5.22",
              "react-native-drawer": "^2.5.0",
              "react-native-fast-image": "^5.1.1",
              // "react-native-fetch-blob": "^0.10.8",
              // "react-native-fs": "^2.10.14",
              // "react-native-material-kit": "^0.5.1",
              "react-native-router-flux": "^4.0.0-beta.28",
              "react-native-snap-carousel": "^3.7.5",
              // "react-native-sound": "^0.10.9",
              "react-native-splash-screen": "^3.1.1",
              "react-native-svg": "^6.5.2",
              // "react-native-typography": "^1.3.0",
              "react-native-vector-icons": "^6.0.2",
              // "react-native-zip-archive": "^3.0.1",
              "victory-native": "^30.1.0"
            },
            me:me,
            secret:secret,
            shockCat:shockCat,
            detail:[
              {
                label:{data:'Some Exp below'},
                content:{
                  data:`Angular 7, Vue(cli 3), React, React Native, AngularJs, Jquery, Bootstrap, NodeJs+Express, Scss, Webpack`,

                },
                row:true,
              },
              {
                label:{
                  data:(
                    <View style={[coreStyle.H3 ,{justifyContent:'center', flexDirection:'row'}]}>
                    <Button style={[{margin:2, justifyContent:'center'}]} bordered onPress={()=>{Linking.openURL('https://github.com/inkcarve')}}>
                    <Icon name='logo-github'></Icon>
                    {/* <Text style={{fontSize:12, paddingLeft:0}}>GitHub</Text> */}
                  </Button>
                    <Button style={[{margin:2, justifyContent:'center'}]} bordered onPress={()=>{Linking.openURL('mailto:inkcarve@gmail.com')}}>
                      <Icon name={prefixIcon('mail')}></Icon>
                    {/* <Text style={{fontSize:12, paddingLeft:0}}>Email</Text> */}
                  </Button>
                  <Button style={[{margin:2, justifyContent:'center'}]} bordered onPress={()=>{Linking.openURL('tel://+886982783047')}}>
                    <Icon name={prefixIcon('call')}></Icon>
                  {/* <Text style={{fontSize:12, paddingLeft:0}}>Phone</Text> */}
                </Button>
                <Button style={[{margin:2, justifyContent:'center'}]} bordered onPress={()=>{Linking.openURL('https://road-of-ting-wei.herokuapp.com/resume')}}>
                    <Text style={[{paddingRight:0}]}>More</Text><Icon name={prefixIcon('sunny')}></Icon>
                  {/* <Text style={{fontSize:12, paddingLeft:0}}>Phone</Text> */}
                </Button>
                    </View>
                  ),
                  isComponent:true,
                },
                content:{data:''},
                row:false,
              },
              // {
              //   label:{
              //     // data:'Email',
              //     data:<Button transparent onPress={()=>{Linking.openURL('mailto:inkcarve@gmail.com')}}><Text>Email</Text></Button>,
              //
              //     // link:'mailto:inkcarve@gmail.com',
              //     isComponent:true,
              //   },
              //   content:{data:''},
              //   row:false,
              // },

            ]

        }
    }
}
