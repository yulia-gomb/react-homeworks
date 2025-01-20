import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
    id: string;
    meal?: string;
    img?: string;
    price?: number;
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>) {
            const { id, meal, img, price, quantity } = action.payload;

            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.items.push({ id, meal, img, price, quantity });
            }
        },
    },
});

export const { addToCart } = cartSlice.actions;

export const selectCartCount = (state: { cart: CartState }) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const selectCartItems = (state: { cart: CartState }) => state.cart.items;

export default cartSlice.reducer;
