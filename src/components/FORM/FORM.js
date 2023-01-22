import React, { useState } from "react";
import style from "./form.module.css";
export default function FORM() {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;

  const handleChange = (e) => {
    // let fieldName = e.target.name;

    // if (fieldName === "name") {
    //   setUser({ name: e.target.value, email, password });
    // } else if (fieldName === "email") {
    //   setUser({ name, email: e.target.value, password });
    // } else if (fieldName === "password") {
    //   setUser({ name, email, password: e.target.value });
    // }

    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form is submitted");

    // console.log(name, email, password);
    console.log(user);
  };
  return (
    <div>
      <h1>Registration:</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="id"
            value={name}
            required
            onChange={handleChange}
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="name">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            required
            onChange={handleChange}
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="name">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}
