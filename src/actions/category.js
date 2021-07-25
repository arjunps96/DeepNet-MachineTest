import axios from "axios";
import { GET_ALLCATEGORY, CATEGORY_ERROR } from "./types";

/**
 *
 * Dispatch action to get all category
 */
export const getAllCategory = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/category");

    dispatch({ type: GET_ALLCATEGORY, payload: res.data });
  } catch (err) {
    dispatch({ type: CATEGORY_ERROR });
  }
};
