import SubItem from "./SubItem";

import "./SubItemList.css";

const SubItemList = (props) => {
  return (
    <ul>
      {props.subcategory.map((category) => (
        <li key={category._id}>
          <SubItem
            name={category.name}
            id={category._id}
            productCount={category.products.length}
          />
        </li>
      ))}
    </ul>
  );
};
export default SubItemList;
