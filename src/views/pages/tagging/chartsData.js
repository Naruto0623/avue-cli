var colors = [
  "#409EFF",
  "#E6A23C",
  "#F56C6C",
  "#67C23A",
  "#909399",
  // "#002AFF",
  // "#20C0F4",
  // "#95F300",
  // "#04FDB8",
  // "#AF5AFF"
];

let testarr = [
  {
    "name": "张三",
    "value": 0,
    "label": {
      "position": "inside",
      fontSize: 26,
      color: "#fff"
      // backgroundColor: '#f00',
    },
    // symbol: 'rect',
    // symbol: 'roundRect',
    "symbolSize": 100,
    "lineStyle": { "color": "#E6A23C" },
    "itemStyle": { "borderColor": "#E6A23C", "color": "#E6A23C" },
    "children": [
      {
        "name": "时间",
        "value": 1,
        "children": [
          {
            "name": "1981年9月12日",
            "value": "出生",
            "children": [],
            "label": {
              "position": "right",
              // fontSize: 20,
              // backgroundColor: '#67C23A',
            },
            "symbolSize": 20,
            "lineStyle": { "color": "#67C23A" },
            "itemStyle": { "borderColor": "#67C23A", "color": "#67C23A" }
          },
          {
            "name": "2017年5月23日",
            "value": "因涉嫌非法吸收公众存款罪被刑事拘留",
            "label": {
              "position": "right",
              // fontSize: 20,
              // backgroundColor: '#67C23A',
            },
            "symbolSize": 20,
            "lineStyle": { "color": "#67C23A" },
            "itemStyle": { "borderColor": "#67C23A", "color": "#67C23A" }
          },
          {
            "name": "2017年6月15日",
            "value": "被取保候审",
            "label": {
              "position": "right",
              // fontSize: 20,
              // backgroundColor: '#67C23A',
            },
            "children": [],
            "symbolSize": 20,
            "lineStyle": { "color": "#67C23A" },
            "itemStyle": { "borderColor": "#67C23A", "color": "#67C23A" }
          },
          {
            "name": "2017年10月24日",
            "value": "被天津市和平区人民检察院取保候审",
            "symbolSize": 20,
            "lineStyle": { "color": "#67C23A" },
            "itemStyle": { "borderColor": "#67C23A", "color": "#67C23A" }
          },
          {
            "name": "2018年10月24日",
            "value": "被天津市和平区人民检察院监视居住",
            "children": [],
            "symbolSize": 20,
            "lineStyle": { "color": "#67C23A" },
            "itemStyle": { "borderColor": "#67C23A", "color": "#67C23A" }
          }
        ],
        "label": { "position": "inside", color: '#fff' },
        "symbolSize": 50,
        "lineStyle": { "color": "#67C23A" },
        "itemStyle": { "borderColor": "#67C23A", "color": "#67C23A" }
      },
      {
        "name": "地点",
        "value": 2,
        "children": [
          {
            "name": "和平路派出所",
            "value": "投案",
            "children": [],
            "label": {
              "position": "right",
              // fontSize: 20,
              // backgroundColor: '#67C23A',
            },
            "symbolSize": 20,
            "lineStyle": { "color": "#606266" },
            "itemStyle": { "borderColor": "#606266", "color": "#606266" }
          },
          {
            "name": "和平区第一看守所",
            "value": "羁押",
            "label": {
              "position": "right",
              // fontSize: 20,
              // backgroundColor: '#67C23A',
            },
            "symbolSize": 20,
            "lineStyle": { "color": "#606266" },
            "itemStyle": { "borderColor": "#606266", "color": "#606266" }
          },
        ],
        "label": { "position": "inside", color: '#fff' },
        "symbolSize": 50,
        "lineStyle": { "color": "#606266" },
        "itemStyle": { "borderColor": "#606266", "color": "#606266" }
      },
      {
        "name": "人物",
        "value": 3,
        "children": [
          {
            "name": "张三丰",
            "value": "老板",
            "children": [],
            "label": {
              "position": "right",
              // fontSize: 20,
              // backgroundColor: '#67C23A',
            },
            "symbolSize": 20,
            "lineStyle": { "color": "#E6A23C" },
            "itemStyle": { "borderColor": "#E6A23C", "color": "#E6A23C" }
          },
          {
            "name": "张俊秀",
            "value": "举报人",
            "children": [],
            "label": {
              "position": "right",
              // fontSize: 20,
              // backgroundColor: '#67C23A',
            },
            "symbolSize": 20,
            "lineStyle": { "color": "#cb9fef" },
            "itemStyle": { "borderColor": "#cb9fef", "color": "#cb9fef" }
          },
        ],
        "label": { "position": "inside", color: '#fff' },
        "symbolSize": 50,
        "lineStyle": { "color": "#E6A23C" },
        "itemStyle": { "borderColor": "#E6A23C", "color": "#E6A23C" }
      },
      {
        "name": "涉案金额",
        "value": 5,
        "children": [
          {
            "name": "330000元",
            "value": "吸收",
            "children": [],
            "label": {
              "position": "right",
              // fontSize: 20,
              // backgroundColor: '#67C23A',
            },
            "symbolSize": 20,
            "lineStyle": { "color": "#409EFF" },
            "itemStyle": { "borderColor": "#409EFF", "color": "#409EFF" }
          },
          {
            "name": "1400元",
            "value": "退赔",
            "children": [],
            "label": {
              "position": "right",
              // fontSize: 20,
              // backgroundColor: '#67C23A',
            },
            "symbolSize": 20,
            "lineStyle": { "color": "#409EFF" },
            "itemStyle": { "borderColor": "#409EFF", "color": "#409EFF" }
          },
          {
            "name": "13400元",
            "value": "吸收",
            "children": [],
            "label": {
              "position": "right",
              // fontSize: 20,
              // backgroundColor: '#67C23A',
            },
            "symbolSize": 20,
            "lineStyle": { "color": "#409EFF" },
            "itemStyle": { "borderColor": "#409EFF", "color": "#409EFF" }
          },
        ],
        "label": { "position": "inside", color: '#fff' },
        "symbolSize": 50,
        "lineStyle": { "color": "#409EFF" },
        "itemStyle": { "borderColor": "#409EFF", "color": "#409EFF" }
      },
      {
        "name": "证据",
        "value": 6,
        "children": [
          {
            "name": "书证",
            "value": "XX银行转账记录",
            "children": [],
            "label": {
              "position": "right",
              // fontSize: 20,
              // backgroundColor: '#67C23A',
            },
            "symbolSize": 20,
            "lineStyle": { "color": "#F56C6C" },
            "itemStyle": { "borderColor": "#F56C6C", "color": "#F56C6C" }
          },
          {
            "name": "物证",
            "value": "理财产品合同",
            "children": [],
            "label": {
              "position": "right",
              // fontSize: 20,
              // backgroundColor: '#67C23A',
            },
            "symbolSize": 20,
            "lineStyle": { "color": "#F56C6C" },
            "itemStyle": { "borderColor": "#F56C6C", "color": "#F56C6C" }
          },
        ],
        "label": { "position": "inside", color: '#fff' },
        "lineStyle": { "color": "#F56C6C" },
        "itemStyle": { "borderColor": "#F56C6C", "color": "#F56C6C" },
        "symbolSize": 50,
      },
    ],
  }
];

