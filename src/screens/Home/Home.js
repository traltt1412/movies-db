import React from 'react'
import Layout from '../../components/Layout/Layout';
import SearchForm from './components/SearchForm/SearchForm';
import SearchResults from './components/SearchResults/SearchResults';

import './Home.scss'
export default class Home extends React.Component {
  render () {
    console.log(this.props)
    return (
      <Layout>
        <SearchForm></SearchForm>
        <SearchResults></SearchResults>
      </Layout>
    )
  }
}