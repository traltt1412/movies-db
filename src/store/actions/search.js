import MoviesAPI from "./../../services/api/movieDB"

const search = searchTerm => {
  return dispatch => {
    const moviesAPI = new MoviesAPI ()
    return fetch(moviesAPI.getMoviesURL(searchTerm))
      .then(response => response.json().then(body => ({response, body})))
      .then(({ response, body }) => {
        if (response.ok) {
          dispatch ({
            type: 'search',
            payload: searchTerm,
            movies: body
          })
        } else {
          console.log('fail')
        }
      })
  }
}


export default search