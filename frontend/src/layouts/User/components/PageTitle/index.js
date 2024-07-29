import React from "react";
import "./styles.css";

export default function PageTitle({ title }) {
  return (
    <div className=" bg-fill page-header d-flex justify-content-center align-items-center ">
      <div className="page-title text-uppercase text-center">
        <h2 className="entry-title text-white">{title}</h2>
      </div>
    </div>
  );
}
