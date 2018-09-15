import { StyleSheet, Dimensions, Platform } from 'react-native';
import { libstyleData } from './lib-style';
import { viewportHeight, viewportWidth, vw, vh } from './core-style'
import color from './color'

// console.log(libStyle)
const leftOrRightStyleData = {
  card:{flex:0,height:'100%',width:'100%',justifyContent: 'center' },
  cardBody:{
    height: vh(66)
  }
}

export const leftOrRightStyle =  StyleSheet.create(leftOrRightStyleData);
