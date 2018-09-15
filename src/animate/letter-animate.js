import React, { Component } from 'react';
import { StyleSheet, View, Animated, Text } from 'react-native';
import * as Aminatable from 'react-native-animatable';

export default class LetterAnimate extends Component {
  state={
    fire:null,
    fireComponent:null
  };
  
  fullRepeatDelay = 300;

  timer=null;

  onAnimationEnd = ()=>{
    this.props.onAnimationEnd();
    if(this.fullRepeat){
      
      // if(this.timer!==null){this.timer=null}
      if(this._unmounted || this.timer)return
      this.timer = setTimeout(()=>{
        console.log(this);
        this.timer=null
        if(!this._unmounted) {
        this.setState({fire:null});
        this.setState({fire:true});
        }
      },this.fullRepeatDelay)
    }
  };

  componentWillUnmount (){
    console.log("componentWillUnmount")
      this._unmounted=true
  }

  LetterShow = null;
  fadeInLetter = ()=>{
    if(!this.state.fire){
      let letterString = "";
      if(typeof this.props.letters ==='string'){
        letterString = this.props.letters;
      }else{
        letterString = this.props.letters.join();
      }
      return null;
    }
    let letters = [];
    
    //** string or array
    if(typeof this.props.letters ==='string'){
      letters = this.props.letters.split('');
    }else{
      letters = this.props.letters;
    }

    if(!!this.props.fullRepeat){
      this.fullRepeat = this.props.fullRepeat;
    }
    if(!!this.props.fullRepeatDelay){
      this.fullRepeatDelay = this.props.fullRepeatDelay;
    }

    let delayNow = 0;
    return letters.map((letter, i)=>{
      delayNow+=this.props.delay;
      let onAnimationEnd = ()=>{}
      
      if(i+1===letters.length && !this.timer){
        onAnimationEnd = this.onAnimationEnd;
        this.initLetters = true;
      }
      return (
        <Aminatable.Text 
        key={i.toString()} 
        animation={this.state.fire ? this.props.animation : null} delay={delayNow} onAnimationEnd={onAnimationEnd}
        style={this.props.letterStyle}>{letter}</Aminatable.Text>
      )
    })
  }
  
  render() {
    // console.warn('render')
    if(!this.initLetters){
        this.state.fire = this.props.fire;
    }

    return (
      <View style={{...this.props.style}}>
          {this.fadeInLetter()}
      </View>
    );
  }
}
