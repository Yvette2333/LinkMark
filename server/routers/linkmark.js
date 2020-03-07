/**
 * 主页子路由
 */
import Router from 'koa-router';
import { API } from '../controllers/linkmark/index'
const router = Router();

//此处调用前缀为 /linkmark/insertBookMark
router.post('/insertBookMark', API.insert)
router.post('/queryBookMark', API.queryList)



export default router