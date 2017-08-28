import React from 'react';

export default function Counter(props) {
  console.log('in counter: ', props);


  return (
    <div>
      <div onClick={target => props.updateCounter(target)}>minus one</div>
      <div>
        {props.currentVal}
      </div>
      <div onClick={target => props.updateCounter(target)}>plus one</div>
    </div>
  );
}
