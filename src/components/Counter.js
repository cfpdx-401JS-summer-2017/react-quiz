import React from 'react';

export default function Counter(props) {
  console.log('in counter: ', props);


  return (
    <div>
      <div onClick={()=> props.updateCounter(props.currentVal)}>minus one</div>
      <div>
        {props.currentVal}
      </div>
      <div onClick={() => props.updateCounter(props.currentVal)}>plus one</div>
    </div>
  );
}
