import React from "react";
import {Modal, Form, Select, Input, DatePicker, Row, Button} from "antd";

import { Movie } from "../../types/types";
import moment, {Moment} from "moment";
import {useAtom} from "jotai";
import {genres} from "../../App";

const { Option } = Select;

interface IProps {
  title: string;
  onSubmit: (values: IMovieFormValues) => void;
  onCancel: () => void;
  movie?: Movie;
}

export interface IMovieFormValues {
  title: string;
  releaseDate: Moment;
  cover: string;
  rating: string;
  selectGenre: string[];
  type: string;
}

function MovieForm(props: IProps): JSX.Element {
  const { title, onSubmit, onCancel, movie } = props;
  const [genreList] = useAtom(genres);

  const [form] = Form.useForm<IMovieFormValues>();

  const typeList = ["Movie", "Show"];
  const initialDate = moment()
      .set({
        years: movie?.date ? parseInt(movie.date) : 2000
      })
      .startOf('years');

  return (
    <Modal
      width={'50vw'}
      title={title}
      open
      onCancel={onCancel}
      footer={<></>}
      destroyOnClose
    >
      <Form<IMovieFormValues>
        form={form}
        onFinish={onSubmit}
        initialValues={{
          title: movie?.title ?? '',
          releaseDate: initialDate,
          cover: movie?.coverURL ?? '',
          rating: movie?.rating ?? '',
          selectGenre: movie?.genres ?? [],
          type: movie?.type ?? '',
        }}
      >
        <Row style={{ justifyContent: "space-between" }}>
          <Form.Item
            label="Title"
            name="title"
            style={{ width: "45%" }}
            rules={[
              {
                required: true,
                message: "Please input a title.",
              },
            ]}
          >
            <Input
              type="text"
              placeholder="Title"
            />
          </Form.Item>

          <Form.Item
            label="Release date"
            name="releaseDate"
            style={{ width: "45%" }}
            rules={[{ required: true, message: "Please select a date." }]}
          >
            <DatePicker
              picker="year"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Row>

        <Row style={{ justifyContent: "space-between" }}>
          <Form.Item
            label="Cover URL"
            name="cover"
            style={{ width: "45%" }}
            rules={[{ required: true, message: "Please input an image URL." }]}
          >
            <Input
              type="text"
              placeholder="URL"
            />
          </Form.Item>

          <Form.Item
            label="Rating"
            name="rating"
            style={{ width: "45%" }}
            rules={[
              {
                required: true,
                message: "Please input a rating number to 1-10.",
              },
            ]}
          >
            <Input
              type="text"
              placeholder="10"
            />
          </Form.Item>
        </Row>

        <Row style={{ justifyContent: "space-between" }}>
          <Form.Item
            style={{ width: "45%" }}
            name="selectGenre"
            label="Genre"
            rules={[
              {
                required: true,
                message: "Please select at least one genre.",
                type: "array",
              },
            ]}
          >
            <Select
              mode="multiple"
              placeholder="Select genre"
            >
              {genreList.map((genre, index) => (
                <Option key={index} value={genre}>
                  {genre}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="type"
            label="Type"
            rules={[{ required: true, message: "Please select a type." }]}
            style={{ width: "45%" }}
          >
            <Select
              placeholder="Select type"
            >
              {typeList.map((type, index) => (
                <Option key={index} value={type}>
                  {type}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Row>
        <Row>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </Modal>
  );
}

export default MovieForm;
