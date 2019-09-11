import React from 'react';
import { connect } from 'react-redux';



const Total = props => {
  let additionalP = props.state.additionalPrice;
  let price = props.state.car.price;
  // console.log(additionalP);
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
export default connect(mapStateToProps, {})(Total);
