export function currentWord(state = [], action) {
  switch(action.type) {
    case 'CURRENT_WORD':
      return [action.payload];
    default:
      return state
  }
}
