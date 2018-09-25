import React from 'react'
import Header from './../Header/Header'
import Footer from './../Footer/Footer'

export default class Layout extends React.Component {
  
  render () {
    console.log(this.props)
    return <div>
      <Header></Header>
      <main>{ this.props.children }</main>
      {/* <Footer></Footer> */}
    </div>
  }
}