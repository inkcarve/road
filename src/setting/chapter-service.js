import { observable } from 'mobx';
import {Actions} from 'react-native-router-flux'

//** import custom
import UserStore from '../store/user-store'
import chapterList from './chapter-list'
import routeList from '../router/router-list'


class ChapterService {
    // @observable userData: object;

    // @observable chapterList:object
    ids={}
    routerData ={}
    chapterData ={}
    drawerIconToggle(){
        //will update function from DrawerIcon Component
    }

    constructor(props) {
      this.chapterList=chapterList
      // this.ids={}
    }

    async reset (ids){
        console.log('reset ChapterService')
        // this.chapterList = data;
        this.ids = { id:0, secId:0 }
        let setChapterData = await this.setChapterData()
        this.setUserData()
    }

    setUserData(){
        UserStore.set({chapterData:{ids:this.ids}})
    }

    formatIds(data){
        return {id:data.id.toString(),secId:data.secId.toString()}
    }

    getId(add){
        console.log("getId-----")
        console.log(this.ids)
        if(!add)add=0;
        let id = this.ids.id;
        let secId = this.ids.secId +add;

        let nextChapter = this.chapterList[id].pages[secId];
        // console.log()
        // let ids = {id:id,secId:secId};
        console.log(nextChapter)
        if(nextChapter!==undefined){
            return {
                ids:{id:id,secId:secId},
                tpl:nextChapter.tpl
            }
        }
        id++;
        secId=0;
        nextChapter = this.chapterList[id].pages[secId];
        // ids = id:id,secId:secId;
        if(!!nextChapter!==undefined){
            return {
                ids:{id:id,secId:secId},
                tpl:nextChapter.tpl
            }
        }
        return false;
    }

    actions(nextData){
        console.log('action')
        console.log(this)
        if(!nextData)nextData=this.chapterData;
        console.log(nextData)
        Actions[nextData.tpl](this.ids);
        UserStore.set({chapterData:{ids:this.ids}})
    }

    async getChapterNow(ids){
        try{
            return this.chapterList[ids.id].pages[ids.secId]
        }
        catch(e){
            console.error(e)
            return false;
        }
    }

    async setChapterData(ids){
        if(!ids)ids=this.ids;
        console.log('setChapterData')
        let chapterData = await this.getChapterNow(ids)
        console.log(chapterData)
        if(!chapterData)return false
        console.log(this)
        this.chapterData = chapterData
        this.routerData = await routeList[chapterData.tpl]
        this.drawerIconToggle()
        console.log(this.routerData)
        return chapterData
    }

    async turnTo(ids){
         console.log(ids)
        let setChapterData = await this.setChapterData(ids)
        this.ids = await ids
        this.actions();
    }

    async go (data){
        let add = 1
        if(data && data.add!==undefined)add = data.add
        console.log(this)
        let nextData = await this.getId(add)
        if(!nextData)return false;
        this.ids = nextData.ids
        let setChapterData = await this.setChapterData(nextData.ids)
        if(!setChapterData)return false;
        if(setChapterData.pass){this.go();return}
        // Actions[nextData.tpl](nextData.ids);
        this.actions();
    }

    async goByName(name){
        this.turnTo({id:name,secId:0})
    }



    getContent(data){
        console.log("getContent----")
        console.log(this)
        return this.chapterData
    }

    async goIndex(){
        await this.clearData()
        await this.turnTo({id:0,secId:0})
        // this.reset()
    }

    async init(){
        await UserStore.load();
        if(!UserStore.chapterData.ids){
          this.reset()
        }else{
          this.turnTo(UserStore.chapterData.ids)
        }
    }

    async clearData(){
        await UserStore.remove();
        // this.goIndex()
    }
}

export default new ChapterService();