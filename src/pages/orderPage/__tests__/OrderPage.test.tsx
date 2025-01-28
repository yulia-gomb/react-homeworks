import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import OrderPage from "../OrderPage";
import store from "../../../store/store";
import {BrowserRouter} from "react-router";






describe('OrderPage', () => {
    it('should render component', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <OrderPage />
                </BrowserRouter>
            </Provider>
        );

        expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
    });
});