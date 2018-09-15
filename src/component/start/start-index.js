import React, { Component } from 'react'
import { StyleSheet, View, Animated, AsyncStorage } from 'react-native'
import * as Animatable from 'react-native-animatable'
import {Container, Content, Text, Item, Input, Button, Icon} from "native-base"
import {Actions} from 'react-native-router-flux'

import coreStyle from "../../style/core-style"
import libStyle from "../../style/lib-style"
import dynamicStyle from "../../style/dynamic-style"

import UserStore from '../../store/user-store'
import ChapterService from '../../setting/chapter-service'

export default class StartIndex extends Component<{}> {
  state={
    name:null,
    formValid:false,
    touched:false
  };

  validateName(text){
    if(!text || text.length > 12){
      return false
    }
    return true
  }

  onEndEditing (){
    this.state.touched = true;
    let valid = this.validateName(this.state.name)
    this.setState({formValid:valid})
    
    // this.setState({name:this.state.name})
    // console.log("name:"+text);
  }

  onNameChange (text){

    this.state.name = text
  }

  submit = async ()=>{
    if(this.state.formValid){
      let userData = await UserStore.userData;
      // if(!userData)userData = {};
      userData.name = this.state.name;
      await UserStore.set({userDate:userData});
      this.props.leave();
      // ChapterService.go();
      
    }else{
      alert("名子不可超過12個字")
    }
  }

  render() {
    return (
      <Container style={coreStyle.containerCenter}>
        <View padder  
        contentContainerStyle={{ 
                justifyContent: 'center',
                flex: 1 }}>
        <Text>你好，請在下方輸入想使用的名子 *</Text>
        <Item 
        error={this.state.touched && !this.state.formValid} 
        success={this.state.formValid} 
        style={[coreStyle.formGroup]}>
          <Input style={coreStyle.input} onEndEditing={value=>this.onEndEditing(value)} onChangeText={value=>this.onNameChange(value)}/>
           {this.state.touched && !this.state.formValid?<Icon name='close-circle' />:null}
           {this.state.formValid ? <Icon name='checkmark-circle' />:null}
        </Item>
         {this.state.touched && !this.state.formValid ?
          <Item error style={[{marginTop:5,borderBottomWidth:0,position:'relative'}]}>
          <Animatable.View animation="bounceInDown">
            <Text style={[coreStyle.error]}>請輸入不超過12個字的使用者名稱</Text>
          </Animatable.View>
          </Item>
          : null
        }

        <View style={[libStyle.justifyCenter, {marginTop:10}]}>
          <Button light={!this.state.formValid} 
          disabled={!this.state.formValid} 
          onPress={this.submit} 
          success={this.state.formValid} 
          bordered={!this.state.formValid}
          full
          style={[coreStyle.btn,coreStyle.btnBlock]}
          ><Text>送出</Text></Button>
        </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});