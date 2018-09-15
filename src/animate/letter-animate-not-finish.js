import React, { Component } from 'react';
import { StyleSheet, View, Animated, Text } from 'react-native';
import * as Aminatable from 'react-native-animatable';

export default class LetterAnimate extends Component {
  state = {
    fire:false
  };

  render() {
    let vm = this;
    console.warn('letter animate render');
    let delayNow = 0;
    let delay = this.props.delay;
    let letters = [];
    let fullRepeat;
    let fullRepeatDelay = 300;
    // let fire ;
    let onAnimationEnd;
    if(!!this.props.fire){
      // fire = this.props.fire;
      this.setState({fire:this.props.fire});
    }
    // if(!!this.props.fullRepeat){
    //   fullRepeat = this.props.fullRepeat;
    // }
    // if(!!this.props.fullRepeatDelay){
    //   fullRepeatDelay = this.props.fullRepeatDelay;
    // }
    // if(!!this.props.onAnimationEnd){
    //   onAnimationEnd = this.props.onAnimationEnd;
    // }
    //** string or array
    console.log(typeof this.props.letters)
    if(typeof this.props.letters ==='string'){
      letters = this.props.letters.split('');
    }else{
      letters = this.props.letters;
    }

    let fadeInLetter = letters.map((letter, i)=>{
      delayNow+=delay;
      console.log(delayNow);
      let fullAnimationEnd = ()=>{};
      console.log('i: '+i)
      if(i+1===letters.length){
        console.log('i+1===letter.length: '+(i+1===letter.length));
        fullAnimationEnd = ()=>{
          onAnimationEnd();
          // if(!!fullRepeat){
          //   vm.props.fire=false;
          //   vm.props.fire=true;
          //   // vm.setState({fire:false});
          //   // vm.setState({fire:true});
          // }
        };
      }
      return (
        <Aminatable.Text 
        key={i.toString()} 
        animation={this.props.animation} delay={delayNow} onAnimationEnd={fullAnimationEnd}
        style={this.props.letterStyle}>{letter}</Aminatable.Text>
      )
    })

    return (
      <View style={{...this.props.style}}>
        {this.props.fire ? fadeInLetter : null}
      </View>
    );
  }
}
