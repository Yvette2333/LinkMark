import DBClient from '../module/db';

const DB = DBClient.getInstance();

export const LinkMarkServer = { 
  /**
   * @direction 新增local.LinkMark数据表
   */
  insertBookMark(json){
    let result = DB.insert('LinkMark',json)
    return result
  },
  queryBookMarkList(){
    let result = DB.find('LinkMark',{})
    return result
  }
}