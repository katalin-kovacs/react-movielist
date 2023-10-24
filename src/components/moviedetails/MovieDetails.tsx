import React from "react";

import { Modal, Typography } from "antd";
import { Movie } from "../../types/types";

interface IProps {
  title: string;
  onClose: () => void;
  movie: Movie;
}

const { Paragraph, Title } = Typography;

function MovieDetails(props: IProps): JSX.Element {
  const { title, onClose, movie } = props;

  return (
    <Modal
      width={"50vw"}
      title={title}
      open
      onOk={onClose}
      onCancel={onClose}
      destroyOnClose
    >
      <div style={{ display: "flex" }}>
        <img
          alt={movie.title}
          src={movie.coverURL}
          style={{ height: "400px", marginRight: "20px" }}
        />
        <div>
          <Title level={4} style={{ marginBottom: "0px" }}>
            {movie.title}
          </Title>
          <Paragraph>{movie.date}</Paragraph>

          <Paragraph type="secondary">
            {movie.genres.join(", ")}
          </Paragraph>
          <Paragraph type="secondary">Rating: {movie.rating}</Paragraph>
          <Paragraph type="secondary">Type: {movie.type}</Paragraph>
        </div>
      </div>
    </Modal>
  );
}

export default MovieDetails;
