import React from 'react';
import { connect } from 'react-redux'

const RandomWord = (props) => {

  return(
    <div>
      {props.randomWord && props.randomWord[0] ? props.randomWord[0].word : null}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    randomWord: state.randomWord[0]
  }
}

export default connect(mapStateToProps)(RandomWord);
