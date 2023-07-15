import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const Register: React.FC = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      email: email,
      password: password,
    };

    fetch("https://bookie-api.onrender.com/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChangeEmail} type="email" placeholder="email" />
        <br />
        <input
          onChange={handleChangePassword}
          type="password"
          placeholder="password"
        />
        <br />
        <button type="submit">register</button>
      </form>
      <button onClick={handleLogin}>log in</button>
    </>
  );
};

export default Register;
