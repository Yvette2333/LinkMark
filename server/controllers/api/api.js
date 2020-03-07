import {ApiServer} from '../../services/api'
export const API = {
  getData: async ( ctx ) => {
    // console.log(ctx.request.body) 
    //{ fname: 'weqe', lname: '123asdada' }
    // ctx.body = JSON.stringify(ctx.request.body);
    let data = await ApiServer.queryData({});
    console.log('data',data)
    ctx.body = {
      code: 200,
      msg: '查询成功',
      data:data
    };
    ctx.status =200;
    ctx.message='sucess';
  },
}
