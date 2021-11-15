# great-wall-admin-backend

长城系统koa后台基础框架
## 使用

打开终端输入：

```bash
# 安装依赖包
npm install

# ts编译为js文件，生成dist目录
npm run build

# ts编译为js文件（生成dist目录），并监听文件变化，然后自动编译成js文件
npm run build-w
```

新建一个终端输入：

```bash
# 本地开发环境
npm run dev

# 跑测试用例
npm run test
```

```bash
# 生产环境
npm run prod

# 查看pm2的日志
npm run logs

# 停止pm2服务
npm run stop
```

PM2是node进程管理工具，可以利用它来性能监控、自动重启、负载均衡等。


## 目录结构说明

```
├─bin                                            // 启动目录
│  ├─www                                         // 启动文件配置
├─dist                                           // 编译之后的js文件（带 sorcemap，支持生产环境告警定位）
├─src                                            // 开发目录
│  ├─cache
│     ├─_redis                                   // 连接redis的方法等         
│  ├─conf                                        // 配置文件
│     ├─base                                     // 一些基础配置
│     ├─db                                       // 存储配置（数据库、redis等连接配置）
│     ├─index   
│  ├─controllers                                 // 操作业务逻辑             
│     ├─index
│     ├─user                                      // 用户模块
│     ├─...         
│  ├─lib                                          // 工具库
│     ├─env                                       // 环境变量文件
│     ├─error                                     // 异常处理
│     ├─errorInfo                                 // 失败信息合集
│     ├─resModel                                  // 响应数据模型
│     ├─sign                                      // sso登陆认证，验签函数
│  ├─logs                                         // 日志文件
│  ├─middlewares                                  // 中间件
│     ├─cors                                      // 跨域中间件
│     ├─jwt                                       // jwt中间件
│     ├─logger                                    // 日志打印中间件
│     ├─loginCheck                                // 跨域中间件
│     ├─response                                  // 响应及异常处理中间件
│     ├─...
│  ├─models                                       // 数据库配置及模型
│     ├─database                                  // sequelize配置                 
│         ├─seq.ts                                // sequelize实例            
│         ├─sync.ts                               // sequelize实例同步数据库            
│         ├─types.ts                              // 封装sequelize数据类型的文件 
│     ├─Blog                                      // 博客数据模型                
│     ├─User                                      // 用户数据模型                
│     ├─index                                     // 出口文件   
│  ├─public                                       // 静态资源         
│  ├─routes                                       // 路由
│     ├─public                                    // 公开路由，不需要token鉴权
│     ├─private                                   // 校验路由（需要做token鉴权）
│     ├─blog                                      // 博客模块路由文件
│  ├─services                                     // 操作数据库
│     ├─index                                     // 出口文件
│     ├─blog                                      // 博客模块service
│     ├─user                                      // 用户模块service
│  ├─app.ts                                       // 应用入口文件
├─test                                            // 测试用例
├─typings                                         // ts声明文件
├─.eslintignore                                   // 忽略eslint语法检查的配置
├─.eslintrc.js                                    // eslint 语法检查配置
├─.gitignore                                      // 忽略文件配置
├─ecosystem.config.js                             // pm2配置文件
├─package-lock.json
├─package.json                                    // 项目配置
├─README.md                                       // 项目说明
├─tsconfig.json                                   // typescript配置
```

## 使用sequelize进行建模和同步数据库|增删改查和连表查询

Sequelize 是一个基于 Promise 的 Node.js ORM 工具，目前支持 Postgres、MySQL、MariaDB、SQLite 以及 Microsoft SQL Server。它具有强大的事务支持、关联关系、预读和延迟加载、读取复制等功能。

ORM 是对象关系映射（Object Relational Mapping）的简称，是一种程序设计技术，用于实现面向对象编程语言里不同类型系统的数据之间的转换。其实是创建了一个可在编程语言里使用的“虚拟对象数据库”。

[sequelize 官方文档](https://sequelize.org/master/)

[简单使用 sequelize](https://www.yuque.com/docs/share/9c654296-5448-4bf6-ae66-988371e4cd69)

## 开启redis

### 下载、安装并使用

下载安装

windows：[下载地址](https://www.runoob.com/redis/redis-install.html)

mac

```bash
brew install redis
```

先启动redis-server

安装完成后，终端中直接输入

```bash
redis-server
```

启动redis-cli

新开一个终端中直接输入

```bash
redis-cli
```

## 使用koa-jwt

JWT是什么：

>JWT的声明一般被用来在身份提供者和服务提供者间传递被认证的用户身份信息
### 使用JWT流程

背景：本项目对接了sso认证中心登陆接口

用户使用平台给的loginToken请求服务器，服务器调用sso认证中心的登陆授权接口，对接成功后，拿到了对应的登陆用户信息

jwt加密用户信息（jwt.sign），发送jwt生成的accessToken给用户

客户端存储accessToken，并在每次请求时附送上这个accessToken值

服务端验证accessToken值（jwt.verify验证信息），并返回数据

### 说明

需要鉴权的路由接口，使用jwtMiddleware中间件即可。

```javascript
router.use(jwtMiddleware)
```

## 使用jest进行单元测试

test目录下，按模块维护单元测试用例。

文件命名需要以*.test.js命名。

参考资料：

[官方文档](https://jestjs.io/zh-Hans/docs/getting-started)

[jest快速入门及实践教程](https://zhuanlan.zhihu.com/p/282835230)


## 使用PM2，用于生产环境node进程管理

PM2是可以用于生产环境的Nodejs的进程管理工具，并且它内置一个负载均衡。它不仅可以保证服务不会中断一直在线，并且提供0秒reload功能，还有其他一系列进程管理、监控功能。

[官方文档](https://pm2.keymetrics.io/docs/usage/quick-start/)

[常用命令](https://www.jianshu.com/p/0099378d477e)

配置文件：ecosystem.config.js

```bash
npm run prod：生产环境
npm run logs: 查看pm2的日志
npm run stop： 停止pm2服务
```
