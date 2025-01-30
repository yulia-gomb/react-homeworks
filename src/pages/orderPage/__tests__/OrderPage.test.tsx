import React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import OrderPage from "../OrderPage";
import { BrowserRouter } from "react-router";
import cartReducer, { CartState } from "../../../store/cartSlice";
import { configureStore } from "@reduxjs/toolkit";
import { ORDER_CONFIRMATION_PATH } from "../../../contstants/constants";


function renderComponent(initialCartState: any): RenderResult {
    const store = configureStore({
        reducer: {
            cart: cartReducer
        },
        preloadedState: {
            cart: initialCartState
        }
    });

    return render(
        <Provider store={store}>
            <BrowserRouter>
                <OrderPage />
            </BrowserRouter>
        </Provider>
    );
}

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));


describe('OrderPage', () => {
    it('should render component', () => {
        const initialState: CartState = {
            items: [],
            formData: { street: '', house: '' },
            errors: { street: '', house: '' }
        };

        const { getByText } = renderComponent(initialState);

        expect(getByText(/Your cart is empty/i)).toBeInTheDocument();
    });

    it('should display cart items correctly', () => {
        const initialState: CartState = {
            items: [
                { id: '1', meal: 'Pizza', img: 'link_to_image', price: 10, quantity: 4 }
            ],
            formData: { street: '123 Pizza St', house: '12A' },
            errors: { street: '', house: '' }
        };

        const { getByText, getByDisplayValue } = renderComponent(initialState);

        expect(getByDisplayValue(/4/)).toBeInTheDocument();
        expect(getByText('Pizza')).toBeInTheDocument();
        expect(getByText(/\$ 10.00 USD/)).toBeInTheDocument();
    });

    it('should contain all necessary elements', () => {
        const initialState: CartState = {
            items: [
                { id: '1', meal: 'Pizza', img: 'link_to_image', price: 10, quantity: 2 }
            ],
            formData: { street: '123 Pizza St', house: '12A' },
            errors: { street: '', house: '' }
        };

        const { getByText, getByPlaceholderText } = renderComponent(initialState);

        expect(getByText('Finish your order')).toBeInTheDocument();
        expect(getByPlaceholderText('Street')).toBeInTheDocument();
        expect(getByPlaceholderText('House')).toBeInTheDocument();
        expect(getByText('Order')).toBeInTheDocument();
        expect(getByText('Total:')).toBeInTheDocument();
    });

    it('should allow modifying quantity of items in cart', () => {
        const initialState: CartState = {
            items: [
                { id: '1', meal: 'Pizza', img: 'link_to_image', price: 10, quantity: 2 }
            ],
            formData: { street: '123 Pizza St', house: '12A' },
            errors: { street: '', house: '' }
        };

        const { getByDisplayValue, getByText } = renderComponent(initialState);
        const quantityInput = getByDisplayValue('2') as HTMLInputElement;
        fireEvent.change(quantityInput, { target: { value: '3' } });

        expect(quantityInput.value).toBe('3');
        expect(getByText(/\$ 30.00 USD/)).toBeInTheDocument();
    });

    it('should display errors when form data is invalid', () => {
        const initialState: CartState = {
            items: [
                { id: '1', meal: 'Pizza', img: 'link_to_image', price: 10, quantity: 2 }
            ],
            formData: { street: '', house: '' },
            errors: { street: 'Street is required', house: 'House is required' }
        };

        const { getByText } = renderComponent(initialState);

        expect(getByText('Street is required')).toBeInTheDocument();
        expect(getByText('House is required')).toBeInTheDocument();
    });

    it('should allow removing an item from the cart', () => {
        const initialState: CartState = {
            items: [
                { id: '1', meal: 'Pizza', img: 'link_to_image', price: 10, quantity: 2 }
            ],
            formData: { street: '123 Pizza St', house: '12A' },
            errors: { street: '', house: '' }
        };

        const { getByText, queryByText } = renderComponent(initialState);

        expect(getByText('Pizza')).toBeInTheDocument();

        const removeButton = getByText('X');
        fireEvent.click(removeButton);

        expect(queryByText('Pizza')).toBeNull();
    });

    it('should allow modifying the quantity of an item in the cart', () => {
        const initialState: CartState = {
            items: [
                { id: '1', meal: 'Pizza', img: 'link_to_image', price: 10, quantity: 2 }
            ],
            formData: { street: '123 Pizza St', house: '12A' },
            errors: { street: '', house: '' }
        };

        const { getByDisplayValue, getByText } = renderComponent(initialState);

        const quantityInput = getByDisplayValue('2') as HTMLInputElement;
        expect(quantityInput.value).toBe('2');

        fireEvent.change(quantityInput, { target: { value: '3' } });

        expect(quantityInput.value).toBe('3');

        expect(getByText(/\$ 30.00 USD/)).toBeInTheDocument();
    });

    it('should submit with valid form data and navigate to confirmation page', () => {
        const initialState = {
            items: [{ id: '1', meal: 'Pizza', img: 'test_image.png', price: 10, quantity: 1 }],
            formData: { street: '123 Test St', house: '1A' },
            errors: { street: '', house: '' }
        };

        const { getByPlaceholderText, getByRole } = renderComponent(initialState);

        const streetInput = getByPlaceholderText('Street');
        const houseInput = getByPlaceholderText('House');
        const orderButton = getByRole('button', { name: 'Order' });

        fireEvent.change(streetInput, { target: { value: '123 Test St' } });
        fireEvent.change(houseInput, { target: { value: '540B' } });
        fireEvent.click(orderButton);

        expect(mockNavigate).toHaveBeenCalledWith(ORDER_CONFIRMATION_PATH, {
            state: {
                orderId: expect.any(Number),
                deliveryAddress: '123 Test St, 540B',
            },
        });
    });


});