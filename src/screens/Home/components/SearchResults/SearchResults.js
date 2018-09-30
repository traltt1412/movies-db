import React, { Component } from 'react'
import './SearchResults.scss'
import SearchResultsItem from '../SearchResultsItem/SearchResultsItem'

export default class SearchResults extends Component {
  constructor (props) {
    super (props)
    this.posterPath = 'https://image.tmdb.org/t/p/w92_and_h138_bestv2'
  }

  render() {
    const results = []
    if (this.props.data.results) {
      this.props.data.results.forEach((e) => {
        const row = <SearchResultsItem key={e.id} data={e}></SearchResultsItem>
        results.push(row)
      })
    }
    return (
      <div className="container search-results">
        { results }
      </div>
    );
  }
}