import React from "react";
import { useState } from "react";
import stye from "./faq.module.css";
const FAQ = ({ id, title, desc }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <article className={stye.faq}>
      <div>
        <h4>{title}</h4>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "-" : "+"}
        </button>
      </div>
      {toggle && <p>{desc}</p>}
    </article>
  );
};

export default FAQ;
