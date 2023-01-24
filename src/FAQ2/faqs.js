import React from "react";
import { faqsData } from "./data";
import FAQ from "./faq";
import style from "./faqs.module.css";
const FAQs = () => {
  console.log(faqsData);
  return (
    <main className={style.container}>
      <section className={style.faqs}>
        {faqsData.map((faq) => (
          <FAQ key={faq.id} {...faq} />
        ))}
      </section>
    </main>
  );
};

export default FAQs;
