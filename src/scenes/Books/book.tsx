import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type Book = {
  id: number;
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
  const [search, setSearch] = useState("");
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/");
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const getBooks = async () => {
    await fetch(`https://bookie-api.onrender.com/book?query=${search}`, {
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
  }, [search]);

  const handleAdd = () => {
    navigate("/book/add");
  };

  return (
    <div>
      <div className="absolute top-0 right-0 p-4">
        <button
          onClick={handleAdd}
          className="border-2 border-black rounded-lg p-2 mr-4 "
        >
          add
        </button>
        <button
          className="border-2 border-black rounded-lg p-2"
          onClick={handleLogout}
        >
          logout
        </button>
      </div>
      <form className="p-4">
        <input
          placeholder="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>

      <div className="flex w-screen justify-center">
        <div className=" mt-20 grid gap-8 pb-4 pt-4 grid-cols-4 ">
          {book.map((book: Book) => {
            return (
              <div>
                <Link key={book.id} to={`/book/${book.id}`}>
                  <img
                    className="w-[200px] h-[300px] bg-slate-400"
                    src={book.image}
                  ></img>
                  <div className="text-lg mt-4">{book.title}</div>{" "}
                  <p>{book.rating}/5</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Book;
