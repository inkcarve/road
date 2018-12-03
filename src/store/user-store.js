import { AsyncStorage, Dimensions } from 'react-native'
import { observable, action } from 'mobx'
import projectSetting from '../setting/project-setting'

const storageKey = projectSetting.storageKey;

class UserStore {
  @observable userName: string;
  @observable userData={}
  @observable chapterData={}
  @observable winSize
  @observable blurViewRef
  @observable loading:booleam = true

  load = async ()=>{
    this.winSize = Dimensions.get('window');
    let data = await AsyncStorage.getItem(storageKey);
    if(!data)return {};
    data = await JSON.parse(data);
    this.storageData = await data;
    await Object.assign(this,data);
    return data;
  }

  set = async (data)=>{
  	data.time = (new Date()).getTime();
  	Object.assign(this,data);
  	await AsyncStorage.setItem(storageKey, JSON.stringify({ userName:this.userName, userData:this.userData, chapterData:this.chapterData}));
  }

  @action setLoading = (v:booleam)=>{
    this.loading = v;
  }

  remove = async () => {
    await AsyncStorage.removeItem(storageKey);
    this.userName=""
    this.userData={}
  };

}

export default new UserStore();
