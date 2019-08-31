import React from "react";
import { List } from "antd";

import ProductItem from "../ProductItem/ProductItem";

export default ({ products, addToCart }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={products}
      rowKey= { item => item.name}
      renderItem={item => <ProductItem item={item} addToCart={addToCart} />}
    />
  );
};
