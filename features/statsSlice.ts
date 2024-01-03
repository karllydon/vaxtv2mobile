import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {setMessage} from './messageSlice';
import apiCall from './apiCall';

export const getUsersInfo = createAsyncThunk(
  'usersInfo/',
  async (token: string, thunkAPI) => {
    try {
      const data = await apiCall(token, 'usersInfo');
      return {data: data};
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getStatusScreenshot = createAsyncThunk(
  'screenshot/',
  async (token: string, thunkAPI) => {
    try {
      const screenshot = await apiCall(token, 'screenshot');
      return screenshot;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export interface statsState {
  screenshot: any;
  usersInfo: any;
  hasScreenShot: boolean;
  hasUsersInfo: boolean;
}

const initialState: statsState = {
  screenshot: null,
  usersInfo: {},
  hasScreenShot: false,
  hasUsersInfo: false,
};

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUsersInfo.fulfilled, (state, action) => {
      state.usersInfo = action.payload;
      state.hasUsersInfo = true;
    });
    builder.addCase(getUsersInfo.rejected, state => {
      state.usersInfo = {};
      state.hasUsersInfo = false;
    });
    builder.addCase(getStatusScreenshot.fulfilled, (state, action) => {
      state.screenshot = action.payload;
      state.hasScreenShot = true;
    });
    builder.addCase(getStatusScreenshot.rejected, state => {
      state.usersInfo = {};
      state.hasUsersInfo = false;
    });
  },
});

const {reducer} = statsSlice;
export default reducer;
