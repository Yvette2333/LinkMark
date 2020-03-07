import Home from './home';
import Api from './api';
import LinkMark from './linkmark';
import Router from 'koa-router';
const routers = Router();

routers.use('/', Home.routes(), Home.allowedMethods())
routers.use('/api', Api.routes(), Api.allowedMethods())
routers.use('/linkmark',LinkMark.routes(),LinkMark.allowedMethods())
export default routers;