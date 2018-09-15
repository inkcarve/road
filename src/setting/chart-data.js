import VLine from "../component/victory-chart/v-line"
import VBar from "../component/victory-chart/v-bar"
import VPie from "../component/victory-chart/v-pie"
import VPolarArea from "../component/victory-chart/v-polar-area"
import { itemWidth, chartStyleData, primaryColor, strongColor, lineStyle, barStyle, pieStyle, polarAreaStyle } from "../style/chart-style"

// const Img = require('../image/supergirl-season-3-confirmed.jpg')
const Img = require('../image/garfield.png')
const _doorLeftRight = require('../image/door-left-right.jpg')

const animalData = [
      {x: "cats", y: 1},
      {x: "dogs", y: 5},
      {x: "birds", y: 3},
      {x: "fish", y: 3},
      {x: "frogs", y: 1}
]



let maxAnimal = Math.max.apply(Math,animalData.map((o)=>{return o.y}))
console.log("maxAnimal: "+maxAnimal);

barStyle.labels.fill = (d) => {
              console.log("barStyle");
              console.log(this);
              return d.y === maxAnimal ? strongColor : primaryColor
}

console.log(barStyle.labels.fill)

const vLineSetting= {
        // height:200,
        lineSetting:{
            width:itemWidth,
            interpolation:"natural",
            style:lineStyle,
            labels:(d) => {if(d.x>0)return d.x},
            responsive:true,
            standalone:true,
            animate:{
              duration: 2000,
              onLoad: { duration: 1000 }
            },
        },
        chartSetting:{
            width:itemWidth,
            responsive:true,
            
            standalone:true,
            domainPadding:{x: [0, 20],y: [0, 40]}
        },
        xAxisSetting:{
            label:"card"
        },
        yAxisSetting:{
            label:"Time (100ms)"
        }
}

export const chartList = [{
        title:"Polar Area Chart",
        titleBoxStyle:{
            // backgroundColor: 'rgba(255, 255, 255, 0.8),'
        },
        goName:"chart",
    data:animalData,
    chartComponent:VPolarArea,

    setting:{

        areaSetting:{
            height:(chartStyleData.carouselBox.height) - 100,
        width:itemWidth*0.85,
        // interpolation:"catmullRom",
        style:polarAreaStyle,
        // labels:(d) => d.x,
        // responsive:true,
        // standalone:true,
        animate:{
            duration: 2000,
            onLoad: { duration: 1000 }
        },
        },
        axisSetting:{
        style:{
            axis: {stroke: "#777777"},
            // grid: {stroke: (t) => t > 0.5 ? "red" : "blue"},
            tickLabels: {fontSize: 15, padding: 15}
        }
    },
        // innerRadius:itemWidth*0.85*0.2 ,
        // colorScale:["tomato", "orange", "gold", "cyan", "navy" ],
    },
    

},
    {
        title:"Line Chart",
        info:"",
        titleBoxStyle:{
            // backgroundColor: 'rgba(255, 255, 255, 0.8)'
        },
        goName:"leftOrRight",
        data:[
        { x: 0, y: 0 },
      { x: 1, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 5 },
      { x: 4, y: 4 },
      { x: 5, y: 6 }
    ],
    chartComponent:VLine,
    chartType:"VLine",
    style:lineStyle,
    setting:vLineSetting,

},{
        title:"Pie Chart",
        titleBoxStyle:{
            // backgroundColor: 'rgba(255, 255, 255, 0.8),'
        },
        goName:"chart",
    data:animalData,
    chartComponent:VPie,

    setting:{
        height:(chartStyleData.carouselBox.height) - 100,
        width:itemWidth*0.85,
        interpolation:"natural",
        style:pieStyle,
        labels:(d) => d.x,
        responsive:true,
        standalone:true,
        animate:{
            duration: 2000,
            onLoad: { duration: 1000 }
        },
        innerRadius:itemWidth*0.85*0.2 ,
        colorScale:["tomato", "orange", "gold", "cyan", "navy" ],
    },

},
]

//** chart for chapter-list
export const chartData = {
    pages:{
            "0":{
                tpl:"chart",
                chartList:chartList,
                content:{
                    title:"Victory Chart Show",
                    subTitle:"*左右滑動來切換前往的項目"
                }
            }
    }
}

export const leftOrRight_ChartSetting = [
    {
        title:"Line Chart",
        info:"",
        titleBoxStyle:{
            // backgroundColor: 'rgba(255, 255, 255, 0.8)'
        },
        goName:"leftOrRight",
        data:[
      { x: 1, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 5 },
      { x: 4, y: 4 },
      { x: 5, y: 6 }
    ],
    chartComponent:VLine,
    chartType:"VLine",
    style:lineStyle,
    setting:vLineSetting,
}]