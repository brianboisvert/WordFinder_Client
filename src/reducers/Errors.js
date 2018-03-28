export function addError(state = [], action) {
  switch(action.type) {
    case 'ADD_ERROR':
      return [action.payload];
    default:
      return state
  }
}
