import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const AddBook = (props: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");

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

  const response = async () => {
    try {
      const result = await axios.post(
        "https://bookie-api.onrender.com/book",
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
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="title" onChange={handleChangeTitle} />
        <br />
        <input placeholder="description" onChange={handleChangeDescription} />
        <br />
        <input placeholder="rating" onChange={handleChangeRating} />
        <br />
        <input placeholder="image url" onChange={handleChangeImage} />
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddBook;
