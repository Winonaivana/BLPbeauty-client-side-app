import axios from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const { id } = useParams();

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleChangeRating = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(e.target.value);
  };
  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value);
  };

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
        setTitle(data.title);
        setDescription(data.description);
        setRating(data.rating);
        setImage(data.image);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const response = async () => {
    try {
      const result = await axios.put(
        `https://bookie-api.onrender.com/book/update/${id}`,
        {
          title: title,
          description: description || null,
          rating: parseInt(rating, 10) || null,
          image: image || null,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (result) {
        navigate("/book");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    response();
  };
  return (
    <div className="justify-center h-screen flex items-center">
      <form onSubmit={handleSubmit}>
        <input placeholder={title} onChange={handleChangeTitle} />
        <br />
        <input placeholder={description} onChange={handleChangeDescription} />
        <br />
        <input placeholder={rating} onChange={handleChangeRating} />
        <br />
        <input placeholder={image} onChange={handleChangeImage} />
        <br />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default AddBook;
