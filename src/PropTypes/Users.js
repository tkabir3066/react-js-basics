import React, { useState } from "react";
import User from "./User";
const Users = () => {
  const [user, setUser] = useState({ name: "Tutul Kabir", id: 104 });

  return (
    <>
      <User user={user} />
    </>
  );
};

export default Users;
