import { FeedInfo } from '../../@types/feedInfo';
import { GET_FEED_LIST_SUCCEES, TypeFeedListActions } from '../actions/feed';

export type TypeFeedListReducer = {
  list: FeedInfo[];
};

const initState: TypeFeedListReducer = {
  list: [],
};

export const feedListReducer = (state: TypeFeedListReducer = initState, action: TypeFeedListActions) => {
  switch (action.type) {
    case GET_FEED_LIST_SUCCEES:
      return { ...state };
  }

  return { ...state };
};
