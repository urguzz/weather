import { createSlice } from '@reduxjs/toolkit';

export interface Test2State {
    test: string
}

const initialState: Test2State = {
    test: "test2String"
};

export const testSlice = createSlice({
    name: 'test2',
    initialState,
    reducers: {
        setTest: (state, action) => {
            state.test = action.payload;
        }
    }
});

export default testSlice.reducer;