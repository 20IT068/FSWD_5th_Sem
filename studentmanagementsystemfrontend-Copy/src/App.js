import "./App.css";
import Student from "./components/Student";
import StudentList from "./components/StudentList";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyAlert from "./components/MyAlert";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);

  let showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
