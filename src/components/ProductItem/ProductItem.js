import React from "react";
import { List, Button } from "antd";

import { currencyFormatter } from "../../utils/formatter";

export default ({ item, addToCart }) => {
  return (
    <List.Item
      actions={[
        <Button
          type="link"
          onClick={() => {
            addToCart(item.name);
          }}
        >
          Buy
        </Button>
      ]}
    >
      <List.Item.Meta
        title={item.name}
        description={currencyFormatter(item.price)}
      />
    </List.Item>
  );
};
