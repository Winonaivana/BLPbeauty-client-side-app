import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const Login: React.FC = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

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

    fetch("https://bookie-api.onrender.com/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Login failed");
        }
      })
      .then((data) => {
        localStorage.setItem("token", data.accessToken);
        navigate("/book");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChangeEmail} type="email" placeholder="email" />
        <br />
        <input
          onChange={handleChangePassword}
          placeholder="password"
          type="password"
        />
        <br />
        <button type="submit">log in</button>
      </form>
      <button onClick={handleRegister}>sign up</button>
    </>
  );
};

export default Login;
