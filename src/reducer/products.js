import { GET_PRODUCTS, PRODUCT_ERROR } from "../actions/types";
const initialState = {
  data: {},
  error: null,
};

const category = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        data: payload.data,
        error: null,
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        error: "Something Went Wrong",
        data: {},
      };

    default:
      return state;
  }
};

export default category;
