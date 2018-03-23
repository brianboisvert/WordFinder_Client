import { combineReducers } from 'redux';
import { randomWord } from './RandomWord';
import { rhymingWords } from './RhymingWords'
import { allWords } from './AllWords'
import { kimsThought } from './KimsThought'
import { currentWord } from './CurrentWord'

export default combineReducers({
    randomWord,
    rhymingWords,
    allWords,
    kimsThought,
    currentWord
});
