import React from 'react'
import Header from './../Header/Header'
import Footer from './../Footer/Footer'

export default class Layout extends React.Component {
  render () {
    const { children } = this.props
    return <div>
      <Header></Header>
      <main>{ children }</main>
      {/* <Footer></Footer> */}
    </div>
  }
}