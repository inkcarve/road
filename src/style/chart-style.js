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

export const primaryColor = color.primaryR;
export const strongColor = color.primary;

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

// console.log(libStyle)
export const chartStyleData = {
  carouselBox:{
    height: vh(60),
    flex:0,
  }
}

export const chartStyle =  StyleSheet.create(chartStyleData);


// console.log(libStyle)
export const lineStyle = {

          data: {
            stroke: primaryColor, strokeWidth: 2
          },
          labels: {
            fontSize: 15,
            fill: (d) => d.x === 3 ? color.primary : primaryColor
          },
          // axis: {stroke: "#756f6a"},
}

export let barStyle = {

          data: {
            stroke: primaryColor,
            strokeWidth: 2,
            fill: primaryColor,
          },
          labels: {
            fontSize: 15,
            // fill: (d) => {
            //   console.log("barStyle");
            //   console.log(this);
            //   return d.y === 3 ? color.primary : primaryColor
            // }
                        // fill: (d) => d.x === 3 ? color.primary : primaryColor
            // fill: (d) => d.x === "dogs" ? color.primary : primaryColor

          },
          // axis: {stroke: "#756f6a"},
}

export const pieStyle = {

          // data: {
          //   stroke: primaryColor,
          //   strokeWidth: 2,
          //   fill: primaryColor,
          // },
          labels: {
            fontSize: 15,
            fill: (d) => d.x === 3 ? color.primary : primaryColor
          },
          // axis: {stroke: "#756f6a"},
}

export const polarAreaStyle = {

          data: {
            // stroke: primaryColor,
            // strokeWidth: 2,
            fill: primaryColor,
            fillOpacity:0.2,
          },
          labels: {
            fontSize: 15,
            fill: (d) => d.x === 3 ? color.primary : primaryColor
          },
          // axis: {stroke: "#756f6a"},
}