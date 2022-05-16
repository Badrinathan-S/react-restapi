import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Input, InputNumber, Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { adding } from "../api/API";

export default function EditBook() {


  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };
  
  const validateMessages = {
    required: "${label} is required!",
    types: {
      number: "${label} is not a valid number!",
    },
    number: {
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

  }

  const [book, setBook] = useState(initialState);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  

  const onFinish = async(values) => {
    // console.log(values.book);

    // const res = async(book) => {
      // const data = await adding(values.book);
      console.log(values)
    // };

    // navigate("/home")

  };

  

  useEffect(() => {
    axios
      .get(`http://localhost:8080/${pramas.Id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="edit-book">
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
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
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
