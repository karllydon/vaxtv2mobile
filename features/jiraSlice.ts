import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {setMessage} from './messageSlice';
import apiCall from './apiCall';

export const getJiraSprintDetails = createAsyncThunk(
  'jiraSprint/',
  async (token: string, thunkAPI) => {
    try {
      const data = await apiCall(token, 'jira_sprint_details');
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

export const getJiraBacklogDetails = createAsyncThunk(
  'jiraBacklog/',
  async (token: string, thunkAPI) => {
    try {
      const data = await apiCall(token, 'jira_backlog_details');
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

export const getJiraBurndownDetails = createAsyncThunk(
  'jiraBurndown/',
  async (token: string, thunkAPI) => {
    try {
      const data = await apiCall(token, 'jira_burndown');
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

export const getJiraDevDetails = createAsyncThunk(
  'jiraDevs/',
  async (token: string, thunkAPI) => {
    try {
      const data = await apiCall(token, 'jira_dev_open_tickets');
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

export const getJiraDtnDetails = createAsyncThunk(
  'jiraDtn/',
  async (token: string, thunkAPI) => {
    try {
      const data = await apiCall(token, 'jira_dtn_open_tickets');
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

export interface jiraState {
  sprintData: any;
  backlogData: any;
  burndownData: any;
  devData: any;
  dtnData: any;
  hasSprintData: boolean;
  hasBacklogData: boolean;
  hasBurndownData: boolean;
  hasDevData: boolean;
  hasDtnData: boolean;
}

const initialState: jiraState = {
  sprintData: {},
  backlogData: {},
  burndownData: {},
  devData: {},
  dtnData: {},
  hasSprintData: false,
  hasBacklogData: false,
  hasBurndownData: false,
  hasDevData: false,
  hasDtnData: false,
};

const jiraSlice = createSlice({
  name: 'jira',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getJiraSprintDetails.fulfilled, (state, action) => {
      state.sprintData = action.payload;
      state.hasSprintData = true;
    });
    builder.addCase(getJiraSprintDetails.rejected, state => {
      state.sprintData = {};
      state.hasSprintData = false;
    });

    builder.addCase(getJiraBacklogDetails.fulfilled, (state, action) => {
      state.backlogData = action.payload;
      state.hasBacklogData = true;
    });
    builder.addCase(getJiraBacklogDetails.rejected, state => {
      state.backlogData = {};
      state.hasBacklogData = false;
    });

    builder.addCase(getJiraBurndownDetails.fulfilled, (state, action) => {
      state.burndownData = action.payload;
      state.hasBurndownData = true;
    });
    builder.addCase(getJiraBurndownDetails.rejected, state => {
      state.burndownData = {};
      state.hasBurndownData = false;
    });

    builder.addCase(getJiraDevDetails.fulfilled, (state, action) => {
      state.devData = action.payload;
      state.hasDevData = true;
    });
    builder.addCase(getJiraDevDetails.rejected, state => {
      state.devData = {};
      state.hasDevData = false;
    });
    builder.addCase(getJiraDtnDetails.fulfilled, (state, action) => {
      state.dtnData = action.payload;
      state.hasDtnData = true;
    });
    builder.addCase(getJiraDtnDetails.rejected, state => {
      state.dtnData = {};
      state.hasDtnData = false;
    });
  },
});

const {reducer} = jiraSlice;
export default reducer;
