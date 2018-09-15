import Start from '../component/start/start';
import TextCenter from '../component/page/page-text-center';
import scrollContent from '../component/page/page-scroll-content';
import deckSwiper from '../component/page/page-deck-swiper';
import door from '../component/page/page-door';
import chart from '../component/page/page-chart';

let RouterList = {
   start:{
   name:"start",
   component:Start,
   path:"start/home/",
   emptyHeader:false,
   hideNavBar:true,
   hideCustomNav:true,
},
textCenter:{
   name:"textCenter",
   component:TextCenter,
   path:"ch/:id/:secId",
   emptyHeader:true,
   hideNavBar:true,
},
scrollContent:{
   name:"scrollContent",
   component:scrollContent,
   path:"ch/:id/:secId",
   emptyHeader:true,
   hideNavBar:true,
},
deckSwiper:{
   name:"deckSwiper",
   component:deckSwiper,
   path:"ch/:id/:secId",
   emptyHeader:true,
   hideNavBar:true,
},
door:{
   name:"door",
   component:door,
   path:"door",
   emptyHeader:true,
   hideNavBar:true,
},
chart:{
   name:"chart",
   component:chart,
   path:"chart",
   emptyHeader:true,
   hideNavBar:true,
},
// {
//   name:"1st"
// }
}

export default RouterList;
