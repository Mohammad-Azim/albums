import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginProvider } from "./context/LoginContext/LoginContext";
function App() {
  return (
    <>
      <LoginProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </Router>
      </LoginProvider>
    </>
  );
}

export default App;
