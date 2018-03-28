import React, { Component } from 'react';
import Forms from './containers/Forms'
import { connect } from 'react-redux'
import RandomWord from './components/RandomWord'
import RhymingWords from './components/RhymingWords'
import KimsThought from './components/KimsThought'

class App extends Component {

  render() {
    return (
      <div style={{"textAlign": "center"}}>
        <h1>WordFinder!</h1>
        <Forms />
        <RandomWord />
        <RhymingWords />
        <KimsThought />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    randomWord: state.randomWord,
    rhymingWord: state.rhymingWord,
    kimsThought: state.kimsThought
  }
}

export default connect(mapStateToProps)(App);