function getdata(){
  // let data = {
  //   name: "根节点1",
  //   value: 0,
  //   children: []
  // };
  // for (let i = 1; i <= 10; i++) {
  //   let obj = {
  //     name: "节点" + i,
  //     value: i,
  //     children: [],
  //   };
  //   for (let j = 1; j <= 5; j++) {
  //     let obj2 = {
  //       name: `节点1-${ i }-${ j }`,
  //       value: 1 + "-" + i + "-" + j,
  //     };
  //     if (j % 2 == 1) {
  //       obj2.children = []
  //       for (let k = 1; k <= 3; k++) {
  //         let obj3 = {
  //           name: `节点1-${ i }-${ j }-${ k }`,
  //           value: 1 + "-" + i + "-" + j + '-' + k,
  //         };
  //         obj2.children.push(obj3);
  //       }
  //     }
  //     obj.children.push(obj2);
  //   }
  //   data.children.push(obj);
  // }
  // let arr = [];
  // arr.push(data);
  // //
  // arr = handle(arr, 0);
  // console.log('最终', JSON.stringify(arr));
  // console.log(arr);
  return testarr;
}

function handle( data, index, color = '#409EFF' ){
  //index标识第几层
  return data.map(( item, index2 ) => {
    //计算出颜色
    if (index == 1) {
      color = colors.find(( item, eq ) => eq == index2 % 10);
    }
    // 设置节点大小
    if (index === 0 || index === 1) {
      item.label = {
        position: "inside",
        //   rotate: 0,
        //   borderRadius: "50%",
      }
    }
    // 设置label大小
    switch (index) {
      case 0:
        item.symbolSize = 70
        break;
      case 1:
        item.symbolSize = 50
        break;
      default:
        item.symbolSize = 10
        break;
    }
    // 设置线条颜色
    item.lineStyle = { color: color }

    if (item.children) {//存在子节点
      item.itemStyle = {
        borderColor: color,
        color: color
      };
      item.children = handle(item.children, index + 1, color)
    } else {//不存在
      item.itemStyle = {
        color: 'transparent',
        borderColor: color
      };
    }
    return item
  })
}

export default {
  echart1: {
    type: "tree",
    formatter: function ( name ){
      return name.value;
    },
    backgroundColor: "#eee",
    toolbox: { //工具栏
      show: true,
      iconStyle: {
        borderColor: "#03ceda"
      },
      feature: {
        restore: {}
      }
    },
    tooltip: {//提示框
      trigger: "item",
      triggerOn: "mousemove",
      backgroundColor: "rgba(1,70,86,1)",
      borderColor: "rgba(0,246,255,1)",
      borderWidth: 0.5,
      textStyle: {
        fontSize: 10,
        color: "#fff"
      }
    },
    series: [
      {
        type: "tree",
        hoverAnimation: true, //hover样式
        data: testarr,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        layout: "radial",
        symbol: "circle",
        symbolSize: 10,
        nodePadding: 20,
        animationDurationUpdate: 750,
        expandAndCollapse: true, //子树折叠和展开的交互，默认打开
        initialTreeDepth: 2,
        roam: true, //是否开启鼠标缩放和平移漫游。scale/move/true
        focusNodeAdjacency: true,
        itemStyle: {
          borderWidth: 1,
        },
        label: { //标签样式
          color: "#333",
          fontSize: 16,
          fontFamily: "SourceHanSansCN",
          position: "inside",
          rotate: 0,
        },
        lineStyle: {
          width: 1,
          curveness: 0.5,
        },
        textStyle: {
          fontSize: 10,
          color: "#fff"
        }
      }
    ]
  }
}
