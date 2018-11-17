import React from 'react';
// import {Text, View} from "react-native";
import { Content } from 'native-base'
// import UserStore from "../../store/user-store"
// import projectSetting from "../../setting/project-setting"
import mapText from './map-text'
import P from './p'

let mapContent = (data,textStyle)=>{
	if(!data)return
	// console.log("mapText: "+JSON.stringify(data))
  return data.map((obj,i)=>{

  	let text = [];
  	text[0]=obj;
    return (<P key={i}>{mapText(text, textStyle)}</P>)
  })
}


export default mapContent;
