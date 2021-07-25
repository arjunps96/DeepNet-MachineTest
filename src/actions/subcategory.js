import axios from "axios";
import { GET_SUBCATEGORY, SUBCATEGORY_ERROR } from "./types";

export const getAllSubCategory = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/category/${id}`);

    dispatch({ type: GET_SUBCATEGORY, payload: res.data });
  } catch (err) {
    dispatch({ type: SUBCATEGORY_ERROR });
  }
};
