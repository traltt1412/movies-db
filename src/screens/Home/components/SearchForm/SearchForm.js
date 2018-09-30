import React, { Component } from 'react'
import { connect } from 'react-redux'
import search from './../../../../store/actions/search'
import './SearchForm.scss'

class SearchForm extends Component {
  render() {
    return (
      <div>
        <form className="container form-search">
          <input className="js--search" type="text" placeholder="Search for a movie, tv show, person..." onKeyUp={ e => {
            this.props.search(e.currentTarget.value)
          }}></input>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchTerm: state.search.searchTerm,
  movies: state.search.movies
})

const mapDispatchToProps = dispatch => {
  return {
    search: searchTerm => {
      dispatch(search(searchTerm))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchForm)