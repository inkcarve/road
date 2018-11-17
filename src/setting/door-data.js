const _doorLeftRight = require('../image/door-left-right.jpg')

export const doorList = [
    {
        title:"Left / Right",
        image:require('../image/direction-road-maze.jpg'),
        imageResizeMode:"cover",
        boxBg:require('../image/emile-seguin-209058-unsplash-center.jpg'),
        titleBoxStyle:{
            // backgroundColor: 'rgba(255, 255, 255, 0.8)',
        },
        hintStyle:{},
        titleStyle:{
            color:"#333",
            textAlign:"center",
        },
        hintStyle:{
            // backgroundColor: 'rgba(255, 255, 255, 0.8)',
            color:"#555"
        },
        goName:"leftOrRight"
},{
        title:"chart",
        image:require('../image/rawpixel-790897-unsplash.jpg'),
        imageResizeMode:"cover",
        boxBg:require('../image/door-wall-plant-bg.jpg'),
        titleStyle:{
            // backgroundColor: 'rgba(255, 255, 255, 0.8)',
            color:"#333",
            textAlign:"center",
        },
        hintStyle:{
            // backgroundColor: 'rgba(255, 255, 255, 0.8)',
            color:"#555"
        },
        goName:"chart"
},
{
        title:"About",
        image:require('../image/door-about-small-2.jpg'),
        imageResizeMode:"cover",
        boxBg:require('../image/door-leaf-bg.jpg'),
        titleStyle:{
            // backgroundColor: 'rgba(255, 255, 255, 0.8)',
            color:"#333",
            textAlign:"center",
        },
        hintStyle:{
            // backgroundColor: 'rgba(255, 255, 255, 0.8)',
            color:"#555"
        },
        goName:"about"
},

]

export const doorData = {
    pages:{
        "0":{
            tpl:"door",
            doorList:doorList
        }
    }
}
