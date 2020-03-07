export const Home = {
  RenderPage : async ( ctx ) => {
    await ctx.render('index.html', {
      title:"后端app.js 中写入的title,"
    })
  },
  RenderLogin: async ( ctx ) => {
    await ctx.render('login.html')
  },
  RenderNews: async ( ctx ) => {
    ctx.body='新闻页面' 
    console.log(ctx.request)
    console.log(ctx.query)//{name:yuwei,age=12}
    console.log(ctx.querystring);//name=yuwei&age=12
  },
} 
