import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function EditBook() {

  const pramas = useParams();

  const [book, setBook] = useState();
  const [loading, setLoading] = useState(true);

  console.log(pramas)

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
    <div className='edit-book'>Edit</div>
  )
}
