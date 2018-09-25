import React, { Component } from 'react'
import { connect } from 'react-redux'
import search from './../../../../store/actions/seacrh'
import './SearchForm.scss'

class SearchForm extends Component {
  render() {
    return (
      <div>
        <form className="container form-search">
          <input className="js--search" type="text" placeholder="Search for a movie, tv show, person..."></input>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  text: state.dashboard.wellcomeText,
})

const mapDispatchToProps = dispatch => {
  return {
    changeTextProps: searchTerm => {
      dispatch(search(searchTerm))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchForm)