export default class Config {
  constructor () {
    this.key = '249bfd842941339e51fe3d4eaeeba219'
    
  }

  getConfigURL () {
    return `https://api.themoviedb.org/3/configuration?api_key=${this.key}`
  }

  getMoviesURL (searchTerm = '') {
    return `https://api.themoviedb.org/3/search/movie?api_key=${this.key}&query=${searchTerm}`
  }
}