import "./App.css";
import Home from "./component/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import AddBook from "./component/AddBook";
import Navbar from '../src/component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addbook" element={<AddBook />} />
      </Routes>
    </div>
  );
}

export default App;
