---
# React 简明教程
###### by [jirengu.com](http://jirengu.com)

---
++++
## 开发环境搭建


++++
## 初始化

```
mkdir react-project
cd react-project
npm init
```

++++
## 安装react

```
npm install react react-dom --save
```

++++
## 安装babel

```
npm install babel-loader babel-core babel-preset-es2015 babel-preset-react --save
```

++++
## 安装webpack server

```
npm install babel webpack webpack-dev-server -g
```

++++
## 创建文件

```
touch index.html app.js main.js webpack.config.js
```

++++
webpack.config.js

```
module.exports = {
  entry: './main.js',
  output: {
    path: './',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 8888
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015','react']
        }
      }
    ]
  }
}
```
++++
index.html

```
<!DOCTYPE html>
<html>
<head>
  <title>react</title>
</head>
<body>
  <div id="app"></div>
  <script src="index.js"></script>
</body>
</html>
```

++++
app.js

```
import React from 'react';
class	App extends React.Component {
  render(){
    return <div>hello world</div>
  }
}
export default App;
```

++++
main.js

```
import React from 'react';
import ReactDom from 'react-dom';
import App from './app';

ReactDom.render(<App />, document.querySelector('#app'))
```

++++
package.json
```
{
  "name": "react-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "react": "^15.3.2",
    "react-dom": "^15.3.2"
  }
}
```
++++
## 启动

```
npm start
```
- 打开 [http://localhost:8888/index.html](http://localhost:8888/index.html)
- 修改app.js,页面自动刷新

---
++++
## hello world

++++
修改 app.js

```
import React from 'react';
// class  App extends React.Component {
//  render(){
//    return <div>hello world</div>
//  }
// }

// const App = function(){
//   return <h1> hello jiredngus</h1> ;
// }
const App = () => <h1>hello ruoyu </h1>
export default App;

```

---
++++
## 渲染多个标签

++++
可以这样

```
import React from 'react';
class  App extends React.Component {
 render(){
    return <div>
        <div> hello world</div>
        <h3> hello jirengu </h3>
      </div>
 }
}

export default App;
```

++++
或者

```
import React from 'react';
class  App extends React.Component {
 render(){
    return <div>
        <div> hello world</div>
        <h3> hello jirengu </h3>
      </div>
 }
}
export default App;

```

++++
或者更简单的写法

```
import React from 'react';

const App = () => (
  <div>
    <h1>hello ruoyud </h1>
    <h3> hello jirengu </h3>
  </div>
)
export default App;
```

---
++++
## 使用属性

++++
- app.js

```
class  App extends React.Component {
 render(){
    let username = this.props.username
    return (
      <div>
        <div> hello world</div>
        <h3> hello {username} </h3>
      </div>
      )
 }
}

```
- main.js

```
ReactDom.render(<App username="ruoyu"/>, document.querySelector('#app'))
```
++++
设置属性类型与默认值

```
class  App extends React.Component {
 render(){
    let username = this.props.username
    let age = this.props.age
    return (
      <div>
        <h3> {username} </h3>
        <p> age is: {age} </p>
      </div>
      )
 }
}

App.propTypes = {
  username: React.PropTypes.string,
  age: React.PropTypes.number.isRequired
}

App.defaultProps = {
  username: 'jirengu',
  age: 2
}
```

```
ReactDom.render(<App  age={5}/>, document.querySelector('#app'))
```



