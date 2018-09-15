import React, { Component } from 'react'
import { StyleSheet, Text, View, Animated, TextInput, AsyncStorage } from 'react-native'
import * as Animatable from 'react-native-animatable'
import {Item, Input, Button} from "native-base"
import coreStyle from "../../style/core-style"
import libStyle from "../../style/lib-style"
import {Container} from "native-base"
import dynamicStyle from "../../style/dynamic-style"
import {Actions} from 'react-native-router-flux';

export default class InputCenter extends Component<{}> {

  render() {
    return (
      <View style={coreStyle.container}>
        <Text>你好 (請在下方輸入想使用的名子)</Text>
        <Item>
          <Input style={{minWidth:250}} onChangeText={value=>this.nameChange(value)} value={this.state.name}/>
        </Item>
        <View style={libStyle.justifyCenter, dynamicStyle("m_t_15")}>
          <Button light={this.state.formValid} disabled={!this.state.formValid} onPress={this.submit} warning={this.state.formValid} bordered><Text>送出</Text></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


