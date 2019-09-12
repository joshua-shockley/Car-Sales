import React from 'react';
import { connect } from 'react-redux';
import {totalPrice} from '../actions/index.js'


const Total = props => {
  let additionalP = props.state.additionalPrice;
  let price = props.state.car.price;
  console.log(props);
  // console.log(price);

  return (
    <div className="content">
      <h4>Total Amount: ${price + additionalP}</h4>
    </div>
  );
};
const mapStateToProps = state => {
  return{
    state
  }
};
export default connect(mapStateToProps, {totalPrice})(Total);
