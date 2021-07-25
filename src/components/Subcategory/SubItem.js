import { Link } from "react-router-dom";

import "./SubItem.css";

const SubItem = (props) => {
  return (
    <div className="item">
      <Link style={{ textDecoration: "none" }} to={`products/${props.id}`}>
        {props.name}
        <span className="badge">{props.productCount}</span>
      </Link>
    </div>
  );
};

export default SubItem;
