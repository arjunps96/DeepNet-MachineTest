import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropType from "prop-types";

import "./SubCategory.css";

import ProductList from "../Utilities/ProductList";
import SubItemList from "../Subcategory/SubItemList";

import { getAllSubCategory } from "../../actions/subcategory";

const SubCategory = ({ match, subcategory, getAllSubCategory }) => {
  const { id } = match.params;
  useEffect(() => {
    getAllSubCategory(id);
  }, [getAllSubCategory, id]);

  let totalCount;
  if (Object.keys(subcategory.data).length > 0) {
    const totalProductArr = subcategory.data.subcategory.map(
      (subcategory) => subcategory.products.length
    );
    totalCount = totalProductArr.reduce((acc, cur) => acc + cur);
  }

  return (
    <React.Fragment>
      {subcategory.error && (
        <div className="error">
          <h2>{subcategory.error}</h2>
        </div>
      )}
      {Object.keys(subcategory.data).length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="container">
          <h3>
            All Sub Categories <span className="badge">{totalCount}</span>
          </h3>
          <main>
            <SubItemList subcategory={subcategory.data.subcategory} />
            <ProductList
              key={subcategory._id}
              products={subcategory.data.products}
            />
          </main>
        </div>
      )}
    </React.Fragment>
  );
};

SubCategory.propTypes = {
  subcategory: PropType.object.isRequired,
  getAllSubCategory: PropType.func.isRequired,
};
const mapStateToProps = (state) => {
  return {
    subcategory: state.SubCatg,
  };
};

export default connect(mapStateToProps, { getAllSubCategory })(SubCategory);
