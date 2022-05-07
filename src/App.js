import './App.css';
import Home from './component/Home';
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path=" " render={() => <Navigate to="/home" />} />
        <Route path="/" element={<Home/>}/>
      </Routes>

    </div>
  );
}

export default App;
