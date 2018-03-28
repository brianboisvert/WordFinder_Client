import React from 'react';
import { connect } from 'react-redux';

const Errors = (props) => {
  console.log(props);
  return(
    <div style={{"color": "red"}}>
      {props.error ? props.error : null}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    error: state.addError[0]
  }
}

export default connect(mapStateToProps)(Errors);
