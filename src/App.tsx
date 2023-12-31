import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./scenes/Register/register";
import Login from "./scenes/Login/login";
import Book from "./scenes/Books/book";
import BookDetail from "./scenes/Books/BookDetail";
import AddBook from "./scenes/Books/AddBook";
import EditBook from "./scenes/Books/EditBook";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/book" element={<Book></Book>} />
        <Route path="/book/:id" element={<BookDetail></BookDetail>} />
        <Route path="/book/add" element={<AddBook></AddBook>} />
        <Route path="/book/edit/:id" element={<EditBook></EditBook>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
