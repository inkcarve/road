import { AsyncStorage, Dimensions } from 'react-native'
import { observable } from 'mobx'
import projectSetting from '../setting/project-setting'

const storageKey = projectSetting.storageKey;

class UserStore {
  @observable userName: string;
  @observable userData={}
  @observable chapterData={}
  @observable winSize
  @observable blurViewRef

  load = async ()=>{
    this.winSize = Dimensions.get('window');
  	// console.warn("userStory load")
  	// if(this.userName && this.userData)return{userName:this.userName, userName:this.userData}
    let data = await AsyncStorage.getItem(storageKey);
// console.warn("userStory load data")
// console.warn(data)
    if(!data)return {};
    data = await JSON.parse(data);
    this.storageData = await data;
    await Object.assign(this,data);
    // if(data.userName)this.userName = data.userName;
    // if(data.userData)this.userData = data.userData;
    return data;
  }

  set = async (data)=>{
  	// console.warn("userStory set")
  	data.time = (new Date()).getTime();
  	// console.warn(data)
  	Object.assign(this,data);
  	await AsyncStorage.setItem(storageKey, JSON.stringify({ userName:this.userName, userData:this.userData, chapterData:this.chapterData}));
    // console.log(AsyncStorage.getItem(storageKey))
  }

  // getAll = ()=>{
  // 	// console.log({userName:this.userName, userData:this.userData})
  // 	return {userName:this.userName, userData:this.userData}
  // }

  remove = async () => {
    await AsyncStorage.removeItem(storageKey);
    this.userName=""
    // this.chapterData=null
    this.userData={}
  };

}

export default new UserStore();