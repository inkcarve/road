// const Img = require('../image/supergirl-season-3-confirmed.jpg')
const Img = require('../image/garfield.png')
const _doorLeftRight = require('../image/door-left-right.jpg')

import VLine from "../component/victory-chart/v-line"
import VBar from "../component/victory-chart/v-bar"
import VPie from "../component/victory-chart/v-pie"
import VPolarArea from "../component/victory-chart/v-polar-area"
import { itemWidth, chartStyleData, primaryColor, strongColor, lineStyle, barStyle, pieStyle, polarAreaStyle } from "../style/chart-style"

export const cardList = [
                      {
                        text: "Card One",
                        name: "3 Arrow",
                        hint: 'vector direction',
                        image: require('../image/left-or-right/3-arrow.jpg'),
                        value: 'r',
                        show: true,
                      },
                      {
                        text: "Card Two",
                        name: "Hand",
                        hint: "Hand",
                        image: require('../image/left-or-right/left-hand.jpg'),
                        value: 'l'
                      },
                      {
                        text: "Card Three",
                        name: "Water Fall",
                        hint: "Wave",
                        image: require('../image/left-or-right/water-fall.jpg'),
                        value: 'l'
                      },
                      {
                        text: "Card Four",
                        name: "Flying To",
                        hint: "Flying To",
                        image: require('../image/left-or-right/air-plane.jpg'),
                        value: 'r'
                      }
                ]

export const leftOrRightData = {
        pages:{
            "0":{
                tpl:"deckSwiper",
                overlayer:[{ text: [
                        "左滑，右滑，選擇正確的方向"
                        ]
                    },{ text: [
                        "點擊開始"
                        ]
                    }],
                cards:cardList,
            }
        }
}

