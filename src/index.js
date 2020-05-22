import Vue from "vue";
export { default as eleTable } from './table.vue';
export { default as eleColumns } from './columns.vue';

export default {
  install() {
    Vue.component("ele-table", Table);
    Vue.component("ele-table-columns", Columns)
  }
}