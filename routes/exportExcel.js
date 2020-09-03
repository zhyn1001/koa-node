/*
 * @Author: zhangyong
 * @Date: 2020-08-21 16:03:06
 * @LastEditTime: 2020-08-28 16:55:52
 * @LastEditors: zhangyong
 * @Description:
 */
const router = require("koa-router")();
const NXlSX = require("node-xlsx").default;

router.get("/download", function (ctx, next) {
  //表头
  const _headers = ["序号", "姓名", "年龄", "省", "市", "区"];
  //表格数据
  const _data = [
    {
      id: 1,
      name: "@cname",
      age: 23,
      province: "@province",
      city: "@city",
      county: "@county",
    },
  ];
  let data = [];
  for (let i = 0; i < _data.length; i++) {
    let arr = [];
    for (let key in _data[i]) {
      arr.push(_data[i][key]);
    }
    data.push(arr);
  }
  data.unshift(_headers);
  // 数据格式为[["序号", "姓名", "年龄", "省", "市", "区"],["hello","223"],["22","23"]];
  let buffer = NXlSX.build([{ name: "sheet1", data: data }]);
  ctx.set('Content-Type', 'application/vnd.openxmlformats');
  ctx.set("Content-Disposition", "attachment; filename=" + "Report.xlsx");
  // 返回buffer流到前端
  ctx.body = buffer;
});

module.exports = router;
