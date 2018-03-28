import React from 'react';
import { postWord, randomWord, clearWords, findRhyme, kimsThought, clearWordState, clearRhymingWords, clearAllWords, clearKimsThought, currentWord, addErrorforRandom, addGeneralError } from '../actions/words'
import { connect } from 'react-redux';
import Errors from '../components/Errors'

class Forms extends React.Component {

  state = {
    word: '',
    showErrors: false
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.postWord(this.state);
    event.target.reset();
  }

  handleRandom = (event) => {
    event.preventDefault();
    if (this.props.allWords.length < 2) {
      this.setState({
        ["showErrors"]: true
      });
      this.props.addErrorforRandom();
      this.props.clearKimsThought();
      this.props.clearRhymingWords();
      // alert("Enter two or more words")
    } else {
      this.setState({
        ["showErrors"]: false
      });
      this.props.randomWord();
      this.props.clearKimsThought();
      this.props.clearRhymingWords();
    }
  }

  handleClearWords = (event) => {
    event.preventDefault();
    this.setState({
      ["showErrors"]: false
    });
    this.props.clearWords();
    this.props.clearWordState();
    this.props.clearRhymingWords();
    this.props.clearAllWords();
    this.props.clearKimsThought();
  }

  handleRhyme = (event) => {
    event.preventDefault();
    if (this.state.word === "") {
      this.setState({
        ["showErrors"]: true
      });
      this.props.clearKimsThought();
      this.props.clearWordState();
    } else {
      this.setState({
        ["showErrors"]: false
      });
      this.props.findRhyme(this.state);
      this.props.clearWordState();
      this.props.clearKimsThought();
    }
  }

  handleKim = (event) => {
    event.preventDefault();
    if (this.state.word === "") {
      this.setState({
        ["showErrors"]: true
      });
      this.props.clearRhymingWords();
      this.props.clearWordState();
    } else {
      this.setState({
        ["showErrors"]: false
      });
    this.props.currentWord(this.state);
    this.props.kimsThought();
    this.props.clearRhymingWords();
    this.props.clearWordState();
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="word" onChange={this.handleChange} />
          <input type="submit" />
        </form>
        <button onClick={this.handleRandom}>
          Click for a random word
        </button>
        <button onClick={this.handleClearWords}>
          Click to clear all words
        </button>
        <button onClick={this.handleRhyme}>
          Click for rhyming words
        </button>
        <button onClick={this.handleKim}>
          Click to see what Kim thinks
        </button><br /><br />
        {this.state.showErrors ? <Errors /> : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    givenWord: state.randomWord,
    allWords: state.allWords
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postWord: (word) => {dispatch(postWord(word))},
    randomWord: () => {dispatch(randomWord())},
    clearWords: () => {dispatch(clearWords())},
    findRhyme: (word) => {dispatch(findRhyme(word))},
    kimsThought: () => {dispatch(kimsThought())},
    clearWordState: () => {dispatch(clearWordState())},
    clearRhymingWords: () => {dispatch(clearRhymingWords())},
    clearAllWords: () => {dispatch(clearAllWords())},
    clearKimsThought: () => {dispatch(clearKimsThought())},
    currentWord: (word) => {dispatch(currentWord(word))},
    addErrorforRandom: () => {dispatch(addErrorforRandom())},
    addGeneralError: () => {dispatch(addGeneralError())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
