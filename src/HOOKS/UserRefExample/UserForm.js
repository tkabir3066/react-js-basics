import React, { useRef } from "react";

const UserForm = () => {
  const userNameRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = userNameRef.current.value;
    const password = passwordRef.current.value;
    userNameRef.current.style.color = "red";
    console.log({ userName, password }); //{userName: 'Tutul Kabir', password: 'sdvsdfa'}
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-field">
        <label htmlFor="userName">UserName: </label>
        <input type="text" id="userName" ref={userNameRef} />
      </div>
      <div className="input-field">
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" ref={passwordRef} />
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default UserForm;
