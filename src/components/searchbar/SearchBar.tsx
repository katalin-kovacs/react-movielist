import React from "react";

import { Input, Typography } from "antd";

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

function SearchBar() {
  return (
    <div
      style={{
        height: "25vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography.Title level={1} style={{ color: "#fff" }}>
        Find your movie or show
      </Typography.Title>
      <Search
        placeholder="Input movie or show title"
        allowClear
        enterButton="Search"
        onSearch={onSearch}
      />
    </div>
  );
}

export default SearchBar;
