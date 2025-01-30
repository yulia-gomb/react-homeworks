import cartReducer, { addToCart, updateQuantity, removeFromCart, clearCart, setFormData, setErrors, CartState, CartItem, FormData, Errors } from "../cartSlice";


describe('cartSlice', () => {
    const initialState: CartState = {
        items: [],
        formData: { street: '', house: '' },
        errors: { street: '', house: '' },
    };

    it('should return the initial state on first run', () => {
        expect(cartReducer(undefined, { type: '@@init' })).toEqual(initialState);
    });

    describe('reducers', () => {
        it('should handle addToCart', () => {
            const newItem: CartItem = { id: "1", meal: "Pizza", img: "image.png", price: 10, quantity: 1 };
            const stateAfterAdding = cartReducer(initialState, addToCart(newItem));
            expect(stateAfterAdding.items.length).toEqual(1);
            expect(stateAfterAdding.items[0]).toEqual(newItem);

            const stateAfterAddingSame = cartReducer(stateAfterAdding, addToCart({ ...newItem, quantity: 2 }));
            expect(stateAfterAddingSame.items[0].quantity).toEqual(3);
        });

        it('should handle updateQuantity', () => {
            const item: CartItem = { id: "1", meal: "Pizza", img: "image.png", price: 10, quantity: 1 };
            const updatedState = cartReducer({ ...initialState, items: [item] }, updateQuantity({ id: "1", quantity: 3 }));
            expect(updatedState.items[0].quantity).toEqual(3);
        });

        it('should handle removeFromCart', () => {
            const item: CartItem = { id: "1", meal: "Pizza", img: "image.png", price: 10, quantity: 1 };
            const stateWithItem = { ...initialState, items: [item] };
            const newState = cartReducer(stateWithItem, removeFromCart("1"));
            expect(newState.items.length).toEqual(0);
        });

        it('should handle clearCart', () => {
            const stateWithItems: CartState = {
                ...initialState,
                items: [{ id: "1", meal: "Pizza", img: "image.png", price: 10, quantity: 1 }]
            };
            const clearedState = cartReducer(stateWithItems, clearCart());
            expect(clearedState.items.length).toEqual(0);
        });

        it('should handle setFormData', () => {
            const formData: FormData = { street: "Main St", house: "123" };
            const newState = cartReducer(initialState, setFormData(formData));
            expect(newState.formData).toEqual(formData);
        });

        it('should handle setErrors', () => {
            const errors: Errors = { street: "Required", house: "Required" };
            const newState = cartReducer(initialState, setErrors(errors));
            expect(newState.errors).toEqual(errors);
        });
    });
});
