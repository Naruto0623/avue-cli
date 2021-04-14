export default {
  // 受理标准
  standardList: [
    {
      id: 1,
      label: '满足所有条件',
      children: [
        {
          id: 7,
          label: '属于本院辖管',
          isRequired: true,
        },
        {
          id: 8,
          label: '犯罪嫌疑人在案',
          isRequired: true,
        },
        {
          id: 7,
          label: '《（不）起诉意见书》一式四份',
          isRequired: true,
        },
        {
          id: 8,
          label: '案卷材料齐备、装订规范',
          isRequired: true,
        },
        {
          id: 7,
          label: '在规定期限内移送案件',
          isRequired: true,
        },
        {
          id: 8,
          label: '嫌疑人被羁押的，《换押证》齐备',
          isRequired: false,
        },
        {
          id: 8,
          label: '全程同步录音、录像资料复制件齐备',
          isRequired: false,
        },
        {
          id: 8,
          label: '涉案款物随案移送且单证相符',
          isRequired: false,
        },
        {
          id: 8,
          label: '不宜移送的证据清单、复制件、照片或其他证明文件已随案移送',
          isRequired: false,
        },
      ]
    }
  ],
  // 案件基本信息表单
  option1: {
    column: [
      {
        type: 'input',
        label: '案件名称',
        // tip: '这是信息提示',
        suffixIcon: 'iconfont icon-OCR7',
        // prefixIcon: 'el-icon-tickets',
        span: 24,
        display: true,
        prop: 'name',
        rules: [
          {
            required: false,
            message: '案件名称必须填写'
          }
        ],
        required: null,
        showWordLimit: true
      },
      {
        type: 'input',
        label: '移诉罪民',
        suffixIcon: 'el-icon-view',
        span: 24,
        display: true,
        prop: 'name1',
        required: null,
        rules: [
          {
            required: null,
            message: '移诉罪民必须填写'
          }
        ]
      },
      {
        type: 'input',
        label: '侦（调）查机关',
        suffixIcon: 'el-icon-view',
        span: 24,
        display: true,
        prop: 'name2',
        rules: [
          {
            required: null,
            message: '侦（调）查机关必须填写'
          }
        ],
        readonly: false,
        showWordLimit: true,
        required: true
      },
      {
        type: 'input',
        label: '侦（调）查机关类别',
        suffixIcon: 'el-icon-view',
        span: 24,
        display: true,
        prop: 'name3',
        rules: [
          {
            required: null,
            message: '侦（调）查机关类别必须填写'
          }
        ],
        required: true
      },
      {
        type: 'input',
        label: '侦（调）查机关案号',
        suffixIcon: 'el-icon-view',
        span: 24,
        display: true,
        prop: 'name4',
        showWordLimit: true,
        required: null,
        rules: [
          {
            required: null,
            message: '侦（调）查机关案号必须填写'
          }
        ]
      },
      {
        type: 'input',
        label: '移送单位',
        span: 24,
        display: true,
        prop: 'name5',
        rules: [
          {
            required: null,
            message: '移送单位必须填写'
          }
        ],
        required: true
      },
      {
        type: 'radio',
        label: '罪犯又犯罪',
        dicData: [
          {
            label: '是',
            value: '0'
          },
          {
            label: '否',
            value: '1'
          }
        ],
        span: 8,
        display: true,
        props: {
          label: 'label',
          value: 'value'
        },
        prop: 'name6'
      },
      {
        type: 'radio',
        label: '单位犯罪',
        dicData: [
          {
            label: '是',
            value: '0'
          },
          {
            label: '否',
            value: '1'
          }
        ],
        span: 8,
        display: true,
        props: {
          label: 'label',
          value: 'value'
        },
        prop: 'name7'
      },
      {
        type: 'radio',
        label: '涉及未成年人案件',
        dicData: [
          {
            label: '是',
            value: '0'
          },
          {
            label: '否',
            value: '1'
          }
        ],
        span: 8,
        display: true,
        props: {
          label: 'label',
          value: 'value'
        },
        prop: 'name8'
      },
      {
        type: 'input',
        label: '案件特性',
        span: 24,
        display: true,
        prop: 'name9'
      },
      {
        type: 'input',
        label: '卷宗册数',
        span: 24,
        display: true,
        suffixIcon: 'el-icon-view',
        prop: 'name10'
      }
    ],
    labelPosition: 'top',
    labelSuffix: '：',
    labelWidth: 170,
    gutter: 0,
    menuBtn: true,
    submitBtn: true,
    submitText: '下一步',
    emptyBtn: false,
    emptyText: '清空',
    menuPosition: 'right',
    tabs: false,
    detail: false,
    readonly: false
  },
  option2: {
    column: [
      {
        type: 'input',
        label: '部门受案号',
        span: 24,
        display: true,
        prop: '1617790970598_31535',
        readonly: true,
        required: true,
        rules: [
          {
            required: true,
            message: '部门受案号必须填写'
          }
        ]
      },
      {
        type: 'datetime',
        label: '日期时间',
        span: 12,
        display: true,
        format: 'yyyy-MM-dd HH:mm:ss',
        valueFormat: 'yyyy-MM-dd HH:mm:ss',
        prop: '1617791000482_44269',
        disabled: true,
        required: true,
        rules: [
          {
            required: true,
            message: '日期时间必须填写'
          }
        ]
      },
      {
        type: 'input',
        label: '案件名称',
        span: 12,
        display: true,
        prop: '1617791120227_27550',
        readonly: true,
        required: true,
        rules: [
          {
            required: true,
            message: '案件名称必须填写'
          }
        ]
      },
      {
        type: 'input',
        label: '（不）起诉意见书文号',
        span: 12,
        display: true,
        prop: '1617791143584_90239',
        rules: [
          {
            required: true,
            message: '（不）起诉意见书文号必须填写'
          }
        ],
        required: true,
        showWordLimit: true
      },
      {
        type: 'input',
        label: '移送单位',
        span: 12,
        display: true,
        prop: '1617791287761_49315',
        rules: [
          {
            required: true,
            message: '移送单位必须填写'
          }
        ],
        required: true
      },
      {
        type: 'radio',
        label: '监所案件',
        dicData: [
          {
            label: '是',
            value: '0'
          },
          {
            label: '否',
            value: '1'
          }
        ],
        span: 12,
        display: true,
        props: {
          label: 'label',
          value: 'value'
        },
        prop: '1617791353830_70454',
        required: true,
        rules: [
          {
            required: true,
            message: '请选择监所案件'
          }
        ]
      },
      {
        type: 'input',
        label: '侦（调查）察机关',
        span: 12,
        display: true,
        prop: '1617791384380_95754',
        required: true,
        rules: [
          {
            required: true,
            message: '侦（调查）察机关必须填写'
          }
        ]
      },
      {
        type: 'input',
        label: '侦（调查）察机关类别',
        span: 12,
        display: true,
        prop: '1617791419225_56453',
        rules: [
          {
            required: true,
            message: '侦（调查）察机关类别必须填写'
          }
        ],
        required: true
      },
      {
        type: 'input',
        label: '移送意见',
        span: 12,
        display: true,
        prop: '1617791444635_21270',
        rules: [
          {
            required: true,
            message: '移送意见必须填写'
          }
        ],
        required: true
      },
      {
        type: 'input',
        label: '移速罪名',
        span: 12,
        display: true,
        prop: '1617791461707_15715',
        rules: []
      },
      {
        type: 'input',
        label: '移速其他罪名',
        span: 12,
        display: true,
        prop: '1617791479724_43996'
      },
      {
        type: 'radio',
        label: '他院受理审查起诉后改',
        dicData: [
          {
            label: '是',
            value: '0'
          },
          {
            label: '否',
            value: '1'
          }
        ],
        span: 12,
        display: true,
        props: {
          label: 'label',
          value: 'value'
        },
        prop: '1617791507016_24498',
        required: true,
        rules: [
          {
            required: true,
            message: '请选择单选框组'
          }
        ]
      },
      {
        type: 'radio',
        label: '侦（调查）察机关建议适用认罪认罚',
        dicData: [
          {
            label: '是',
            value: '0'
          },
          {
            label: '否',
            value: '1'
          }
        ],
        span: 12,
        display: true,
        props: {
          label: 'label',
          value: 'value'
        },
        prop: '1617791563084_72517',
        rules: [
          {
            required: true,
            message: '请选择侦（调查）察机关建议适用认罪认罚'
          }
        ],
        required: true
      },
      {
        type: 'radio',
        label: '属于适用缺席审判程序案件',
        dicData: [
          {
            label: '是',
            value: '0'
          },
          {
            label: '否',
            value: '1'
          }
        ],
        span: 12,
        display: true,
        props: {
          label: 'label',
          value: 'value'
        },
        prop: '1617791605316_51436',
        required: true,
        rules: [
          {
            required: true,
            message: '请选择属于适用缺席审判程序案件'
          }
        ]
      },
      {
        type: 'radio',
        label: '单位犯罪',
        dicData: [
          {
            label: '是',
            value: '0'
          },
          {
            label: '否',
            value: '1'
          }
        ],
        span: 12,
        display: true,
        props: {
          label: 'label',
          value: 'value'
        },
        prop: '1617791670901_65410',
        rules: []
      },
      {
        type: 'radio',
        label: '涉台案件',
        dicData: [
          {
            label: '是',
            value: '0'
          },
          {
            label: '否',
            value: '1'
          }
        ],
        span: 12,
        display: true,
        props: {
          label: 'label',
          value: 'value'
        },
        prop: '1617791701885_61873',
        rules: []
      },
      {
        type: 'radio',
        label: '涉外案件',
        dicData: [
          {
            label: '是',
            value: '0'
          },
          {
            label: '否',
            value: '1'
          }
        ],
        span: 12,
        display: true,
        props: {
          label: 'label',
          value: 'value'
        },
        prop: '1617791767707_57293'
      },
      {
        type: 'radio',
        label: '督办案件',
        dicData: [
          {
            label: '是',
            value: '0'
          },
          {
            label: '否',
            value: '1'
          }
        ],
        span: 12,
        display: true,
        props: {
          label: 'label',
          value: 'value'
        },
        prop: '1617791790584_37764'
      },
      {
        type: 'radio',
        label: '关注案件',
        dicData: [
          {
            label: '是',
            value: '0'
          },
          {
            label: '否',
            value: '1'
          }
        ],
        span: 24,
        display: true,
        props: {
          label: 'label',
          value: 'value'
        },
        prop: '1617791886682_78065'
      }
    ],
    labelPosition: 'top',
    labelSuffix: '：',
    labelWidth: 180,
    gutter: 0,
    menuBtn: true,
    submitBtn: true,
    submitText: '提交',
    emptyBtn: true,
    emptyText: '清空',
    menuPosition: 'center'
  },
  // 树节点对应跳转预览图片
  nodeId: {
    6: 'img6',
    9: 'img1',
    10: 'img2',
    11: 'img3',
    12: 'img4',
    13: 'img5',
    31: 'img6',
    7: 'img1',
    8: 'img2',
    70: 'img3',
    71: 'img4',
    80: 'img5',
  },
  cardLogData: [
    {
      id: 2,
      label: '案件信息',
      children: [
        {
          id: 5,
          label: '审查起诉案件信息'
        },
        {
          id: 6,
          label: '审判活动监督情况'
        },
        {
          id: 6,
          label: '犯罪嫌疑人/单位'
        },
        {
          id: 6,
          label: '被害人/单位'
        },
      ]
    },
  ]
}
