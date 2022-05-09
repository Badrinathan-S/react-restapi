import "./App.css";
import Home from "./component/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import AddBook from "./component/AddBook";
import BookInfo from "./component/BookInfo";
import Navbar from '../src/component/Navbar';
import EditBook from "./component/EditBook";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/:Id" element={<BookInfo />} />
        <Route path="/edit/:Id" element={<EditBook />} />
      </Routes>
    </div>
  );
}

export default App;
