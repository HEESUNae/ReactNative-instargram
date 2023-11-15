import { UserInfo } from '../../@types/UserInfo';
import { FeedInfo } from '../../@types/feedInfo';
import { TypeUserInfoThunkActions } from '../actions/user';

export type TypeUserInfoReducer = {
  userInfo: UserInfo | null;
  myFeedList: FeedInfo[];
};

const initState: TypeUserInfoReducer = {
  userInfo: null,
  myFeedList: [],
};

export const userInfoReducer = (state: TypeUserInfoReducer = initState, action: TypeUserInfoThunkActions) => {
  return { ...state };
};
