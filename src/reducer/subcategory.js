import { GET_SUBCATEGORY, SUBCATEGORY_ERROR } from "../actions/types";
const initialState = {
  data: {},
  error: null,
};

const category = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_SUBCATEGORY:
      return {
        ...state,
        data: payload.data,
        error: null,
      };
    case SUBCATEGORY_ERROR:
      return {
        ...state,
        error: "Something went wrong",
        data: {},
      };

    default:
      return state;
  }
};

export default category;
