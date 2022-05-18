import React, { useEffect, useState } from "react";
import { Form, Input, InputNumber, Button, Skeleton } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { adding, viewing } from "../api/API";

export default function EditBook() {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };

  const validateMessages = {
    // eslint-disable-next-line
    required: "${label} is required!",
    types: {
      // eslint-disable-next-line
      number: "${label} is not a valid number!",
    },
    number: {
      // eslint-disable-next-line
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const pramas = useParams();

  const initialState = {
    bookId: 0,
    bookName: "",
    bookType: "",
    description: "",
    yearOfPublication: 0,
  };

  const [book, setBook] = useState(initialState);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const onFinish = async (values) => {
    // console.log(values.book);

    // const res = async(book) => {
      const data = await adding(values);
      console.log(data);
    // };

    navigate("/home")
  };
  const res = async (id) => {
    const data = await viewing(id);
    const initialState = {
      bookId: data.bookId,
      bookName: data.bookName,
      bookType: data.bookType,
      description: data.description,
      yearOfPublication: data.yearOfPublication,
    };
    setBook(initialState);
    setLoading(false);

  };

  useEffect(() => {
    res(pramas.Id);

    // axios
    //   .get(`http://localhost:8080/${pramas.Id}`)
    //   .then((response) => {
    //     setBook(response.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // setLoading(false);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="edit-book" style={{ marginTop: 20 }}>
      <Skeleton loading={loading}>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
          initialValues={{
            bookId: book.bookId,
            bookName: book.bookName,
            description: book.description,
            bookType: book.bookType,
            yearOfPublication: book.yearOfPublication,
          }}
        >
          <Form.Item
            name="bookId"
            label="Book ID"
            rules={[{ required: true }]}
            hidden={true}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="bookName"
            label="Book Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="yearOfPublication"
            label="Year of publication"
            rules={[{ type: "number", min: 1000, max: 2022, required: true }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="bookType"
            label="Book Type"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
      </Skeleton>
    </div>
  );
}
