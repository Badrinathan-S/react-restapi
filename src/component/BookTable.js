import React, { useState, useEffect } from "react";
import { Table, Space } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Book Name",
    dataIndex: "bookName",
    key: "bookName",
    render: (text, record) => <Link to={{pathname: `/${record.bookId}`}} >{text}</Link>,
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
    key: "action",
    render: (record) => (
      <Space size="middle">
        <Link to={{pathname: "/"}}>Edit</Link>
        <Link to={{pathname: "/"}}>Delete</Link>
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
  const [loading, setLoading] = useState(true)
 
  useEffect(() => {
    
    axios.get("http://localhost:8080/home").then((response) => {
      setBookList(response.data);
    })
    .catch((err) => {
      console.log(err);
    })
    setLoading(false);
    
  }, []);
  return (
    <div>
      <Table columns={columns} dataSource={bookList}  loading={loading}/>;
    </div>
  );
}
