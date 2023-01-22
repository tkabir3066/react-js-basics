import React from "react";

const date = new Date();
let currDate = date.getDate();
currDate = currDate >= 10 ? currDate : "0" + currDate;
let currMonth = date.getMonth();

const currYear = date.getFullYear();
const Card = (props) => {
  const { titleText, desText } = props;
  return (
    <div className="card">
      <h3 className="titleText">{titleText}</h3>
      <p className="desText"> {desText} </p>
      <p className="footerText">
        Date: {`${currDate}/ ${currMonth + 1}/ ${currYear}`}
      </p>
    </div>
  );
};

export default Card;
