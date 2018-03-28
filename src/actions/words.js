//POST REQUESTS
export function postWord(word) {
  return (dispatch) => {
    return fetch('http://localhost:3000/word_inputs', {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({word: word.word})
    })
      .then(res => res.json())
      .then(data => {
        dispatch({type: 'ALL_WORDS', payload: data})
      })
  }
}
export function findRhyme(word) {
  return (dispatch) => {
    fetch('http://localhost:3000/rhymes', {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({word: word.word})
    })
    .then(res=>res.json())
    .then(data => {
      dispatch({type: 'RHYMING_WORD', payload: data})
    })
  }
}

//GET REQUESTS
export function randomWord() {
  return (dispatch) => {
    return fetch('http://localhost:3000/word_inputs/random', {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(res => res.json())
      .then(data => {
        dispatch({type: 'RANDOM_WORD', payload: data})
      })
    }
}

export function kimsThought() {
  return (dispatch) => {
    return fetch('http://localhost:3000/kims_thoughts/real_talk', {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(res => res.json())
      .then(data => {dispatch({type: 'KIMS_THOUGHT', payload: data})})
    }
}

//CLEAR ALL STATES
export function clearWords() {
  return (dispatch) => {
    return fetch('http://localhost:3000/word_inputs/delete_all', {
      method: 'DELETE',
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
  }
}

export function clearWordState() {
  return {type: 'CLEAR_WORD_STATE', payload: null}
}

export function clearRhymingWords() {
  return {type: 'CLEAR_RHYMING_WORDS', payload: null}
}

export function clearAllWords() {
  return {type: 'CLEAR_ALL_WORDS', payload: null}
}

export function clearKimsThought() {
  return {type: 'CLEAR_KIMS_THOUGHT', payload: null}
}

export function clearCurrentWord() {
  return {type: 'CLEAR_CURRENT_WORD', payload: null}
}

export function addErrorforRandom() {
  return {type: "ADD_ERROR", payload: "Please enter at least two words" }
}

export function addGeneralError() {
  return {type: "ADD_ERROR", payload: "Please enter a word" }
}

//NO fetch
export function currentWord(word) {
  return {type: 'CURRENT_WORD', payload: word}
}
