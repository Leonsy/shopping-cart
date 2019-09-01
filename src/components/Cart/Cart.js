import React from "react";
import { Table, Button } from "antd";
import * as R from "ramda";
import { currencyFormatter } from "../../utils/formatter";

const totalPriceForAll = cartItems => {
  return R.pipe(
    R.map(R.prop("totalPrice")),
    R.sum
  )(cartItems);
};

export default ({ cartItems, removeFromCart }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Price",
      dataIndex: "unitPrice",
      key: "unitPrice",
      render: price => currencyFormatter(price)
    },
    {
      title: "Quantity",
      dataIndex: "amount",
      key: "amount"
    },
    {
      title: "Total",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: price => currencyFormatter(price)
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <Button onClick={() => removeFromCart(record.name)}>Remove</Button>
        </span>
      )
    }
  ];

  return (
    <Table
      pagination={false}
      columns={columns}
      dataSource={cartItems}
      rowKey={item => item.name}
      footer={() => <h3>Total: {currencyFormatter(totalPriceForAll(cartItems))}</h3>}
    />
  );
};
