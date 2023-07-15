import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./scenes/Register/register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register></Register>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
