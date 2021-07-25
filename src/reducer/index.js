import { combineReducers } from "redux";
import Catg from "../reducer/category";
import SubCatg from "../reducer/subcategory";
import prd from "../reducer/products";

export default combineReducers({
  Catg,
  SubCatg,
  prd,
});
