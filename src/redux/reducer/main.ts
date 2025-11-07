import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface MainState {
    cart: [],
}

const initialState: MainState = {
    cart: [],
};

export const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<any>) => {
            const itemInCart: any = state.cart.find((item: any) => item.id == action.payload.id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.cart.push({...action.payload,quantity:1})
            }
            
        },
        removeFromCart: (state, action: PayloadAction<any>) => {
            const removeFromCart = state.cart.filter((item: any) => item.id !== action.payload.id);
            state.cart = removeFromCart;
        },
        incrementQuantity: (state, action: PayloadAction<any>) => {
            const itemInCart = state.cart.find((item: any) => item.id == action.payload.id);
            itemInCart.quantity++;
        },
        decrementQuantity: (state: any, action: PayloadAction<any>) => {
            const itemInCart: any = state.cart.find((item: any) => item.id == action.payload.id);
            if (itemInCart.quantity == 1) {
                const removeFromCart = state.cart.filter((item: any) => item.id !== action.payload.id);
                state.cart = removeFromCart;
            } else {
                itemInCart.quantity--;
            }

        }
    },
});

export const {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity
} = cart.actions;

export default cart.reducer;
