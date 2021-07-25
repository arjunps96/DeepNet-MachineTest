import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import store from "./store/store";
import Category from "./components/Category/Category";
import Subcategory from "./components/Subcategory/SubCategory";
import ProductItem from "./components/Products/ProductItem";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Category} />
          <Route exact path="/:id" component={Subcategory} />
          <Route exact path="/products/:id" component={ProductItem} />
          <Route path="*">
            <h2>No Page Found</h2>
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
