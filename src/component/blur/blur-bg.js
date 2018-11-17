import React, {Component} from 'react'
import {View, findNodeHandle} from 'react-native'
import Drawer from 'react-native-drawer'
import { BlurView } from 'react-native-blur'
import {observer} from 'mobx-react'
import {observable} from 'mobx'

import UserStore from '../../store/user-store';
import ChapterService from '../../setting/chapter-service';

class BlurBg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewRef: props.viewRef?findNodeHandle(props.viewRef):null,
      showBlur:props.showBlur,
    };
  }

  // @observable _drawer._open

  setViewRef(open,view) {
    // if(this.state.viewRef)return;
    // console.log(this)
    if(open){
      this.setState({showBlur:true})
    this.setState({ viewRef: findNodeHandle(view) });
    }else{
      this.setState({showBlur:false})
    this.setState({ viewRef: null });
    }
  }

  blurView(){
    // console.log(this._drawer)
    // if(!this._drawer || !this._drawer._open)return null
    return <BlurView
          style={{
            position: "absolute",
            top: 0, left: 0, bottom: 0, right: 0, zIndex:1
          }}
          viewRef={this.state.viewRef}
          blurType="light"
          blurAmount={8}
          blurRadius={10}
          downsampleFactor={5}
          overlayColor={'rgba(255, 255, 255, .25)'}
        />
  }

  componentDidMount(){
    UserStore.setViewRef=this.setViewRef.bind(this)
  }

  render () {
    // UserStore.setViewRef=this.setViewRef.bind(this)
    // setTimeout(this.open,1000)
    // UserStore.setViewRef = this.setViewRef.bind(this);
    // if(ChapterService.routeData){this.hideNavBar = ChapterService.routeData.hideNavBar}
    // this.state.showBlur = this.props.showBlur

    return (
      <View  style={{position:"absolute",zIndex:1000,top:0,left:0, width:"100%",height:(this.state.showBlur?"100%":0)}}>

        {this.state.showBlur?this.blurView():null}

      </View>
    )
  }
}

export default BlurBg
