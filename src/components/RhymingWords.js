import React from 'react';
import { connect } from 'react-redux'
import IndividualWord from './IndividualWord'

const RhymingWord = (props) => {
    const rhymeList = props.rhymingWords ? props.rhymingWords.map( (word, i) => {
      return (<IndividualWord word={word} key={i} />)}) : null

  return(
    <div>
      <h3>{props.rhymingWords ? 'Rhyming Words:' : null}</h3>
      {rhymeList}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    rhymingWords: state.rhymingWords[0]
  }
}

export default connect(mapStateToProps)(RhymingWord);
