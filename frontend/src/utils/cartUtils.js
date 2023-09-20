export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
};


export const updateCart = (state) => {
    // calculate items price
    state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0));
    //calculate shipping price if total price is less than 100 then shipping price is 10 else 0
    state.shippingPrice = addDecimals(state.totalPrice > 100 ? 0 : 10);
    // calculate tax price 15% of items price
    state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));
    // calculate total price
    state.totalPrice = (Number(state.itemsPrice) + Number(state.shippingPrice) + Number(state.taxPrice)).toFixed(2);

    localStorage.setItem("cart", JSON.stringify(state));

    return state;
};