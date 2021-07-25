import { Link } from "react-router-dom";

import "./item.css";

const Item = (props) => {
  return (
    <div className="item">
      <Link style={{ textDecoration: "none" }} to={`/${props.id}`}>
        {props.name}
        <span className="badge">{props.productCount}</span>
      </Link>
    </div>
  );
};

export default Item;
