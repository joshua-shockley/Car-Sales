import React from 'react';

const AddedFeature = props => {
  // console.log(props);



  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.removeFeature(props.feature)} className="button">X</button>
      <div className="added_values" >{props.feature.name}</div>
      <span className="added_values" >{props.feature.price}</span>
    </li>
  );
};

export default AddedFeature;
