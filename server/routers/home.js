/**
 * 主页子路由
 */
// const router = require('koa-router')()
// const Home = require('../controllers/home/home')
import Router from 'koa-router';
import { Home } from '../controllers/home/home'
const router = Router();

// router.get('/', Home.RenderPage)
router.get('/login', Home.RenderLogin)
router.get('/news',Home.RenderNews)

export default router