import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropType from "prop-types";

import ProductList from "../Utilities/ProductList";

import { getProducts } from "../../actions/products";

const ProductItem = ({ match, products, getProducts }) => {
  const { id } = match.params;
  useEffect(() => {
    getProducts(id);
  }, [getProducts, id]);
  let totalCount;
  if (Object.keys(products.data).length > 0) {
    totalCount = products.data.products.length;
  }
  return (
    <React.Fragment>
      {products.error && (
        <div className="error">
          <h2>{products.error}</h2>
        </div>
      )}
      {Object.keys(products.data).length === 0 ? (
        <p>Loading...</p>
      ) : (
        <React.Fragment>
          <div className="container">
            <h3>
              {products.data.name} <span className="badge">{totalCount}</span>
            </h3>
            <ProductList products={products.data.products} />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
ProductItem.propTypes = {
  products: PropType.object.isRequired,
  getProducts: PropType.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    products: state.prd,
  };
};
export default connect(mapStateToProps, { getProducts })(ProductItem);
