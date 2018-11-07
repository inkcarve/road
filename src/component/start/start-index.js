import React, { Component } from 'react'
import { StyleSheet, View, Animated, TouchableOpacity} from 'react-native'
import * as Animatable from 'react-native-animatable'
import {Container, Content, Text, Item, Input, Button, Icon} from "native-base"
import {Actions} from 'react-native-router-flux'
import { random, range } from "lodash";
import { VictoryChart, VictoryTheme, VictoryLine, VictoryAxis, VictoryScatter } from "victory-native";
import coreStyle from "../../style/core-style"
import libStyle from "../../style/lib-style"
import dynamicStyle from "../../style/dynamic-style"

import UserStore from '../../store/user-store'
import ChapterService from '../../setting/chapter-service'

export default class StartIndex extends Component<{}> {

  state={
    name:null,
    formValid:false,
    touched:false,
    scatterData: this.getScatterData(),
    loading:false,
  };

  validateName(text){
    if(!text || text.length > 30){
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
      alert("名子不可超過30個字")
    }
  }

  setChart(){
    console.log('setChart')
    this.setState({
      scatterData: this.getScatterData(),
    });
  }

  randomName(){
    this.setState({
      scatterData: this.getScatterData(),
      loading:true
    });
    fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      // return
      let nameData = res.results[0].name
      this.setState({
        name:nameData.first+' '+nameData.last,
        formValid:true,
        loading:false
      });
    })
    .catch((error) => {
      console.error(error);
      alert('Connect Failed. Please check network status.')
      this.setState({
      // scatterData: this.getScatterData(),
      loading:false
    });
    });
  }

  componentDidMount() {
    this.setStateInterval = window.setTimeout(() => {
this.setChart()
    }, 300);
  }

  componentWillUnmount() {
    // window.clearInterval(this.setStateInterval);
  }

  getScatterData() {
    const colors =[
      "violet", "cornflowerblue", "gold", "orange",
      "turquoise", "tomato", "greenyellow"
    ];
    const symbols = [
      "circle", "star", "square", "triangleUp",
      "triangleDown", "diamond", "plus"
    ];
    return range(25).map((index) => {
      const scaledIndex = Math.floor(index % 7);
      return {
        x: random(10, 50),
        y: random(2, 100),
        size: random(8) + 3,
        symbol: symbols[scaledIndex],
        fill: colors[random(0, 6)],
        opacity: 0.6
      };
    });
  }

  render() {
    return (
      <Container style={coreStyle.containerCenter}>
      <View style={{position:'relative', marginTop:-30}}>
      
      {/*<VictoryChart animate={{ duration: 2000, easing: "bounce" }}>*/}
      <View style={{opacity:(this.state.loading ? 1 : 0.4)}}>
        <VictoryScatter
          data={this.state.scatterData}
          animate={{ duration: 2000, easing: "bounce" }}
          style={{
            data: {
              fill: (d) => d.fill,
              opacity: (d) => d.opacity
            }
          }}
        />
        </View>
        <TouchableOpacity
          disabled={this.state.loading} 
         onPress={()=>this.randomName()} style={{
          opacity:(this.state.loading ? 0 : 1),
          position:'absolute',width:'100%',height:'100%',justifyContent:'center',alignItems: 'center'}}>
        <Text>隨機取名  Random Name</Text>
        <Text style={{fontSize: 10}}>(Thanks randomuser API https://randomuser.me/)</Text>
      </TouchableOpacity>
      {/*</VictoryChart>*/}
      
      </View>
        <View padder  
        contentContainerStyle={{ 
                justifyContent: 'center',
                flex: 1 }}>
        <Text>你好，請在下方輸入想使用的名子 *</Text>
        <Item 
        error={this.state.touched && !this.state.formValid} 
        success={this.state.formValid} 
        style={[coreStyle.formGroup]}>
          <Input style={coreStyle.input} onEndEditing={value=>this.onEndEditing(value)} 
          onChangeText={value=>this.onNameChange(value)}
          disabled={this.state.loading} 
          value={this.state.name}/>
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
          onPress={()=>{this.submit()}} 
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