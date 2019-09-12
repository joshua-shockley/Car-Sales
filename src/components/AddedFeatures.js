import React from 'react';
import AddedFeature from './AddedFeature';
import { connect } from 'react-redux';
import {removeFeature} from '../actions/index.js';

const AddedFeatures = props => {


  let car = props.state.car;
  let theStore= props.state.store;



  
const removeFeature = (item) => {
  console.log('its working!!!');
  props.removeFeature(item);
};



  console.log(car);
  return (
    <div className="content">
      <h6>Added features:</h6>
      {car.features.length ? (
        <ol type="1">
          {car.features.map(item => (
            <AddedFeature 
            key={item.id} 
            feature={item} 
            removeFeature={removeFeature}
            />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};
const mapStateToProps = state => {
  return{
    state
  }
};
export default connect(mapStateToProps, {removeFeature})(AddedFeatures);
