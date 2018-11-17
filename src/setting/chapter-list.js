import { doorData } from "./door-data"
import { leftOrRightData } from "./left-or-right-data"
import { chartData } from "./chart-data"
import { aboutData } from "./about-data"
import color from "../style/color"

const clickNext = {
  text: [
    "(點我繼續)",
  ],
  style:{textAlign:'center',fontSize:12, color:color.secondary}
}

const chapterList = {
    0: {
        pages:{
            0:{
                tpl:"start",
                content: []
            }
        }
    },
    1: {
        name: "",

        pages: {
            0: {
                tpl:"textCenter",
                goName:"door",
                content: [[
                    { text: [
                        "您好，",
                        "#.name",
                        "，歡迎使用這個App"
                        ]
                    },
                    clickNext
                ],
                [
                  { text: [
                      "Why This App?"
                      ],
                      style:{textAlign:'center',fontSize:40, color:color.primary}
                  },
                  clickNext
                ],
                [
                  { text: [
                      "想寫 React-native，但又沒有產品方向"
                      ]
                  },
                    { text: [
                        "因此做了這個 Demo App",
                            ]
                    },
                    clickNext
                ],
                [
                    { text: [
                        "請無需拘束",
                            ]
                    },
                    clickNext
                ],
                ]
            },
            1: {
                tpl:"scrollContent",
                content: [
                    { text: [
                        "文字方塊111111111111111111111111111111111111111111111111111111111111"
                        ]
                    },{ text: [
                        "文字方塊22222222222222222222222222222222222222222222222222222222222"
                        ]
                    }
                ],
                pass:true
            },
        }
    },
    door:doorData,
    leftOrRight:leftOrRightData,
    chart:Object.assign({},chartData),
    about:aboutData,
}

export default chapterList;
