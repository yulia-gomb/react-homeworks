import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormData {
    username: string;
    password: string;
}

interface FormErrors {
    username: string;
    password: string;
}

interface LoginState {
    formData: FormData;
    errors: FormErrors;
}

const initialState: LoginState = {
    formData: { username: '', password: '' },
    errors: { username: '', password: '' },
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setFormData(state, action: PayloadAction<{ name: string; value: string }>) {
            const { name, value } = action.payload;
            state.formData[name as keyof FormData] = value;

            if (value.trim()) {
                state.errors[name as keyof FormErrors] = '';
            }
        },
        setErrors(state, action: PayloadAction<FormErrors>) {
            state.errors = action.payload;
        },
        resetForm(state) {
            state.formData = { username: '', password: '' };
            state.errors = { username: '', password: '' };
        },
    },
});

export const { setFormData, setErrors, resetForm } = loginSlice.actions;

export default loginSlice.reducer;
