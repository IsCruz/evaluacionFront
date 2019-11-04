import React from 'react';
import '../../styles/jumbotron.css';

const Jumbotron = (props) => {
 return(
<div className="jumbotron">
    <div >
      <h1>{props.title}</h1>
      <h5>{props.subtitle}</h5>
    </div>
  </div>
 );
};

export default Jumbotron;