import {createSlice} from '@reduxjs/toolkit';

interface tokenState {
  token: string;
  hasToken: boolean;
}

const initialState: tokenState = {
  token: '',
  hasToken: false,
};

const tokenStoreSlice = createSlice({
  name: 'tokenStore',
  initialState,
  reducers: {
    storeToken: (state, action) => {
      return {token: action.payload, hasToken: true};
    },
    clearToken: () => {
      return {token: '', hasToken: false};
    },
  },
});

const {reducer, actions} = tokenStoreSlice;

export const {storeToken, clearToken} = actions;
export default reducer;
