<script>
export default {
  name: "ele-columns",
  functional: true,
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  render(h, context) {
    const ctx = context;
    const _c = ctx._c || h;
    return [
      ctx._l(ctx.props.columns, function(column, index) {
        return _c(
          "el-table-column",
          {
            key: column.label,
            attrs: {
              ...column
            },
          },
          [
            column.hasOwnProperty("slot")
              ? ctx.scopedSlots[column.slot]({
                  index,
                  row: ctx.props.data[index],
                })
              : null,
            column.hasOwnProperty("children") && column.children.length
              ? [_c("ele-columns", { attrs: { columns: column.children, data: ctx.props.data }, scopedSlots: ctx.scopedSlots })]
              : ctx._e(),
          ],
          2
        );
      }),
    ];
  },
};
</script>
