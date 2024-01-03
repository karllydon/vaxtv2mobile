import {configureStore} from '@reduxjs/toolkit';
import messageReducer from './features/messageSlice';
import tokenStoreReducer from './features/tokenStoreSlice';
import jiraReducer from './features/jiraSlice';
import salesReducer from './features/salesSlice';
import statsReducer from './features/statsSlice';

export const store = configureStore({
  reducer: {
    message: messageReducer,
    tokenStore: tokenStoreReducer,
    jira: jiraReducer,
    sales: salesReducer,
    stats: statsReducer,
  },
  devTools: true,
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
