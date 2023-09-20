import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : {cartItems: []};


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x.product === item.product);
            if (existItem) {
                state.cartItems = state.cartItems.map((x) => x.product === existItem.product ? item : x);
            } else {
                state.cartItems = [...state.cartItems, item];
            }
            localStorage.setItem("cart", JSON.stringify(state));
        }
    }
});

export default cartSlice.reducer;