import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropType from "prop-types";

import ItemList from "./ItemList";
import ProductList from "../Utilities/ProductList";
import { getAllCategory } from "../../actions/category";

import "./Category.css";

const Category = ({ getAllCategory, category }) => {
  useEffect(() => {
    getAllCategory();
  }, [getAllCategory]);
  let totalCount;
  if (category.data.length !== 0) {
    if (category.data.data.length > 0) {
      const totalProductArr = category.data.data.map(
        (category) => category.products.length
      );
      totalCount = totalProductArr.reduce((acc, cur) => acc + cur);
    }
  }

  return (
    <React.Fragment>
      {category.error && (
        <div className="error">
          <h2>{category.error}</h2>
        </div>
      )}
      {!category.data ||
      category.data === null ||
      category.data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="container">
          <h3>
            All Categories <span className="badge">{totalCount}</span>
          </h3>
          <main>
            <ItemList category={category.data.data} />
            {category.data.data.map((category) => (
              <ProductList key={category._id} products={category.products} />
            ))}
          </main>
        </div>
      )}
    </React.Fragment>
  );
};

Category.propTypes = {
  category: PropType.object.isRequired,
  getAllCategory: PropType.func.isRequired,
};
const mapStateToProps = (state) => {
  return {
    category: state.Catg,
  };
};

export default connect(mapStateToProps, { getAllCategory })(Category);
