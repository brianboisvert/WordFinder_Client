export function randomWord(state = [], action) {
  switch(action.type) {
    case 'RANDOM_WORD':
      return [action.payload];
    case 'CLEAR_WORD_STATE':
      return [action.payload]
    default:
      return state
  }
}
