# React 学习总结

## 核心思想

* 单向数据流
* 函数式编程
  * 函数式编程让我们的代码更清晰，每个功能都是一个函数；
  * 函数式编程为我们的代码测试代理了极大的方便，更容易实现前端自动化测试。

## PropTypes校验

```javascript
import propTypes from 'prop-types'

// propTypes校验
XiaojiejieItem.propTypes = {
    name: propTypes.string.isRequired,
    content: propTypes.string,
    index: propTypes.number,
    deleteItem: propTypes.func
}
// 默认值
XiaojiejieItem.defaultProps = {
    name: '阿丽塔'  // name可以不传递，指定默认值
}
```

## 生命周期

* 生命周期函数指在某一个时刻组件会自动调用执行的函数
* React声明周期的四个大阶段：
  * Initialization: 初始化阶段
  * Mounting: 挂在阶段
  * Updation: 更新阶段
  * Unmounting: 销毁阶段

## 组件更新时的性能优化问题

```javascript
//  子组件的渲染性能问题

// shouldComponentUpdate有两个参数：
//      nextProps:变化后的属性;
//      nextState:变化后的状态;

shouldComponentUpdate(nextProps, nextState) {
        // if (nextProps.content !== this.props.content) {
        //     return true
        // } else {
        //     return false
        // }
        return nextProps.content !== this.props.content
    }

// 何为经验！！！
// 其实在面试React让写TODOList应用的，都是看这个来区分等级的，
// 能写出来的，这算普通程序员;
// 能写出来并作性能优化的，这算有经验的程序员
```

## 安装依赖包的指令

```text

npm install xxx: 安装项目到项目目录下，不会将模块依赖写入devDependencies或dependencies。

npm install -g xxx: -g的意思是将模块安装到全局，具体安装到磁盘哪个位置，要看 npm cinfig prefix的位置

npm install -save xxx：-save的意思是将模块安装到项目目录下，并在package文件的dependencies节点写入依赖。

npm install -save-dev xxx：-save-dev的意思是将模块安装到项目目录下，并在package文件的devDependencies节点写入依赖。
```

## axios 请求数据

**把请求数据的方法放在 `componentDidMount`生命周期函数中执行**
