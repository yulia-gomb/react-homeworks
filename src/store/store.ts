import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menuSlice';
import cartReducer from './cartSlice';
import loginReducer from './loginSlice';


const store = configureStore({
    reducer: {
        menu: menuReducer,
        cart: cartReducer,
        login: loginReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
