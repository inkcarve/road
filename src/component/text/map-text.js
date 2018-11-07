import React from 'react';
import {Text} from "react-native";
import UserStore from "../../store/user-store"
import projectSetting from "../../setting/project-setting"

let textVarTag = projectSetting.textVarTag;
// console.log(textVarTag)

let translateVar = (text)=>{
	// console.log("translateVar")
// console.log(text)
// console.log(textVarTag)
// console.log(text.search(textVarTag))
// return text;
// console.log(text.match(textVarTag))
	if(text.search(textVarTag)===-1)return text;
	let key = text.split(textVarTag)[1];
	return UserStore.userData[key];
}

let reduceData = (data)=>{
	// console.log("reduceData")
	// console.log(data)
	// if(!data) return;
	let result = data.reduce((last,current,i)=>{
		// console.log("data.reduce")
		if(i===1){
			last = translateVar(last)
		}
		current = translateVar(current)
		return last+current;
	})
	// console.log("result: "+result)
	return result
}

let mapText = (data)=>{
	// console.log("mapText: "+JSON.stringify(data))
  return data.map((obj,i)=>{
    return (<Text key={i}>{reduceData(obj.text)}</Text>)
  })
}


export default mapText;