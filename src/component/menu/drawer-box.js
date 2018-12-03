import React, {Component} from 'react'
import {View, findNodeHandle} from 'react-native'
import Drawer from 'react-native-drawer'
import { BlurView } from 'react-native-blur'
import {observer} from 'mobx-react'
import {observable} from 'mobx'


import SideMenu from './side-menu'
import DrawerIcon from './drawer-icon'
import UserStore from '../../store/user-store';
import ChapterService from '../../setting/chapter-service';
import BlurBg from '../blur/blur-bg'

class DrawerBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewRef: null,
      showBlur:false,
      drawerOpen:false
    };
  }

  // @observable _drawer._open

  close (){
    console.log()
    this._drawer.close()
    // this.setState({drawerOpen:false})
    // this.setViewRef(null)
    // this.viewRef=null

    UserStore.setViewRef(false,null)
  };

  open (){
    console.log("drawer open")
    this._drawer.open()
    UserStore.setViewRef(true,this.viewRef)
    // this.setViewRef(this.viewRef)
    // this.setState({drawerOpen:true})
  };

  onOpen (){
    // this.state.showBlur=false
    // this.setState({showBlur:true})

  }

  onClose(){
    // this.state.showBlur=true
    // this.setState({showBlur:false})

  }

  setViewRef(e) {
    // if(this.state.viewRef)return;
    this.setState({ viewRef: findNodeHandle(this.viewRef) });

  }

  blurView(){
    console.log(this._drawer)
    // if(!this._drawer || !this._drawer._open)return null
    return <BlurView
          style={{
            position: "absolute",
            top: 0, left: 0, bottom: 0, right: 0, zIndex:1
          }}
          viewRef={this.state.viewRef}
          blurType="light"
          blurAmount={10}
          blurRadius={15}
          downsampleFactor={5}
          overlayColor={'rgba(255, 255, 255, .25)'}
        />
  }

  render () {
    // setTimeout(this.open,1000)
    // UserStore.setViewRef = this.setViewRef.bind(this);
    // if(ChapterService.routeData){this.hideNavBar = ChapterService.routeData.hideNavBar}

    return (
      <View  style={{position:"absolute",zIndex:1000,top:0,left:0, width:"100%",height:"100%"}}>
      <DrawerIcon close={this.close.bind(this)}  open={this.open.bind(this)} />
      <Drawer
        ref={(ref) => this._drawer = ref}
        content={<SideMenu close={this.close.bind(this)}  open={this.open.bind(this)}/>}
        // open={false}
        type={"overlay"}
        openDrawerOffset={0}
        onOpen={this.onOpen.bind(this)}
        onClose={this.onClose.bind(this)}
        // style={drawerStyles}
        >

        <View style={{flex: 1}} ref={(e) => {this.viewRef = e}}>
        {this.props.children}

        </View>
        {/*this.state.showBlur?this.blurView():null*/}
        <BlurBg viewRef={this.viewRef} showBlur={this.state.showBlur}/>
      </Drawer>
      </View>
    )
  }
}

export default DrawerBox

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}
