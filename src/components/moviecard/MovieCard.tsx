import React, { useState } from "react";
import { Movie } from "../../types/types";

import { Card, Typography } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import MovieForm, {IMovieFormValues} from "../movie-form/MovieForm";
import MovieDetails from "../moviedetails/MovieDetails";

const { Paragraph, Text, Title } = Typography;

interface IProps {
  movie: Movie;
}

function MovieCard(props: IProps): JSX.Element {
  const { movie } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShowMovieModalOpen, setIsShowMovieModalOpen] = useState(false);

  const handleUpdateMovie = (values: IMovieFormValues) => {
    console.log("Movie or show added");
    console.log(values);
    setIsModalOpen(false);
  };

  const handleDelete = (id: number) => {
    console.log("Delete item with id: ", id);
  };

  return (
    <Card
      hoverable={true}
      cover={<img alt={movie.title} src={movie.coverURL} />}
      actions={[
        <EditOutlined key="edit" onClick={() => setIsModalOpen(true)} />,
        <DeleteOutlined key="delete" onClick={() => handleDelete(movie.id)} />,
      ]}
    >
      <div
        onClick={() => setIsShowMovieModalOpen(true)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Paragraph
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            flexWrap: "wrap",
          }}
        >
          <Title level={4} style={{ marginBottom: "0px" }}>
            {movie.title}
          </Title>
          <Text>{movie.date}</Text>
        </Paragraph>
        <Text type="secondary">{movie.genres.join(", ")}</Text>
        <Text type="secondary">Rating: {movie.rating}</Text>
        <Text type="secondary">Type: {movie.type}</Text>
      </div>

        {isModalOpen && (
            <MovieForm
                title="Edit Movie or Show"
                onSubmit={handleUpdateMovie}
                onCancel={() => setIsModalOpen(false)}
                movie={movie}
            />
        )}

      {isShowMovieModalOpen && (
          <MovieDetails
              title="Movie or Show details"
              onClose={() => setIsShowMovieModalOpen(false)}
              movie={movie}
          />
      )}
    </Card>
  );
}

export default MovieCard;
