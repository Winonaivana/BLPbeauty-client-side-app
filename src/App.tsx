import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="register" element={<Register></Register>} />
      </Routes>
    </>
  );
}

export default App;
