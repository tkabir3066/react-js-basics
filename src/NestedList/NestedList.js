import React from "react";

// import Data from "./data.json";

import { v4 as uuidv4 } from "uuid";
const users = [
  {
    fullName: "Tutul Kabir",
    age: 29,
    phones: [{ home: "9685472452" }, { office: "8795464125" }],
  },
  {
    fullName: "Anarul Kabir",
    age: 26,
    phones: [{ home: "895425522" }, { office: "864651657" }],
  },
  {
    fullName: "Soyab Aktar",
    age: 18,
    phones: [{ home: "89588888" }, { office: "66665749" }],
  },
];
const NestedList = () => {
  return (
    <div>
      {users.map((user) => {
        return (
          <article key={uuidv4()}>
            <p>Full Name: {user.fullName}</p>
            <p>Age : {user.age} </p>

            {user.phones.map((phone) => {
              return (
                <div key={uuidv4()}>
                  <p>{phone.home}</p>
                  <p>{phone.office}</p>
                </div>
              );
            })}
          </article>
        );
      })}
    </div>
  );
};

export default NestedList;
