import React from 'react';

const IndividualWord = (props) => {
  console.log(props);
  return(
    <div>
      {props ? props.word : null}
    </div>
  )
}

export default IndividualWord;
