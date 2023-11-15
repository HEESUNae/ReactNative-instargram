import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { TypeFeedListReducer, feedListReducer } from './reducers/FeedList';
import { TypeUserInfoReducer, userInfoReducer } from './reducers/UserInfo';

const rootReducer = combineReducers({
  feedList: feedListReducer,
  userInfo: userInfoReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;

// RootReducer Type
export type RootReducer = { userInfo: TypeUserInfoReducer; feedList: TypeFeedListReducer };
