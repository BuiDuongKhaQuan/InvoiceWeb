import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/User/Register";
import Login from "./pages/User/Login";
import ForgotPassword from "./pages/User/ForgotPassword";
import Home from "./pages/User/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
