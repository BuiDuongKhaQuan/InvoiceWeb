import React from "react";

export default function Outstanding({
  image,
  backgroundCustome,
  title,
  content,
  onClick,
  customLayout,
}) {
  return (
    <div
      className={`col-md-3 ${customLayout}`}
      data-animate="flipInX"
      data-animated="true"
    >
      <div className={`col-inner ${backgroundCustome}`}>
        <div className="img">
          <div className="img-inner">
            <img
              width="240"
              height="240"
              src={image}
              class="attachment-original size-original"
              alt=""
              sizes="(max-width: 240px) 100vw, 240px"
              onClick={onClick}
            />
          </div>
        </div>
        <h3>{title}</h3>
        <div className="mona_overlay one">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
