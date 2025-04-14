import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import RouteConfig from "./routes";
import { ToastContainer } from 'react-toastify';
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <RouteConfig />
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
