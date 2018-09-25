const initState = {
  searchTerm: '',
}

export default function(state = initState, action) {
  switch (action.type) {
    case 'search':
      state = { ...state, searchTerm: action.payload }
  }
  return state
}