import { BUY_ITEM } from '../actions/index.js';
import { REMOVE_FEATURE } from '../actions/index.js';

const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image: 'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    store: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]


};

// const removeFeature = item => {
//     // dispatch an action here to remove an item
// };

// const buyItem = (e, item) => {
//     // dipsatch an action here to add an item
//     e.preventDefault();

// };


export const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case BUY_ITEM:
            return {
                ...state,
                car: {
                    ...state.car,
                    features: [...state.car.features, action.payload]
                }


            };
        case REMOVE_FEATURE:
            console.log('testing testing dudely');
            return {
                ...state,
                car: {
                    ...state.car,
                    features: [...state.car.features.filter(state.car.features.id === action.payload)]
                }
                // features: state.car.features.filter(item => item.id === action.payload ? {})
            };
        default:
            return state;
    }


};