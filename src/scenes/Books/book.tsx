import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const Book = (props: Props) => {
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

  getBooks();

  if (!book) {
    console.log("theres an error");
  }

  return (
    <div>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default Book;
