import { StyleSheet } from 'react-native';
const libStyleData = {
	alignCenter:{
		alignItems:"center"
	},
	justifyFlexEnd:{
		justifyContent:"flex-end"
	},
	justifyCenter:{
		justifyContent:"center"
	},
	justifySpaceAround:{
		justifyContent:"space-around"
	},
  opacity0:{
    opacity:0
  },
  opacity1:{
    opacity:1
  },
  bgNone:{
  	backgroundColor:"transparent"
  },
  absLayerTopRight:{
  	position:"absolute",
  	zIndex:10,
  	top:40,
    right:20
  },
  absLayerTopLeft:{
    position:"absolute",
    zIndex:10,
    top:0,
    left:0,
  },
  p0:{
    paddingTop:0,
    paddingBottom:0,
    paddingLeft:0,
    paddingRight:0,
  },
  m0:{
    marginTop:0,
    marginBottom:0,
    marginLeft:0,
    marginRight:0,
  }
}

export const libstyleData = libStyleData
export default StyleSheet.create(libStyleData);
