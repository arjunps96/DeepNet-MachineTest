import axios from "axios";
import { GET_PRODUCTS, PRODUCT_ERROR } from "./types";

export const getProducts = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/subcategory/${id}`);

    dispatch({ type: GET_PRODUCTS, payload: res.data });
  } catch (err) {
    dispatch({ type: PRODUCT_ERROR });
  }
};
