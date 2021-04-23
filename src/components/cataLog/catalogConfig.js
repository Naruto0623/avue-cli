export default {
  tabData: ['全部', '起诉意见书', '证据卷', '犯罪嫌疑人'],
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
            label: '证据卷（共5页）',
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
                ]
              },
              {
                id: 31,
                label: '物证',
                icon: '',
                indexNum: 1,
                isTitle: true,
                children: [
                  {
                    id: 71,
                    label: '物证清单',
                    icon: '',
                    indexNum: 11,
                  },
                  {
                    id: 80,
                    label: '物证图片',
                    icon: '',
                    indexNum: 12,
                  },
                ]
              },
              {
                id: 31,
                label: '书证',
                icon: '',
                indexNum: 1,
                isTitle: true,
                children: [
                  {
                    id: 71,
                    label: '书证一',
                    icon: '',
                    indexNum: 11,
                  },
                  {
                    id: 80,
                    label: '书证二',
                    icon: '',
                    indexNum: 12,
                  },
                ]
              },
              {
                id: 31,
                label: '证人证言',
                icon: '',
                indexNum: 1,
                isTitle: true,
                children: [
                  {
                    id: 71,
                    label: '王二证言',
                    icon: '',
                    indexNum: 11,
                  },
                  {
                    id: 80,
                    label: '李三证言',
                    icon: '',
                    indexNum: 12,
                  },
                ]
              },
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
    '起诉意见书': [
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
    '证据卷': [
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
        ]
      },
      {
        id: 31,
        label: '物证',
        icon: '',
        indexNum: 1,
        isTitle: true,
        children: [
          {
            id: 71,
            label: '物证清单',
            icon: '',
            indexNum: 11,
          },
          {
            id: 80,
            label: '物证图片',
            icon: '',
            indexNum: 12,
          },
        ]
      },
      {
        id: 31,
        label: '书证',
        icon: '',
        indexNum: 1,
        isTitle: true,
        children: [
          {
            id: 71,
            label: '书证一',
            icon: '',
            indexNum: 11,
          },
          {
            id: 80,
            label: '书证二',
            icon: '',
            indexNum: 12,
          },
        ]
      },
      {
        id: 31,
        label: '证人证言',
        icon: '',
        indexNum: 1,
        isTitle: true,
        children: [
          {
            id: 71,
            label: '王二证言',
            icon: '',
            indexNum: 11,
          },
          {
            id: 80,
            label: '李三证言',
            icon: '',
            indexNum: 12,
          },
        ]
      },
    ],
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
  // 书签
  bookTagList: [
    {
      type: '起诉意见书',
      title: '被告人蒋某某在天津市河东区某大厦',
      page: '2页'
    },
    {
      type: '起诉意见书',
      title: '认定上述事实的证据如下，1、物证：手机',
      page: '2页'
    },
    {
      type: '物证卷',
      title: '一氧化氮，手机等',
      page: '2页'
    }
  ]
}
