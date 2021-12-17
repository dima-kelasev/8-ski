import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

const TemplatePrice = (props) => {
  return (
    <>
      <div className="TemplatePrice_block" id={props.id}>
        <h2 className="templatePrice__name">{props.name}</h2>
        <h6 className={props.orangeClass}>{props.orangeText}</h6>
        <h5 className="templatePrice__title">{props.title}</h5>
        <p dangerouslySetInnerHTML={{ __html: props.li }}></p>
        <p dangerouslySetInnerHTML={{ __html: props.li2 }}></p>
        <h5 className="templatePrice__title">{props.title2}</h5>
        <p dangerouslySetInnerHTML={{ __html: props.li3 }}></p>
        <p dangerouslySetInnerHTML={{ __html: props.li4 }}></p>

        <div className={props.footerClass}>
          <p dangerouslySetInnerHTML={{ __html: props.li5 }}></p>
          <p dangerouslySetInnerHTML={{ __html: props.li6 }}></p>
          <p dangerouslySetInnerHTML={{ __html: props.li7 }}></p>
        </div>

        <Link className="price_link" to={props.link}>
          <button>подробнее</button>
        </Link>
      </div>
    </>
  );
};

export default React.memo(TemplatePrice);
