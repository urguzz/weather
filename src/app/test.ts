import { createSlice } from '@reduxjs/toolkit';

export interface TestState {
    test: string
}

const initialState: TestState = {
    test: "testString"
};

export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        setTest: (state, action) => {
            state.test = action.payload;
        }
    }
});

export default testSlice.reducer;