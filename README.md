# CMS
仿掘金CMS

## 环境配置
node 16.14.0
yarn 1.22.19

## 运行

cd ./cms

yarn install

### `develop`

yarn develop

### `start`

yarn start

### `build`

yarn build

## 登录

默认入口地址
    http://localhost:1337/admin/

管理员账号
     账号：de mo 邮箱：demo@qq.com 密码：Aa123456

 ## 接口
    
    首页导航栏：http://localhost:1337/api/navs
    
    首页分类：http://localhost:1337/api/categories 
    http://localhost:1337/api/categories?id id为对应的分类id 可以获取对应的文章list 

    作者列表：http://localhost:1337/api/authors
    
    文章列表：http://localhost:1337/api/posts //若首页未选择分类 可以调用此接口获取数据 
    
    文章详情：http://localhost:1337/api/posts/id id为对应的文章id

## TODO 由于某些问题 我们就做一个简单的哈 