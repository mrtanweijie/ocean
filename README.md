## Koa2 项目基础脚手架

#### 启动(默认使用`3000`端口)

```
npm i & npm run dev
```

启动之后打开浏览器输入测试接口`http://localhost:3000/api/userInfo/1`，返回正确的JSON说明项目部署成功：

```
{
    "code": 0,
    "message": "success",
    "data": {
        "id": 1,
        "name": "twj",
        "age": 18
    }
}
```

#### 项目目录

```
├── README.md
├── dist                      ## 编译之后的项目目录 
├── node_modules         
├── src
│   ├── app.js                ## 项目入口
│   ├── config                ## 配置  
│   ├── controllers           ## 业务逻辑   
│   ├── routes                ## 路由控制   
│   ├── error                 ## 错误处理
│   ├── lib     
│   ├── middlewares           ## 中间件
│   ├── models                  
│   ├── public                ## 资源
│   ├── router.js             ## 统一路由入口
│   ├── server.js
│   └── utils                 ## 工具
│
├── package-lock.json         
├── package.json              
├── pm2.json     

```

#### 代码风格

https://standardjs.com/readme-zhcn.html