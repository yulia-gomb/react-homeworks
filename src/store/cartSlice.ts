import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "./store";

export interface CartItem {
    id: string;
    meal: string;
    img: string;
    price: number;
    quantity: number;
}

export interface FormData {
    street: string;
    house: string;
}

export interface Errors {
    street: string;
    house: string;
}

export interface CartState {
    items: CartItem[];
    formData: FormData;
    errors: Errors;
}

const initialState: CartState = {
    items: [],
    formData: { street: '', house: '' },
    errors: { street: '', house: '' },
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (existingItem) {
                existingItem.quantity += newItem.quantity;
            } else {
                state.items.push(newItem);
            }
        },
        updateQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
            const { id, quantity } = action.payload;
            const index = state.items.findIndex(item => item.id === id);
            if (index !== -1) {
                state.items[index].quantity = quantity;
            }
        },
        removeFromCart(state, action: PayloadAction<string>) {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearCart(state) {
            state.items = [];
        },
        setFormData(state, action: PayloadAction<FormData>) {
            state.formData = action.payload;
        },
        setErrors(state, action: PayloadAction<Errors>) {
            state.errors = action.payload;
        }
    },
});

export const { addToCart, updateQuantity, removeFromCart, clearCart, setFormData, setErrors } = cartSlice.actions;

export const selectCartCount = (state: { cart: CartState }) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectQuantityForItem = (state: { cart: CartState }, itemId: string) => {
    const item = state.cart.items.find(item => item.id === itemId);
    return item ? item.quantity : null;
};
export const selectFormData = (state: RootState) => state.cart.formData;
export const selectErrors = (state: RootState) => state.cart.errors;

export default cartSlice.reducer;