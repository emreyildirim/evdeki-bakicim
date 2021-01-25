import React from "react";
import "./Card.scss";
const Card = (props) => {
  const { img, name, location, range, type, references, comments } = props;
  return (
    <div className="row card_container">
      <div className="col-lg-3 image_container">
        <img src={img} />
      </div>

      <div className="col-lg-9 h-100 card_header">
        <div className="row">
          <div className="col info">
            <div className="name">{name}</div>
            <div className="location">{location}</div>
          </div>

          <div className="col wage_container">
            <div className="range">
              {range}₺/{type}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col feedbacks">
            <span className="references">{references} referans</span>
            <span className="comments">{comments} yorum</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
