import "./Product.css";

const Products = (props) => {
  return (
    <div className="product">
      <h3>{props.name}</h3>
      <div className="price">{props.price}</div>
    </div>
  );
};
export default Products;
