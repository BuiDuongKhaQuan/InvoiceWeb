import React from "react";

export default function Quality({ icon, title, content }) {
  return (
    <div className="col-md-4">
      <div className="col-inner">
        <div className="d-flex">
          <div className="icon-box-img">
            <div className="icon">
              <img src={icon} alt="content-create" />
            </div>
          </div>
          <div className="box-text">
            <h3>{title}</h3>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
