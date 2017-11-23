## Koa2 项目基础脚手架

#### 启动(默认使用`3000`端口)

```
npm i & npm run dev
```

#### 项目目录

```
├── README.md
├── dist                      ## 编译之后的项目目录 
├── node_modules
├── package-lock.json         
├── package.json              
├── pm2.json            
└── src
    ├── app.js                ## 项目入口
    ├── config                ## 配置  
    ├── controllers           ## 路由控制   
    ├── error                 ## 错误处理
    ├── lib     
    ├── middlewares           ## 中间件
    ├── models                  
    ├── public                ## 资源
    ├── router.js             ## 统一路由入口
    ├── server.js
    └── utils                 ## 工具

```

#### 代码风格

https://standardjs.com/readme-zhcn.html