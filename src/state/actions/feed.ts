import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { FeedInfo } from '../../@types/FeedInfo';
import { sleep } from '../../utils/sleep';
import { RootReducer } from '../store';

// 액션함수 - feedList
export const GET_FEED_LIST_REQUEST = 'GET_FEED_LIST_REQUEST' as const;
export const GET_FEED_LIST_SUCCEES = 'GET_FEED_LIST_SUCCEES' as const;
export const GET_FEED_LIST_FAILURE = 'GET_FEED_LIST_FAILURE' as const;

export const getFeedListRequest = () => ({ type: GET_FEED_LIST_REQUEST });
export const getFeedListSuccess = (list: FeedInfo[]) => ({ type: GET_FEED_LIST_SUCCEES, list });
export const getFeedListFailure = () => ({ type: GET_FEED_LIST_FAILURE });

// 액션함수 - createFeed
export const CREATE_FEED_REQUEST = 'CREATE_FEED_REQUEST' as const;
export const CREATE_FEED_SUCCESS = 'CREATE_FEED_SUCCESS' as const;
export const CREATE_FEED_FAILURE = 'CREATE_FEED_FAILURE' as const;

export const createFeedRequest = () => ({ type: CREATE_FEED_REQUEST });
export const createFeedSuccess = (item: FeedInfo) => ({
  type: CREATE_FEED_SUCCESS,
  item,
});
export const createFeedFailure = () => ({ type: CREATE_FEED_FAILURE });

// 액션함수 - favoriteFeed
export const FAVORITE_FEED_REQUEST = 'FAVORITE_FEED_REQUEST' as const;
export const FAVORITE_FEED_SUCCESS = 'FAVORITE_FEED_SUCCESS' as const;
export const FAVORITE_FEED_FAILURE = 'FAVORITE_FEED_FAILURE' as const;

export const favoriteFeedRequest = () => ({ type: FAVORITE_FEED_REQUEST });
export const favoriteFeedSuccess = (feedId: FeedInfo['id'], myId: string, action: 'add' | 'del') => ({
  type: FAVORITE_FEED_SUCCESS,
  feedId,
  myId,
  action,
});
export const favoriteFeedFailure = () => ({ type: FAVORITE_FEED_FAILURE });

export const getFeedList = (): TypeFeedListThunkAction => async (dispatch) => {
  dispatch(getFeedListRequest());
  await sleep(500);
  dispatch(
    getFeedListSuccess([
      {
        id: 'id 01',
        content: 'content_01',
        writer: {
          name: 'heesun',
          uid: 'uid_heesun',
        },
        imageUrl: 'https://docs.expo.dev/static/images/tutorial/background-image.png',
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
        imageUrl: 'https://docs.expo.dev/static/images/tutorial/background-image.png',
        likeHistory: ['like01', 'like02'],
        createAt: new Date().getTime(),
      },
      {
        id: 'id 03',
        content: 'content_03',
        writer: {
          name: 'heesun',
          uid: 'uid_heesun',
        },
        imageUrl: 'https://docs.expo.dev/static/images/tutorial/background-image.png',
        likeHistory: ['like01'],
        createAt: new Date().getTime(),
      },
    ])
  );
};

export const createFeed =
  (item: Omit<FeedInfo, 'id' | 'writer' | 'createAt' | 'likeHistory'>): TypeFeedListThunkAction =>
  async (dispatch, getState) => {
    dispatch(createFeedRequest());

    const createAt = new Date().getTime();
    const userInfo = getState().userInfo.userInfo;

    await sleep(200);
    dispatch(
      createFeedSuccess({
        id: 'ID-010',
        content: item.content,
        writer: {
          name: userInfo?.name ?? '',
          uid: userInfo?.uid ?? '',
        },
        imageUrl: item.imageUrl,
        likeHistory: [],
        createAt: createAt,
      })
    );
  };

export const favoriteFeed =
  (item: FeedInfo): TypeFeedListThunkAction =>
  async (dispatch, getState) => {
    dispatch(favoriteFeedRequest());

    // 로그인 확인 여부
    const myId = getState().userInfo.userInfo?.uid || null;
    if (myId === null) {
      dispatch(favoriteFeedFailure());
      return;
    }

    await sleep(500);

    const hasMyId = item.likeHistory.some((likeUserId) => likeUserId === myId);
    dispatch(favoriteFeedSuccess(item.id, myId, hasMyId ? 'del' : 'add'));
  };

// dispatch Type
export type TypeFeedListDispatch = ThunkDispatch<RootReducer, undefined, TypeFeedListActions>;

// thunkAction Type
export type TypeFeedListThunkAction = ThunkAction<void, RootReducer, undefined, TypeFeedListActions>;

// action Type
export type TypeFeedListActions =
  | ReturnType<typeof getFeedListRequest>
  | ReturnType<typeof getFeedListSuccess>
  | ReturnType<typeof getFeedListFailure>
  | ReturnType<typeof createFeedRequest>
  | ReturnType<typeof createFeedSuccess>
  | ReturnType<typeof createFeedFailure>
  | ReturnType<typeof favoriteFeedRequest>
  | ReturnType<typeof favoriteFeedSuccess>
  | ReturnType<typeof favoriteFeedFailure>;
