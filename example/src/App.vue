<template>
  <div id="app">
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
  </div>
</template>

<script>
import { eleTable, eleColumns } from "./components/table";

export default {
  name: "App",
  components: {
    [eleTable.name]: eleTable,
    [eleColumns.name]: eleColumns,
  },
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
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
