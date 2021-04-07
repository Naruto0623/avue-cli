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
        span: 24,
        display: true,
        prop: '1617705817933_28095',
        rules: [
          {
            required: true,
            message: '案件名称必须填写'
          }
        ],
        required: true,
        showWordLimit: true
      },
      {
        type: 'input',
        label: '移诉罪民',
        span: 24,
        display: true,
        prop: '1617705836685_617',
        required: true,
        rules: [
          {
            required: true,
            message: '移诉罪民必须填写'
          }
        ]
      },
      {
        type: 'input',
        label: '侦（调）查机关',
        span: 24,
        display: true,
        prop: '1617706135046_79564',
        rules: [
          {
            required: true,
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
        span: 24,
        display: true,
        prop: '1617706249044_87082',
        rules: [
          {
            required: true,
            message: '侦（调）查机关类别必须填写'
          }
        ],
        required: true
      },
      {
        type: 'input',
        label: '侦（调）查机关案号',
        span: 24,
        display: true,
        prop: '1617706295573_50040',
        showWordLimit: true,
        required: true,
        rules: [
          {
            required: true,
            message: '侦（调）查机关案号必须填写'
          }
        ]
      },
      {
        type: 'input',
        label: '移送单位',
        span: 24,
        display: true,
        prop: '1617706335218_58377',
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
        prop: '1617706388365_78347'
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
        prop: '1617706426743_46780'
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
        prop: '1617706474422_69984'
      },
      {
        type: 'input',
        label: '案件特性',
        span: 24,
        display: true,
        prop: '1617706516912_470'
      },
      {
        type: 'input',
        label: '卷宗册数',
        span: 24,
        display: true,
        prop: '1617706530510_12873'
      }
    ],
    labelPosition: 'right',
    labelSuffix: '：',
    labelWidth: 170,
    gutter: 0,
    menuBtn: false,
    submitBtn: true,
    submitText: '提交',
    emptyBtn: true,
    emptyText: '清空',
    menuPosition: 'center',
    tabs: false,
    detail: false,
    readonly: false
  },
  option2: {
    column: [
      {
        type: 'input',
        label: '侦（调）查机关',
        span: 24,
        display: true,
        prop: '1617706135046_79564',
        rules: [
          {
            required: true,
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
        span: 24,
        display: true,
        prop: '1617706249044_87082',
        rules: [
          {
            required: true,
            message: '侦（调）查机关类别必须填写'
          }
        ],
        required: true
      },
      {
        type: 'input',
        label: '侦（调）查机关案号',
        span: 24,
        display: true,
        prop: '1617706295573_50040',
        showWordLimit: true,
        required: true,
        rules: [
          {
            required: true,
            message: '侦（调）查机关案号必须填写'
          }
        ]
      },
      {
        type: 'input',
        label: '移送单位',
        span: 24,
        display: true,
        prop: '1617706335218_58377',
        rules: [
          {
            required: true,
            message: '移送单位必须填写'
          }
        ],
        required: true
      },
      {
        type: 'input',
        label: '案件特性',
        span: 24,
        display: true,
        prop: '1617706516912_470'
      },
      {
        type: 'input',
        label: '卷宗册数',
        span: 24,
        display: true,
        prop: '1617706530510_12873'
      }
    ],
    labelPosition: 'right',
    labelSuffix: '：',
    labelWidth: 170,
    gutter: 0,
    menuBtn: false,
    submitBtn: true,
    submitText: '提交',
    emptyBtn: true,
    emptyText: '清空',
    menuPosition: 'center',
    tabs: false,
    detail: false,
    readonly: false
  },
}
