import React, { Component } from 'react'

export default class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.add = () => {
      // 1. 获取原来的count值
      const { count } = this.state
      // 2. 更新状态

      // 对象式的setState，参数是状态改变对象(stateChange)
      // 第二个参数是calllback，是可选的回调函数，它在状态更新(render调用之后)才被调用,所以回调函数里面可以拿到状态更新后的最新值
      // react状态的更新是异步的
      this.setState({ count: count + 1 }, () => {
        console.log('setState第二个参数回调函数里的输出', this.state.count)
      })
      console.log('12行的输出', this.state.count)

      // 函数式的setState
      // 1. updater为返回状态改变对象(stateChange)对象的函数。
      // 2. updater可以接收到state和props
      // 3. callback是可选的回调函数，它在状态更新、界面也更新后(render调用后)才被调用
      // 4. 对象式的setState是函数式setState的简写方式(语法糖)
      // this.setState ((state, props) => {
      //   console.log(state, props)
      //   return { count: state.count + 1 }
      // })

      this.setState( state => ({ count: state.count + 1 }))

      // this.setState({ count: this.state.count + 1 })
      // 1. 如果新状态不依赖于原状态——使用对象方式
      // 2. 如果新状态依赖于原状态——使用函数方式
    }
  }
  render() {
    return (
      <div>
        <h1>当前求和为：{ this.state.count }</h1>
        <button onClick={ this.add }>点我+1</button>
      </div>
    )
  }
}
