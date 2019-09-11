import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {connect} from 'react-redux';
import {buyItem} from '../actions/index.js';
const AdditionalFeatures = props => {
  let theStore = props.state.store;
  // console.log(theStore);

const buyItem = (item) => {
    // dipsatch an action here to add an item
  props.buyItem(item);
};


  return (
    <div className="content">
      <h4>Additional Features</h4>
      {theStore.length ? (
        <ol type="1">
          {theStore.map(items => (
            <AdditionalFeature key={items.id} feature={items} buyItem={buyItem}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};
const mapStateToProps = state => {
  return{
    state
  };
};
export default connect(mapStateToProps, {buyItem})(AdditionalFeatures);
