## vue-element-table
> 基于 element-ui 封装 table, 支持无限级表头, 配置化操作

## how to use
[Reference](https://github.com/w3313003/ele-table/tree/master/example)

## preview
![示例](http://118.25.16.229/public/upload/image/2020/5/22/2020522_12c79b2ddd7ef_28E64FDB-4A48-4210-A572-A4F00E92B23F.png)

## example
```js
// import
// global components
import EleTable from "your path/index";
Vue.use(EleTable);

// local components
import { eleTable, eleColumns } from "your path/index"

export const MyComponent {
  components: {
    [eleTable.name]: eleTable,
    [eleColumns.name]: eleColumns
  },
  template: `
    <template>
      <ele-table
        stripe
        :data="tableData"
        border
        :height="500"
        @selection-change="handleSelectionChange"
      >
        <ele-columns :columns="tableColumns" :data="tableData">
          <template v-slot:date="scope"> slot {{ scope.row.date }} </template>
          <template v-slot:name="scope"> slot {{ scope.row.name }} </template>
          <template v-slot:province="scope">
            slot{{ scope.row.province }}
          </template>
        </ele-columns>
      </ele-table>
    </template>
  `,
  data() {
    return {
      tableColumns: [
        {
          type: "selection",
          width: 55,
        },
        {
          label: "日期",
          prop: "date",
          slot: "date",
        },
        {
          label: "配送信息",
          children: [
            {
              label: "姓名",
              prop: "name",
              slot: "name",
            },
            {
              label: "地址",
              children: [
                {
                  label: "省份",
                  prop: "province",
                  slot: "province",
                },
                {
                  label: "市区",
                  prop: "city",
                },
                {
                  label: "地址",
                  prop: "address",
                },
              ],
            },
          ],
        },
      ],
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
      ],
    };
  },
  methods: {
    handleSelectionChange(val) {
      console.log(val);
    }
  }
}

```
