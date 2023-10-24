import React from "react";

import GenreFilter from "../genrefilter/GenreFilter";
import MovieList from "../movielist/MovieList";
import { Movie } from "../../types/types";

import { Layout } from "antd";

const { Content } = Layout;

interface IProps {
  movies: Movie[];
}

function AppContent(props: IProps): JSX.Element {
  const { movies } = props;
  return (
    <Content style={{ paddingRight: "50px", paddingLeft: "50px" }}>
      <GenreFilter />
      <MovieList movies={movies} />
    </Content>
  );
}

export default AppContent;
