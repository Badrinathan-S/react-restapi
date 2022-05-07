import React, { useState, useEffect } from "react";
import { Table, Space } from "antd";
import axios from "axios";

const columns = [
  {
    title: "Book Name",
    dataIndex: "bookName",
    key: "bookName",
    render: (text) => <a href="http://localhost:8080/home">{text}</a>,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Year of publication",
    dataIndex: "yearOfPublication",
    key: "yearOfPublication",
  },
  {
    title: "Type",
    dataIndex: "bookType",
    key: "bookType",
  },
  {
    title: "Action",
    key: 4,
    render: (record) => (
      <Space size="middle">
        <a href="google.com">Invite {record.name}</a>
        <a href="google.com">Delete</a>
      </Space>
    ),
  },
];

// const data = [
//   {
//     key: 1,
//     bookName: "John Brown",
//     description: 32,
//     yearOfPublication: "New York No. 1 Lake Park",
//     bookType: 2002,
//   },
//   {
//     key: 2,
//     bookName: "Jim Green",
//     description: 42,
//     yearOfPublication: "London No. 1 Lake Park",
//     bookType: 2022,
    
//   },
//   {
//     key: 3,
//     bookName: "Joe Black",
//     description: 32,
//     yearOfPublication: "Sidney No. 1 Lake Park",
//     bookType: 2022,
//   },
// ]

export default function BookTable() {

  const [bookList, setBookList] = useState([])
 
  useEffect(() => {
    
    axios.get("http://localhost:8080/home").then((response) => {
      setBookList(response.data);
    })
    .catch((err) => {
      console.log(err);
    })
    
  }, []);
  return (
    <div>
      <Table columns={columns} dataSource={bookList} />;
    </div>
  );
}
