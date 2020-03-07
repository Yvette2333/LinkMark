import { LinkMarkServer } from '../../services/linkmark'


export const API = {
  insert: async (ctx) => {
    let data = await LinkMarkServer.insertBookMark(ctx.request.body);
    const { result: { ok }, insertedId } = data;
    console.log(data.result)
    console.log(data.insertedId)
    // 判断数据库是否成功insert
    if (ok) {
      ctx.body = {
        code: 200,
        msg: '新增成功',
        data: insertedId
      };
      ctx.status = 200;
      ctx.message = 'sucess';
    }
  },
  queryList:async (ctx) => {
    let data = await LinkMarkServer.queryBookMarkList(ctx.request.body);
    console.log(data)
    ctx.body = {
      code: 200,
      msg: '查询',
      data
    };
    ctx.status = 200;
    ctx.message = 'sucess';
  },
}
