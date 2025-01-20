import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface MenuItemType {
    id: string;
    meal: string;
    category: string;
    img: string;
    price: number;
    instructions: string;
}

interface MenuState {
    menuItems: MenuItemType[];
    loading: boolean;
    error: string | null;
    selectedCategory: string | null;
    visibleItemsCount: number;
}

const API_URL = "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals";

export const fetchMenuItems = createAsyncThunk<MenuItemType[]>(
    'menu/fetchMenuItems',
    async () => {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch menu items');
        }
        return response.json();
    }
);

const initialState: MenuState = {
    menuItems: [],
    loading: false,
    error: null,
    selectedCategory: null,
    visibleItemsCount: 6,
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setSelectedCategory(state, action: PayloadAction<string>) {
            state.selectedCategory = action.payload;
            state.visibleItemsCount = 6;
        },
        incrementVisibleItemsCount(state) {
            state.visibleItemsCount += 6;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMenuItems.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMenuItems.fulfilled, (state, action) => {
                state.loading = false;
                state.menuItems = action.payload;
                state.selectedCategory = action.payload.length > 0 ? action.payload[0].category : null;
            })
            .addCase(fetchMenuItems.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch menu items';
            });
    },
});

export const { setSelectedCategory, incrementVisibleItemsCount } = menuSlice.actions;

export default menuSlice.reducer;
