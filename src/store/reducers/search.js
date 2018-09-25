const initState = {
  searchTerm: '',
  movies: ''
}



export default function(state = initState, action) {
  switch (action.type) {
    case 'search':
      state = { ...state, searchTerm: action.payload, movies: action.movies }
  }
  console.log (state)
  return state
}