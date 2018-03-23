export function kimsThought(state = [], action) {
  switch(action.type) {
    case 'KIMS_THOUGHT':
      return [action.payload];
    case 'CLEAR_KIMS_THOUGHT':
      return [action.payload]
    default:
      return state
  }
}
