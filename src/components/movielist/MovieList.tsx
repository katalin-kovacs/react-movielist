import React from "react";

import MovieCard from "../moviecard/MovieCard";
import { Movie } from "../../types/types";

import { Typography, Row, Col } from "antd";

const { Paragraph, Text } = Typography;

interface IProps {
  movies: Movie[];
}

function MovieList(props: IProps): JSX.Element {
  const { movies } = props;
  return (
    <>
      <Paragraph>
        <Text strong>{movies.length}</Text> items found
      </Paragraph>
      <Row gutter={[16, 16]}>
        {movies.map((movie) => (
          <Col key={movie.id} xs={24} sm={12} md={12} lg={6} xl={6} xxl={4}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default MovieList;
