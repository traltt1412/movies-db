// const search = term => {
//   return {
//     type: 'search',
//     payload: term,
//     movies: null
//   }
// }

const search = searchTerm => {
  return dispatch => {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=249bfd842941339e51fe3d4eaeeba219&query=${searchTerm}`)
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