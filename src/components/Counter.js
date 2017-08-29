import React from 'react';
import PropTypes from 'prop-types';


export default function Counter(props) {
  Counter.propTypes = {
    currentVal: PropTypes.number
  }

  return (
    <div>
      {props.currentVal > 0 &&
      <div onClick={()=> props.updateCounter('dec')}>minus one</div>}
      <div>
        {props.currentVal}
      </div>
      <div onClick={() => props.updateCounter('inc')}>plus one</div>
    </div>
  );
}
