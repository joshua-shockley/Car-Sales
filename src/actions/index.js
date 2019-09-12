export const BUY_ITEM = 'BUY_ITEM';
export const buyItem = item => {
    return { type: BUY_ITEM, payload: item };
}



export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const removeFeature = item => {
    return { type: REMOVE_FEATURE, payload: item };
}

export const TOTAL_PRICE = 'TOTAL_PRICE';
export const totalPrice = price => {
    return { type: TOTAL_PRICE, payload: price };
}