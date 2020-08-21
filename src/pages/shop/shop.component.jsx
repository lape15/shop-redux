import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../category/collection.component";
const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.url}`} component={CollectionOverview} />
    </div>
  );
};

export default ShopPage;
