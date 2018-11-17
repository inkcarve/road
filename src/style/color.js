import { StyleSheet } from 'react-native';
const primary = "#34d0ba";
const color = {
	primary:primary,
	primaryOpacity(v){
		return `rgba(52, 208, 186, ${v})`
	},
	primarySide:"#1049A9",
	primaryR:"#ff9400",
	primaryRSide:"#FFA400",
	// sec:""
	ccc:"#ccc",
	ddd:"#ddd",
	secondary:"#878c90",
	success:"#3ed5d6",
	error:"#ff5f7b",
	warning:"",
	danger:"",
	info:"",
	light:"#fcfcfc",
	text:"#878c90",
	hint:"#cdcdcd"

}

export default color;
