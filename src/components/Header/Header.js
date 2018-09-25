import React from 'react'
import './Header.scss'
import logo from './../../resources/images/logo.svg'

export default class Header extends React.Component {
  render () {
    return (
      <header>
        <img className="logo" src={logo} alt="logo" />
        <h1>MoviesDB Search</h1>
      </header>
    )
  }
}