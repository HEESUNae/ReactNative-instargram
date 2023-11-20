import { FeedInfo } from '../../@types/FeedInfo';
import {
  CREATE_FEED_SUCCESS,
  FAVORITE_FEED_SUCCESS,
  GET_FEED_LIST_SUCCEES,
  TypeFeedListActions,
} from '../actions/feed';

export type TypeFeedListReducer = {
  list: FeedInfo[];
};

const initState: TypeFeedListReducer = {
  list: [],
};

export const feedListReducer = (state: TypeFeedListReducer = initState, action: TypeFeedListActions) => {
  switch (action.type) {
    case GET_FEED_LIST_SUCCEES:
      return { ...state, list: action.list };
    case CREATE_FEED_SUCCESS:
      return { ...state, list: state.list.concat([action.item]) };
    case FAVORITE_FEED_SUCCESS:
      return {
        ...state,
        list: state.list.map((item) => {
          if (action.feedId === item.id) {
            return {
              ...item,
              likeHistory:
                action.action === 'add'
                  ? item.likeHistory.concat([action.myId])
                  : item.likeHistory.filter((item) => item !== action.myId),
            };
          }
          return { ...item };
        }),
      };
  }

  return { ...state };
};
