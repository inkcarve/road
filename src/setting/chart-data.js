import VLine from "../component/victory-chart/v-line"
import VBar from "../component/victory-chart/v-bar"
import VPie from "../component/victory-chart/v-pie"
import VPolarArea from "../component/victory-chart/v-polar-area"
import { itemWidth, chartStyleData, primaryColor, strongColor, lineStyle, barStyle, pieStyle, polarAreaStyle, barStyleHorizontal } from "../style/chart-style"

// const Img = require('../image/supergirl-season-3-confirmed.jpg')
const Img = require('../image/garfield.png')
const _doorLeftRight = require('../image/door-left-right.jpg')


const personalTalentData = [
    { x: "Smart", y: 5 },
    { x: "Art", y: 7 },
    { x: "Strive", y: 8 },
    { x: "Memory", y: 3 },
    { x: "Presentation", y: 5 }
]

const aWeekUseData = [
    { x: "Sleep", y: 49 },
    { x: "Working", y: 40 },
    { x: "Learn somethimg", y: 15 },
    { x: "XD", y: 36 },
    { x: "Other", y: 28 }
]

const skillData = [
    { x: 'Angular', y: 50 },
    { x: 'Angularjs', y: 70 },
    { x: 'React', y: 40 },
    { x: 'Vue', y: 50 },
    { x: 'RN', y: 40 },
    { x: 'Jquery', y: 70 },
    { x: 'NodeJs', y: 20 }
]



// let maxAnimal = Math.max.apply(Math,animalData.map((o)=>{return o.y}))
// console.log("maxAnimal: "+maxAnimal);

// barStyle.labels.fill = (d) => {
//               console.log("barStyle");
//               console.log(this);
//               return d.y === maxAnimal ? strongColor : primaryColor
// }

// console.log(barStyle.labels.fill)

const vLineSetting = {
    // height:200,
    lineSetting: {
        width: itemWidth,
        interpolation: "natural",
        style: lineStyle,
        labels: (d) => { if (d.x > 0) return d.x },
        responsive: true,
        // standalone:true,
        animate: {
            // duration: 1200,
            // onLoad: { duration: 1000 }
        },
    },
    chartSetting: {
        width: itemWidth,
        responsive: true,

        standalone: true,
        domainPadding: { x: [0, 20], y: [0, 40] }
    },
    xAxisSetting: {
        label: "card"
    },
    yAxisSetting: {
        label: "Time (100ms)"
    }
}

export const chartList = [{
        title: "Personal Ability",
        titleBoxStyle: {
            // backgroundColor: 'rgba(255, 255, 255, 0.8),'
        },
        goName: "chart",
        data: personalTalentData,
        chartComponent: VPolarArea,

        setting: {

            areaSetting: {
                height: (chartStyleData.carouselBox.height) - 100,
                width: itemWidth * 0.85,
                // interpolation:"catmullRom",
                style: polarAreaStyle,
                // labels:(d) => d.x,
                // responsive:true,
                // standalone:true,
                animate: {
                    // duration: 1200,
                    // easing: "bounce",
                    // onLoad: { duration: 1000 }
                },
            },
            axisSetting: {
                style: {
                    axis: { stroke: "#777777" },
                    // grid: {stroke: (t) => t > 0.5 ? "red" : "blue"},
                    tickLabels: { fontSize: 10, padding: 15 }
                }
            },
            dependentAxisSetting:{
                domain:[0,10],
                style:{axis: { stroke: "none" }}
            }
            // innerRadius:itemWidth*0.85*0.2 ,
            // colorScale:["tomato", "orange", "gold", "cyan", "navy" ],
        },


    },
    {
        title: "Coding Growing",
        info: "",
        titleBoxStyle: {
            // backgroundColor: 'rgba(255, 255, 255, 0.8)'
        },
        goName: "leftOrRight",
        data: [
            { x: 0, y: 2 },
            { x: 1, y: 3 },
            { x: 2, y: 2 },
            { x: 3, y: 3 },
            { x: 4, y: 4 },
            { x: 5, y: 6 },
            { x: 6, y: 8 },
            { x: 7, y: 12 },
            { x: 8, y: 16 },
            { x: 9, y: 22 },
            { x: 10, y: 30 }
        ],
        chartComponent: VLine,
        chartType: "VLine",
        style: lineStyle,
        setting: {
            ...vLineSetting,
            xAxisSetting: {
                label: "month"
            },
            yAxisSetting: {
                label: "growing ?",

            }
        }

    }, {
        title: "What I do in a Week",
        titleBoxStyle: {
            // backgroundColor: 'rgba(255, 255, 255, 0.8),'
        },
        goName: "chart",
        data: aWeekUseData,
        chartComponent: VPie,

        setting: {
            height: (chartStyleData.carouselBox.height) - 100,
            width: itemWidth * 0.85,
            interpolation: "natural",
            style: pieStyle,
            labels: (d) => d.x,
            responsive: true,
            standalone: true,
            animate: {
                // duration: 1200,
                // onLoad: { duration: 1000 }
            },
            innerRadius: 0,
            colorScale: ["tomato", "orange", "gold", "cyan", "navy"],
        },
    },
    {
        title: "Skill Chart",
        titleBoxStyle: {
            // backgroundColor: 'rgba(255, 255, 255, 0.8),'
        },
        goName: "chart",
        data: skillData,
        chartComponent: VBar,
        
        setting: {
            barSetting: {
                width: itemWidth-90,
                interpolation: "natural",
                style: barStyleHorizontal,
                // labels:(d) => {if(d.x>0)return d.x},
                responsive: true,
                // standalone:true,
                animate: {
                    // duration: 1200,
                    // onLoad: { duration: 1000 }
                },
                horizontal: true,
            },
            chartSetting: {
                width: itemWidth,
                responsive: true,
                padding:{left:90},
                standalone: true,
                // domainPadding: { x: [100, 0], y: [100, 40] }
            },
        },
    },
]

//** chart for chapter-list
export const chartData = {
    pages: {
        "0": {
            tpl: "chart",
            chartList: chartList,
            content: {
                title: "Victory Chart Show",
                subTitle: "*Tap to show",
                activeSections: [],
            }
        }
    }
}

export const leftOrRight_ChartSetting = [{
    title: "Line Chart",
    info: "",
    titleBoxStyle: {
        // backgroundColor: 'rgba(255, 255, 255, 0.8)'
    },
    goName: "leftOrRight",
    data: [
        { x: 1, y: 2 },
        { x: 2, y: 3 },
        { x: 3, y: 5 },
        { x: 4, y: 4 },
        { x: 5, y: 6 }
    ],
    chartComponent: VLine,
    chartType: "VLine",
    style: lineStyle,
    setting: vLineSetting,
}]