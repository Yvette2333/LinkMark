// const DB = require('../module/db');
import DBClient from '../module/db';
console.log("*************************")
console.log(DBClient)
const DB = DBClient.getInstance();
export const ApiServer = { 
  /**
   * @direction 查询local.koa数据表
   */
  queryData(json){
    let result = DB.find('koa',json)
    return result
  }
}