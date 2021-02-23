import React, { Component, Fragment } from 'react'

// import Demo from './components/01_setState'
// import Demo  from './components/02_lazyLoad'
// import Demo from './components/03_hooks'
// import Demo from './components/04_Fragment'
import Demo from './components/05_Context'

export default class App extends Component {
  render() {
    return (
      // Fragment只能拥有一个key属性，其他的都不行
     <Fragment>
        <Demo/>
     </Fragment>
    )
  }
}
