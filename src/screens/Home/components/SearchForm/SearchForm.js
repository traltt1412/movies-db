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

      // return fetch(`https://api.themoviedb.org/3/search/movie?api_key=249bfd842941339e51fe3d4eaeeba219&query=${searchTerm}`)
      // .then(response => response.json().then(body => ({response, body})))
      // .then(({ response, body }) => {
      //   if (response.ok) {
      //     console.log(body)
      //   } else {
      //     console.log('fail')
      //     console.log(response)
      //   }
      // })
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchForm)