import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState({
    id: null,
    title: "",
    image: "",
    rating: null,
    description: "",
    finishDate: null,
    startDate: null,
  });
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`https://bookie-api.onrender.com/book/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setBook(data);
        setDate(data.finishDate);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  const handleFinish = async () => {
    await fetch(`https://bookie-api.onrender.com/book/finish/${book.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setBook(data);
        setDate(data.finishDate);
      })
      .catch((error) => {
        console.error(error);
      });
    window.location.reload();
  };

  const handleDelete = async () => {
    await fetch(`https://bookie-api.onrender.com/book/${book.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setBook(data);
        setDate(data.finishDate);
      })
      .catch((error) => {
        console.error(error);
      });
    navigate("/book");
  };

  return (
    <div className="justify-center h-screen flex items-center">
      <div className="flex gap-4">
        <div>
          <img className="w-[200px] h-[300px]" src={book.image}></img>

          <div className="mt-4">{book.title}</div>
          {date ? (
            "Finished reading"
          ) : (
            <button
              onClick={handleFinish}
              className="border-2 border-black rounded-lg p-2 mt-4"
            >
              finish
            </button>
          )}
        </div>
        <div>
          <p>{book.description}</p>
          <Link
            className="mr-4 border-2 border-black rounded-lg p-2 mt-4"
            key={book.id}
            to={`/book/${book.id}`}
          >
            edit
          </Link>
          <button
            className="mr-4 border-2 border-black rounded-lg p-2 mt-4"
            onClick={handleDelete}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
