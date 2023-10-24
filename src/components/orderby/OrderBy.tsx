import React from "react";

import { Select } from "antd";

const { Option } = Select;

const orderByOptions = ["Title", "Release date"];

function OrderBy() {
  return (
    <Select
      defaultValue={orderByOptions[0]}
      style={{ width: 120 }}
      bordered={false}
    >
      {orderByOptions.map((option, index) => (
        <Option key={index} value={option}>
          {option}
        </Option>
      ))}
    </Select>
  );
}

export default OrderBy;
