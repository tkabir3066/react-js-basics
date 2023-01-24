import React from "react";
import style from "./faq.module.css";
const FAQ = (props) => {
  console.log(props);
  return (
    <article className={style.faq}>
      <div>
        <h4>{props.title}</h4>
        {/* <p>{props.desc}</p> */}
        <button type="submit">+</button>
      </div>
    </article>
  );
};

export default FAQ;
