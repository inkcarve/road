import { StyleSheet, Dimensions, Platform } from 'react-native';
import { libstyleData } from './lib-style';
import { viewportHeight, viewportWidth, vw, vh } from './core-style'
import color from './color'

const IS_IOS = Platform.OS === 'ios';
// const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

// function vw (percentage) {
//     const value = (percentage * viewportWidth) / 100;
//     return Math.round(value);
// }

// function vh (percentage) {
//     const value = (percentage * viewportHeight) / 100;
//     return Math.round(value);
// }

const slideHeight = viewportHeight * 0.36;
const slideWidth = vw(75);
const itemHorizontalMargin = vw(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

// console.log(libStyle)
const doorStyleData = {
  carouselBox:{
    height: vw(60)
  }
}

export const doorStyle =  StyleSheet.create(doorStyleData);
