import React, { ChangeEvent, FormEvent, useState } from "react";

type Props = {};

const Login: React.FC = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

    const response = (input: typeof formData) => {
      fetch("https://bookie-api.onrender.com/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      })
        .then((response) => response.json)
        .then((data) => console.log(data));
    };
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChangeEmail} type="email" placeholder="email" />
        <input
          onChange={handleChangePassword}
          placeholder="password"
          type="password"
        />
        <button type="submit">log in</button>
      </form>
    </>
  );
};

export default Login;
