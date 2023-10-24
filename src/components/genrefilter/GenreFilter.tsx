import React from "react";
import OrderBy from "../orderby/OrderBy";

import { Button, Divider, Space } from "antd";
import {useAtom} from "jotai";
import {genres} from "../../App";


function GenreFilter(): JSX.Element {
    const [genreList] = useAtom(genres);
  return (
    <>
      <Space
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: "24px",
        }}
      >
        <Space size={[8, 16]} wrap>
          {genreList.map((genre, index) => (
            <Button type="text" key={index}>
              {genre}
            </Button>
          ))}
        </Space>
        <OrderBy />
      </Space>
      <Divider />
    </>
  );
}

export default GenreFilter;
