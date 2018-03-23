export function rhymingWords(state = [], action) {
  switch(action.type) {
    case 'RHYMING_WORD':
      return [action.payload];
    case 'CLEAR_RHYMING_WORDS':
      return [action.payload]
    default:
      return state
  }
}
