import React from "react";
import { Form, Input, InputNumber, Button } from "antd";
import "../styles/AddBook.scss";
import { adding } from "../api/API";
import { useNavigate } from "react-router-dom";

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

export default function AddBook() {

  const navigate = useNavigate();

  const onFinish = async(values) => {

    // const res = async(book) => {
      const data = await adding(values.book);
      console.log(data)
    // };

    navigate("/home")

  };

  return (
    <div className="addbook" style={{marginTop: 20}}>
      <Form
      {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["book", "bookName"]}
          label="Book Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["book", "description"]}
          label="Description"
          rules={[{ required: true }]}
        >
        <Input.TextArea  />
        </Form.Item>
        <Form.Item
          name={["book", "yearOfPublication"]}
          label="Year of publication"
          rules={[{ type: "number", min: 1000, max: 2022, required: true }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={["book", "bookType"]}
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
