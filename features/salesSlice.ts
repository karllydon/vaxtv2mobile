import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {setMessage} from './messageSlice';
import apiCall from './apiCall';

export const getVaxSales = createAsyncThunk(
  'vaxSales/',
  async (token: string, thunkAPI) => {
    try {
      const data = await apiCall(token, 'vax_sales_30');
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

export const getVaxSalesToday = createAsyncThunk(
  'vaxSalesToday/',
  async (token: string, thunkAPI) => {
    try {
      const data = await apiCall(token, 'vax_sales_today');
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

export const getVaxBestsellers = createAsyncThunk(
  'vaxBestsellers/',
  async (token: string, thunkAPI) => {
    try {
      const data = await apiCall(token, 'vax_bestsellers');
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

export const getCarelineSales = createAsyncThunk(
  'carelineSales/',
  async (token: string, thunkAPI) => {
    try {
      const data = await apiCall(token, 'careline_sales_30');
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

export const getCarelineSalesToday = createAsyncThunk(
  'carelineSalesToday/',
  async (token: string, thunkAPI) => {
    try {
      const data = await apiCall(token, 'careline_sales_today');
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

export const getCarelineBestsellers = createAsyncThunk(
  'carelineBestsellers/',
  async (token: string, thunkAPI) => {
    try {
      const data = await await apiCall(token, 'careline_bestsellers');
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

export const getExcelData = createAsyncThunk(
  'excelData/',
  async (token: string, thunkAPI) => {
    try {
      const data = await await apiCall(token, 'xl');
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

export interface salesState {
  vaxData: any;
  vaxDataToday: any;
  vaxBestsellers: any;
  carelineData: any;
  carelineDataToday: any;
  carelineBestsellers: any;
  excelData: any;
  hasVaxData: boolean;
  hasVaxDataToday: boolean;
  hasVaxBestsellers: boolean;
  hasCarelineData: boolean;
  hasCarelineDataToday: boolean;
  hasCarelineBestsellers: boolean;
  hasExcelData: boolean;
}

const initialState: salesState = {
  vaxData: {},
  vaxDataToday: {},
  vaxBestsellers: {},
  carelineData: {},
  carelineDataToday: {},
  carelineBestsellers: {},
  excelData: {},
  hasVaxData: false,
  hasVaxDataToday: false,
  hasVaxBestsellers: false,
  hasCarelineData: false,
  hasCarelineDataToday: false,
  hasCarelineBestsellers: false,
  hasExcelData: false,
};

const salesSlice = createSlice({
  name: 'sales',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getVaxSales.fulfilled, (state, action) => {
      state.vaxData = action.payload;
      state.hasVaxData = true;
    });
    builder.addCase(getVaxSales.rejected, state => {
      state.vaxData = {};
      state.hasVaxData = false;
    });
    builder.addCase(getVaxSalesToday.fulfilled, (state, action) => {
      state.vaxDataToday = action.payload;
      state.hasVaxDataToday = true;
    });
    builder.addCase(getVaxSalesToday.rejected, state => {
      state.vaxDataToday = {};
      state.hasVaxDataToday = false;
    });
    builder.addCase(getVaxBestsellers.fulfilled, (state, action) => {
      state.vaxBestsellers = action.payload;
      state.hasVaxBestsellers = true;
    });
    builder.addCase(getVaxBestsellers.rejected, state => {
      state.vaxBestsellers = {};
      state.hasVaxBestsellers = false;
    });
    builder.addCase(getCarelineSales.fulfilled, (state, action) => {
      state.carelineData = action.payload;
      state.hasCarelineData = true;
    });
    builder.addCase(getCarelineSales.rejected, state => {
      state.carelineData = {};
      state.hasCarelineData = false;
    });
    builder.addCase(getCarelineSalesToday.fulfilled, (state, action) => {
      state.carelineDataToday = action.payload;
      state.hasCarelineDataToday = true;
    });
    builder.addCase(getCarelineSalesToday.rejected, state => {
      state.carelineDataToday = {};
      state.hasCarelineDataToday = false;
    });
    builder.addCase(getCarelineBestsellers.fulfilled, (state, action) => {
      state.carelineBestsellers = action.payload;
      state.hasCarelineBestsellers = true;
    });
    builder.addCase(getCarelineBestsellers.rejected, state => {
      state.carelineBestsellers = {};
      state.hasCarelineBestsellers = false;
    });
    builder.addCase(getExcelData.fulfilled, (state, action) => {
      state.excelData = action.payload;
      state.hasExcelData = true;
    });
    builder.addCase(getExcelData.rejected, state => {
      state.excelData = {};
      state.hasExcelData = false;
    });
  },
});

const {reducer} = salesSlice;
export default reducer;
