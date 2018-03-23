export function allWords(state = [], action) {
  switch(action.type) {
    case 'ALL_WORDS':
      return [...state, action.payload];
    case 'CLEAR_ALL_WORDS':
      return []
    default:
      return state
  }
}
