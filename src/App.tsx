import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./scenes/Register/register";
import Login from "./scenes/Login/login";
import Book from "./scenes/Books/book";
import BookDetail from "./scenes/Book/BookDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/book" element={<Book></Book>} />
        <Route path="/book/:id" element={<BookDetail></BookDetail>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
