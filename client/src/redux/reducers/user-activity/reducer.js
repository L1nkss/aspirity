import ActionType from './constants/constants';

const initialState = {
  loading: false,
  error: false,
  userActivity: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_USER_ACTIVITY_REQUEST:
      return { ...state, loading: true, error: false };

    case ActionType.GET_USER_ACTIVITY_SUCCESS:
      return { ...state, loading: false, userActivity: action.payload };

    case ActionType.GET_USER_ACTIVITY_ERROR:
      return { ...state, loading: false, error: true };

    case ActionType.ADD_NEW_USER_ACTIVITY_SUCCESS:
      return { ...state, loading: false, userActivity: [...state.userActivity, action.payload] };

    case ActionType.DELETE_USER_ACTIVITY:
      return { ...state, userActivity: action.payload };

    case ActionType.CHANGE_USER_ACTIVITY:
      return { ...state, userActivity: action.payload };

    default:
      return state;
  }
};
