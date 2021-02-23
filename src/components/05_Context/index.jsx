import React, { Component } from 'react'
import './index.css'

//创建Context对象
const MyContext = React.createContext()
// const { Provider } = MyContext
// console.log('pro',Provider)
export default class A extends Component {
  constructor() {
    super()
    this.state = { username: 'cpp' }
  }
  render() {
    const { username } = this.state
    return (
      <div className="parent">
        <h3>我是A组件</h3>
        <h4>我的用户名是：{ username }</h4>
        <MyContext.Provider>
          <B/>
        </MyContext.Provider>
      </div>
    )
  }
}

class B extends Component {
  // static contextType = MyContext
  render() {
    console.log(this)
    return (
      <div className="child">
        <h3>我是B组件</h3>
        <C/>
      </div>
    )
  }
}

class C extends Component {
  // 谁想要，就要声明
  // static contextType = MyContext
  
  render() {
    console.log(this)
    return (
      <div className="grand">
        <h3>我是C组件</h3>
        <h4>我从A组件接收到的用户名是</h4>
      </div>
    )
  }
}

