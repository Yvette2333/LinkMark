/**
 * 主页子路由
 */

// const router = require('koa-router')()
// const API = require('../controllers/api/api')

import Router from 'koa-router';
import { API } from '../controllers/api/api'
const router = Router();
console.log('router')
//此处调用前缀为 /api/getData
router.get('/getData', API.getData)
router.post('/getData', API.getData)

export default router