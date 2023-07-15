import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Book = {
  title: string;
  description: string;
  image: string;
  rating: number;
  categoryId: number;
  finishDate: Date;
  startDate: Date;
};

const Book = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState([]);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/");
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const getBooks = async () => {
    await fetch("https://bookie-api.onrender.com/book", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setBook(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (!book) {
    console.log("theres an error");
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      <button onClick={handleLogout}>logout</button>
      {book.map((book: Book) => {
        return <div>{book.title}</div>;
      })}
    </div>
  );
};

export default Book;
