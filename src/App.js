import logo from "./logo.svg";
import "./App.css";
import Signup from "./Signup";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
