const search = term => {
  return {
    type: 'search',
    payload: term,
  }
}