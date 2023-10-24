import React, { useState } from "react";
import { Layout, Button, Space } from "antd";

import AppIcon from "../appicon/AppIcon";
import SearchBar from "../searchbar/SearchBar";
import MovieForm, {IMovieFormValues} from "../movie-form/MovieForm";

const { Header } = Layout;


function AppHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddMovie = (values: IMovieFormValues) => {
    console.log("Movie or show added");
    console.log(values);
    setIsModalOpen(false);
  };

  return (
    <Header
      style={{
        height: "35vh",
      }}
    >
      <Space
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <AppIcon />
        <Button type="primary" onClick={() => setIsModalOpen(true)}>
          + Add movie or show
        </Button>

          {isModalOpen && (
              <MovieForm
                  title="Add Movie or Show"
                  onSubmit={handleAddMovie}
                  onCancel={() => setIsModalOpen(false)}
              />
          )}
      </Space>
      <SearchBar />
    </Header>
  );
}

export default AppHeader;
