import React from 'react'
// import { Component } from 'react'
import ReactDOM from 'react-dom'

// 类式组件
// class Demo extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { count: 0 }
//     this.add = () => {
//       this.setState(state => ({ count: state.count + 1 }))
//     }
//     this.unMountCom = () => {
//       ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//     }
//     this.myRef = React.createRef()
//     this.show = () => {
//       alert(this.myRef.current.value)
//     }
//   }
//   componentDidMount() {
//     this.timer = setInterval(() => {
//       this.setState( state => ({ count: state.count + 1 }))
//     }, 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.timer)
//   }
//   render() {
//     return (
//       <div>
//         <input type="text" ref={ this.myRef }/>
//         <h2>当前求和为{ this.state.count }</h2>
//         <button onClick={ this.add }>点我+1</button>
//         <button onClick={ this.unMountCom }>卸载组件</button>
//         <button onClick={ this.show }>点击提示数据</button>
//       </div>
//     )
//   }
// }

// 函数式组件
function Demo() {
  // Demo调用了1+n次
  // console.log('Demo')
  const [ count, setCount ] = React.useState(0)
  const [ name, setName ] = React.useState('cpp')
  const myRef = React.useRef()

  // 生命周期钩子有关hooks
  // 不写第二个参数数组，谁都监测，写了空数组，谁也不监测
  // React.useEffect的第一个参数为函数，这个函数相当于两个钩子，componentDidMount()，componentDidUpdate()
  // 这个函数返回的函数相当于 componentWillUnmount()
  React.useEffect(() => {
    let timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000);
    return () => {
      clearInterval(timer)
    }
  }, [ count ]) // 只监测count

  // 加1的回调
  function add() {
    // setCount(count+1)   // 第一种写法
    setCount(count => count + 1)
  }

  // 卸载组件的回调
  function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  // 提示输入的回调
  function show() {
    alert(myRef.current.value)
  }

  function changeName() {
    setName('cjz')
  }
  return (
    <div>
      <input type="text" ref={ myRef }/>
      <h2>当前求和为：{ count }</h2>
      <h2>名字为: { name }</h2>
      <button onClick={ add }>点我+1</button>
      <button onClick={ changeName }>点我改名</button>
      <button onClick={ unmount }>卸载组件</button>
      <button onClick={ show }>点我提示数据</button>
    </div>
  )
}
export default Demo
