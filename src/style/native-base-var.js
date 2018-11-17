import {Platform} from 'react-native'
import varDefault from '../../node_modules/native-base/src/theme/variables/platform';
import color from './color'

const platform = Platform.OS;

let nativeBaseVar = {
	iconFamily:'Ionicons' ,
	toolbarDefaultBg:'transparent' ,
	footerDefaultBg:'transparent' ,
	inputSuccessBorderColor:color.success ,
	inputErrorBorderColor:color.error ,
	// "btnSuccessBg": color.success,
	brandPrimary:color.primary,
	"brandSuccess": color.success,
	"brandDanger": color.error,
  	"brandSuccessColor": "#fff",
  	textColor:color.text,
		tabBgColor:"#ffffff",
		topTabBarTextColor:color.secondary,
		// topTabBarBorderColor:color.primary,
		topTabBarActiveBorderColor:color.primary,
		topTabBarActiveTextColor:color.primary,
		tabDefaultBg:'#ffffff',

}

nativeBaseVar = Object.assign(varDefault,nativeBaseVar)

export default nativeBaseVar
