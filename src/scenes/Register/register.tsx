import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
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
    <div className="justify-center h-screen flex items-center">
      <div className="flex flex-col">
        <div className="mb-8 text-2xl">Welcome to Bookie</div>

        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChangeEmail}
            type="email"
            placeholder="email"
          />
          <br />
          <input
            onChange={handleChangePassword}
            placeholder="password"
            type="password"
          />
          <br />
          <button type="submit">Register</button>
        </form>
        <div>
          already have an account?
          <button onClick={handleLogin}>Log in</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
