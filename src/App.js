/** @format */
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          
          <Route path='/' element={<Home />} />
          
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
