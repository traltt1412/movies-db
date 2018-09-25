import React from 'react'
import './Home.scss'
import Layout from '../../components/Layout/Layout';
import SearchForm from './components/SearchForm/SearchForm';
import SearchResults from './components/SearchResults/SearchResults';

export default class Home extends React.Component {
  render () {
    return (
      <Layout>
        <SearchForm></SearchForm>
        <SearchResults></SearchResults>
      </Layout>
    )
  }
}