import React, { Component } from 'react'
import { connect } from 'react-redux'
import Layout from '../../components/Layout/Layout';
import SearchForm from './components/SearchForm/SearchForm';
import SearchResults from './components/SearchResults/SearchResults';

import './Home.scss'
class Home extends React.Component {
  render () {
    return (
      <Layout>
        <SearchForm></SearchForm>
        <SearchResults data={ this.props.movies }></SearchResults>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  searchTerm: state.search.searchTerm,
  movies: state.search.movies
})

export default connect(
  mapStateToProps,
)(Home)