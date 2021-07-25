import Item from "./Item";

import "./ItemList.css";

const ItemList = (props) => {
  return (
    <ul>
      {props.category.map((category) => (
        <li key={category._id}>
          <Item
            name={category.name}
            id={category._id}
            productCount={category.products.length}
          />
        </li>
      ))}
    </ul>
  );
};
export default ItemList;
