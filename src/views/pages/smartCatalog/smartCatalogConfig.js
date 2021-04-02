export default {
  tabData: ['全部', '起诉意见书', '证据', '犯罪嫌疑人'],
  // 树节点
  treeData: {
    '全部': [
      {
        id: 1,
        label: '葛某某危险驾驶案-一审公诉案件（共14页）',
        icon: 'el-icon-message',
        indexNum: 1,
        isTitle: true,
        style: {
          color: '#E6A23C',
          'font-size': '22px'
        },
        children: [
          {
            id: 4,
            label: '起诉意见书（共3页）',
            icon: '',
            indexNum: 1,
            isTitle: true,
            children: [
              {
                id: 9,
                label: '起诉意见书第1页',
                icon: '',
                indexNum: 1,
                children: [],

              },
              {
                id: 10,
                label: '起诉意见书第2页',
                icon: '',
                indexNum: 2,
                children: [],

              },
              {
                id: 11,
                label: '起诉意见书第3页',
                icon: '',
                indexNum: 3,
                children: []
              }
            ]
          },
          {
            id: 2,
            label: '诉讼文书卷（共4页）',
            icon: '',
            indexNum: 1,
            isTitle: true,
            children: [
              {
                id: 5,
                label: '封面',
                icon: '',
                indexNum: 4,
                children: []
              },
              {
                id: 6,
                label: '目录',
                icon: '',
                indexNum: 5,
                children: []
              },
              {
                id: 12,
                label: '受、立案文书（共2页）',
                icon: '',
                indexNum: 6,
                isTitle: true,
                children: [
                  {
                    id: 15,
                    label: '受案登记表',
                    icon: '',
                    indexNum: 7,
                    children: []
                  },
                  {
                    id: 16,
                    label: '立案决定书',
                    icon: '',
                    indexNum: 8,
                    children: []
                  }
                ]
              },
            ]
          },
          {
            id: 3,
            label: '证据材料卷（共5页）',
            icon: '',
            indexNum: 1,
            isTitle: true,
            children: [
              {
                id: 7,
                label: '封面',
                icon: '',
                indexNum: 9,
              },
              {
                id: 8,
                label: '目录',
                icon: '',
                indexNum: 10,
              },
              {
                id: 31,
                label: '犯罪嫌疑人基本情况（共3页）',
                icon: '',
                indexNum: 1,
                isTitle: true,
                children: [
                  {
                    id: 71,
                    label: '嫌疑人基本信息',
                    icon: '',
                    indexNum: 11,
                  },
                  {
                    id: 80,
                    label: '户籍证明',
                    icon: '',
                    indexNum: 12,
                  },
                  {
                    id: 81,
                    label: '部库信息查询',
                    icon: '',
                    indexNum: 1,
                  }
                ]
              }
            ]
          },
          /*{
            id: 30,
            label: '其他（共2页）',
            icon: '',
            indexNum: 1,
            isTitle: true,
            children: [
              {
                id: 70,
                label: '补充材料',
                icon: '',
                indexNum: 13,
              },
              {
                id: 80,
                label: '立功表现',
                icon: '',
                indexNum: 14,
              },
            ]
          }*/
        ]
      },
    ],
    '起诉书': [
      {
        id: 9,
        label: '起诉意见书第1页',
        icon: '',
        indexNum: 1,
        children: [],

      },
      {
        id: 10,
        label: '起诉意见书第2页',
        icon: '',
        indexNum: 2,
        children: [],

      },
      {
        id: 10,
        label: '起诉意见书第3页',
        icon: '',
        indexNum: 3,
        children: []
      }
    ],
    '证据': [
      {
        id: 3,
        label: '证据材料卷（共5页）',
        icon: '',
        indexNum: 1,
        isTitle: true,
        children: [
          {
            id: 7,
            label: '封面',
            icon: '',
            indexNum: 9,
          },
          {
            id: 8,
            label: '目录',
            icon: '',
            indexNum: 10,
          },
          {
            id: 31,
            label: '犯罪嫌疑人基本情况（共3页）',
            icon: '',
            indexNum: 1,
            isTitle: true,
            children: [
              {
                id: 71,
                label: '嫌疑人基本信息',
                icon: '',
                indexNum: 11,
              },
              {
                id: 80,
                label: '户籍证明',
                icon: '',
                indexNum: 12,
              },
              {
                id: 81,
                label: '部库信息查询',
                icon: '',
                indexNum: 1,
              }
            ]
          }
        ]
      },
    ],
    '判决书': [
      {
        id: 31,
        label: '犯罪嫌疑人基本情况（共3页）',
        icon: '',
        indexNum: 1,
        isTitle: true,
        children: [
          {
            id: 71,
            label: '嫌疑人基本信息',
            icon: '',
            indexNum: 11,
          },
          {
            id: 80,
            label: '户籍证明',
            icon: '',
            indexNum: 12,
          },
          {
            id: 81,
            label: '部库信息查询',
            icon: '',
            indexNum: 1,
          }
        ]
      }
    ]
  },
  // 表头
  columnData: [
    {
      label: '文件名称',
      prop: 'name',
    },
    {
      label: '失败原因',
      prop: 'reason',
    },
    {
      label: '操作建议',
      prop: 'address',
    },
  ],
  // 错误报告数据
  errTableData: [
    {
      reason: '不符合识别标准',
      name: '卷宗1',
      address: '文件过于模糊，请联系案件移交部门重新扫描'
    },
    {
      reason: '不符合识别标准',
      name: '卷宗13',
      address: '文件过于模糊，请联系案件移交部门重新扫描'
    },
    {
      reason: '不符合识别标准',
      name: '卷宗20',
      address: '文件过于模糊，请联系案件移交部门重新扫描'
    },
    {
      reason: '不符合识别标准',
      name: '卷宗22',
      address: '文件过于模糊，请联系案件移交部门重新扫描'
    }
  ],
  // 案件信息
  caseInfo: {
    title: '张三涉嫌非法吸收公众存款罪',
    describe: `犯罪嫌疑人张三在XXX公司担任团队经理时，带领团队非法吸收公众存款，
  目前已有55名投资人报案，经济损失4500万余元，犯罪嫌疑人张三涉嫌非法吸收公众存款罪`
  },
  // 树节点对应跳转预览图片
  nodeId: {
    9: 'img1',
    10: 'img2',
    11: 'img3',
    12: 'img4',
    13: 'img5',
    31: 'img6',
    7: 'img1',
    8: 'img2',
    70: 'img3',
    80: 'img4',
  },
}
