import { GET_ALLCATEGORY, CATEGORY_ERROR } from "../actions/types";

const initialState = {
  data: [],
  error: null,
};

const category = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALLCATEGORY:
      return {
        ...state,
        data: payload,
        error: null,
      };
    case CATEGORY_ERROR:
      return {
        ...state,
        error: "Something went wrong",
        data: [],
      };

    default:
      return state;
  }
};

export default category;
