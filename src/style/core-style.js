import { StyleSheet, Dimensions, Platform } from 'react-native';
import { libstyleData } from './lib-style';
import color from './color'

const { width: _viewportWidth, height: _viewportHeight } = Dimensions.get('window');
export const is_ios = Platform.OS === 'ios';
export const viewportWidth = _viewportWidth;
export const viewportHeight = _viewportHeight;

// console.log('_viewportWidth:'+_viewportWidth)
// console.log('_viewportHeight:'+_viewportHeight)

function vw (percentage) {
    const value = (percentage * _viewportWidth) / 100;
    return Math.round(value);
}

export const vw = vw

function vh (percentage) {
    const value = (percentage * _viewportHeight) / 100;
    return Math.round(value);
}

export const vh = vh;

export const prefixIcon = name=>{
  return (is_ios? "ios-" : "md-")+name;
}

// console.log(libStyle)
const coreStyleData = {
  containerCenter: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
  },
  btn:{
    paddingTop:14,
    paddingBottom:14,
    paddingRight:14,
    paddingLeft:14,
    height:"auto",
    width:"auto",
    justifyContent:'center',
  },
  btnBlock:{
    width:'100%'
  },
  p:{
    padding:5,
    paddingBottom:10,
  },
  header:{
    borderWidth:0,
  },
  overlayer:{
    width:'100%',
    height:'100%',
    flex:0,
  },
  error:{
    color:color.error
  },
  input:{
    paddingLeft:0,
    paddingRight:0,
  },
  formGroup:{
    position:'relative',
    marginBottom:14
  },
  icon:{
    color:color.text,
    alignItems:'center',
    textAlign:'center'
  },
  iconMenuLeft:{
    fontSize:20,
    color:color.text
  },
  saparator:{
    flex:0,
    backgroundColor:'#ffffff'
  },
  H1:{
    marginBottom:10,
  },
  H1_Text:{
    fontSize:30,
  },
  H3:{
    marginTop:10,
    marginBottom:10,
  },
  textSecondary:{
    color:color.secondary
  },
  border:{
    borderWidth:1,
    borderColor:color.secondary,
  }
  // warning:{
  //   color:color.warning
  // },
}

export const contentPadding = function (w,h){
  let outH = (viewportHeight-h)/2;
  let outW = (viewportWidth-w)/2;
  let result = {
    paddingTop:outH,
    paddingBottom:outH,
    paddingLeft:outW,
    paddingRight:outW,
  }
  console.log(result)
  return result;
}

Object.assign(coreStyleData.overlayer,libstyleData.absLayerTopLeft)

export default StyleSheet.create(coreStyleData);
