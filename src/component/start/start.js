//** import lib
import React from 'react';
import { Animated, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import * as Animatable from "react-native-animatable";
import { Button , Container, Content, Grid, Row, Col} from "native-base"
import {Actions} from 'react-native-router-flux'
import {observer} from 'mobx-react'
import {observable, action} from 'mobx'

//** import style
import coreStyle from '../../style/core-style'
import libStyle from '../../style/lib-style'

//** import custom
import StartView from "./start-view"
import StartIndex from "./start-index"
import UserStore from "../../store/user-store"
import ChapterService from '../../setting/chapter-service'

@observer class Start extends React.Component<{}> {

  state={
    startViewClick:false,
    startViewEnd:false,
    routerData:ChapterService.routerData
  }

  @observable show=true

  handleViewRef = ref => this.view = ref;

  startViewClick = ()=>{
    if(!UserStore.userData || !UserStore.userData.name){
      this.view.fadeOut(400).then(endState=>{
        if(endState){
          this.setState({'startViewEnd':true});
          this.setState({'startViewClick':true});
        }
      });
    }else{
      this.leave()
    }
  }

  @action leave(){
    console.log('leave')
    this.show=false
    ChapterService.go();
  }

  // resetStart(){
  //   this.setState({startViewClick:false})
  //   this.setState({startViewEnd:false})
  // }

  render() {

    if(!this.show)return null
    // console.log(this.props.name)
    console.log('render start')
    // if(this.props.name!==ChapterService.routerData.tpl)return null

    return (
      <View style={styles.container}>

      {
      this.state.startViewEnd ?
      (<Animatable.View animation={"fadeIn"}><StartIndex leave={this.leave.bind(this)}/></Animatable.View>)
      :
      (<TouchableOpacity onPress={this.startViewClick}>
        <Animatable.View useNativeDriver={true} ref={this.handleViewRef}>
          <StartView></StartView>
        </Animatable.View></TouchableOpacity>
      )
      }

      {/*<View style={styles.container}>*/}
  
      {/*</View>*/}
      </View>
    );
  }
}

export default Start

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
  },
  content:{
    opacity:0,
  }
});
