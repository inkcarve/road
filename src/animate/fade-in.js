import React, { Component } from 'react';
import { StyleSheet, View, Animated, Text } from 'react-native';


export default class FadeIn extends Component {

  // constructor(props) {
  //       super(props);
  //       this.state = {
  //           fadeInAnimate: new Animated.Value(0)
  //       }
  //   }
  state = {
    fadeInAnimate: new Animated.Value(0),
  }

  componentWillUpdate (){
    // let animatedCallBack = function(){};
    // if(typeof this.props.animatedCallBack ==='function'){
    //   animatedCallBack = this.props.animatedCallBack;
    // }
    // this.state.fadeInAnimate.setValue(0)
    // console.warn('didmount')
    Animated.timing(
      this.state.fadeInAnimate,
      {
        toValue: 1,
        duration:1000
      }
      ).start();
  }

  render() {
    // console.warn('render')
    // console.log(this.props)
    let {fadeInAnimate} = this.state;
    return (
      <Animated.View style={{...this.props.style, opacity: fadeInAnimate}}>
        {this.props.children}
      </Animated.View>
    );
  }
}
