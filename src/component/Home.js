import React from 'react';
import Navbar from './Navbar';
import BookTable from './BookTable';

export default function Home() {
  return (
    <div className='book-store'>
      <Navbar />
      <BookTable/>
    </div>
  )
}
