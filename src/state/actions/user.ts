import { sleep } from '../../utils/sleep';
import { ThunkAction } from 'redux-thunk';
import { RootReducer } from '../store';
import { FeedInfo } from '../../@types/feedInfo';

export const SET_USER_INFO = 'SET_USER_INFO' as const;
export const GET_MY_FEED_REQUEST = 'GET_MY_FEED_REQUEST' as const;
export const GET_MY_FEED_SUCCESS = 'GET_MY_FEED_SUCCESS' as const;
export const GET_MY_FEED_FAILURE = 'GET_MY_FEED_FAILURE' as const;

export const setUserInfo = (userId: string) => {
  return {
    type: SET_USER_INFO,
    userId,
  };
};
export const getMyFeedRequest = () => {
  return {
    type: GET_MY_FEED_REQUEST,
  };
};
export const getMyFeedSuccess = (list: FeedInfo[]) => {
  return {
    type: GET_MY_FEED_SUCCESS,
    list,
  };
};
export const getMyFeedFailure = () => {
  return {
    type: GET_MY_FEED_FAILURE,
  };
};

export const signIn = (): TypeUserInfoThunkAction => async (dispatch) => {
  await sleep(1000);
  dispatch(setUserInfo('TEST'));
};

export const getMyFeedList = (): TypeUserInfoThunkAction => async (dispatch) => {
  dispatch(getMyFeedRequest());
  await sleep(500);
  dispatch(
    getMyFeedSuccess([
      {
        id: 'id 01',
        content: 'content_01',
        writer: {
          name: 'heesun',
          uid: 'uid_heesun',
        },
        imageUrl: 'image_url',
        likeHistory: ['like01', 'like02', 'like03'],
        createAt: new Date().getTime(),
      },
      {
        id: 'id 02',
        content: 'content_02',
        writer: {
          name: 'heesun',
          uid: 'uid_heesun',
        },
        imageUrl: 'image_url',
        likeHistory: ['like01', 'like02', 'like03'],
        createAt: new Date().getTime(),
      },
      {
        id: 'id 03',
        content: 'content_03',
        writer: {
          name: 'heesun',
          uid: 'uid_heesun',
        },
        imageUrl: 'image_url',
        likeHistory: ['like01', 'like02', 'like03'],
        createAt: new Date().getTime(),
      },
    ])
  );
};

export type TypeUserInfoThunkAction = ThunkAction<void, RootReducer, undefined, TypeUserInfoThunkActions>;
export type TypeUserInfoThunkActions =
  | ReturnType<typeof setUserInfo>
  | ReturnType<typeof getMyFeedRequest>
  | ReturnType<typeof getMyFeedSuccess>
  | ReturnType<typeof getMyFeedFailure>;
