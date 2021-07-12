<!--
 * @File: 
 * @Author: yvette <yvette@douyu.tv>
 * @Date: 2020-05-11 13:36:30
 * @LastEditBy: yvette <yvette@douyu.tv>
 * @LastEditTime: 2020-10-26 14:20:58
-->

# Link Mark Client 
一个用于管理Chorme书签的线上管理工具，目前正在开发中，后期拟支持多端应用（APP/Election）

# 技术栈

 - 基础：React React-Router React-Router-DOM TypeScript
 - 数据存储:Immutable Redux Redux-immutable React-Redux React-saga 
    - 拟实现 ： 1.通过saga启动任务取消任务，执行异步代码/请求 
- UI库：styled-components antd
- 必做优化：
  - @loadable/component
  - GGeditor 富文本编辑器
  - 安全防范：防止xss攻击，使用js-xss，并建立白名单与黑名单

# 快速上手

```
npm install

npm start

run in Broswer: http://localhost:3000
