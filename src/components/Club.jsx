import React from 'react';
import PropTypes from 'prop-types';

function Club(props){
  return (
    <div style={{borderStyle: 'solid',
      borderWidth: '2px',
      borderColor: 'black',
      padding: '30px',backgroundColor: '#33C4FF', height: '400px'}}>
      <h5><strong>Name: </strong>{props.name}</h5>
      <h5><strong>Years Active: </strong>{props.brand}</h5>
      <h5><strong>About Club: </strong>{props.alc}%</h5>
    </div>
  );
}

Club.propTypes = {
  name: PropTypes.string,
  years: PropTypes.string,
  about: PropTypes.string,
};

export default Club;
