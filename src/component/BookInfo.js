import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Card } from "antd";
import "../styles/BookInfo.scss";

export default function BookInfo() {
  const params = useParams();

  const [book, setBook] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // axios
    //   .get(`http://localhost:8080/${params.Id}`)
    //   .then((response) => {
    //     setBook(response.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // setLoading(false);
  }, []);

  return (
    <div className="book-info">
      <div className="site-card-border-less-wrapper">
        <Card
          title={book ? book.bookName : null}
          bordered={true}
          style={{ width: 500 }}
          loading={loading}
        >
          <p>Description: {book ? book.description : null}</p>
          <p>yearOfPublication: {book ? book.yearOfPublication : null}</p>
          <p>Type: {book ? book.bookType : null}</p>
          <div className="book-info-button">
            <Button type="primary"><Link to={{pathname: `/edit/${book? book.bookId : null}`}}>Edit</Link></Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
