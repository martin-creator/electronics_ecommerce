import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : {cartItems: []};


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x._id === item._id);
            if (existItem) {
                state.cartItems = state.cartItems.map((x) => x._id === existItem._id ? item : x);
            } else {
                state.cartItems = [...state.cartItems, item];
            }

            // calculate total price
            state.totalPrice = state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
            //calculate shipping price
            // calculate tax price
            // calculate total price

            localStorage.setItem("cart", JSON.stringify(state));
        }
    }
});

export default cartSlice.reducer;