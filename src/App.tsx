import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./scenes/Register/register";
import Login from "./scenes/Login/login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
