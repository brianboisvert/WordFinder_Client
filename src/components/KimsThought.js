import React from 'react';
import {connect} from 'react-redux';

const KimsThought = (props) => {
const allImgs = ["kim2.png", "kim3.gif", "kim5.png", "kim6.png"]
const thought = props.firstThought ? props.firstThought.phrase : null
const word = props.firstThought ? props.currentWord.word + '!!!' : null
const img = props.firstThought ? props.firstThought.image : null
const imgage = props.firstThought ? allImgs[Math.floor(Math.random() * allImgs.length)]
 : null


  return(
    <div>
      <h3>{word}</h3>
      {thought}<br></br>
      <div className="kim">
        <img src={imgage} />
      </div>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    firstThought: state.kimsThought[0],
    currentWord: state.currentWord[0]
  }
}

export default connect(mapStateToProps)(KimsThought);
