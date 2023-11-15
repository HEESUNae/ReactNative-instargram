import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { feedListReducer } from './reducers/FeedList';
import { userInfoReducer } from './reducers/UserInfo';

const rootReducer = combineReducers({
  feedList: feedListReducer,
  userInfo: userInfoReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
