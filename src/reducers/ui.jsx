import { SET_LOADING } from "../actions/type";

const initialValue = {
  loading: false,
};

export const uiReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};
