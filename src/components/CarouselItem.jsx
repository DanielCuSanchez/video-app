import React from "react";
import PropTypes from "prop-types";
import "../assets/styles/components/CarouselItem.scss";
import shareIcon from "../assets/static/share.png";
import cursorIcon from "../assets/static/cursor.png";

const CarouselItem = ({ title, type, cover, year, contentRating }) => {
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <img
            className="carousel-item__details--img"
            src={shareIcon}
            alt="add"
          />
          <img
            className="carousel-item__details--img"
            src={cursorIcon}
            alt="share"
          />
        </div>
        <div className="carousel-item__details--title">{title}</div>
        <div className="carousel-item__details--subtitle">{type}</div>
        {year && contentRating && (
          <div className="carousel-item__details--subtitle">{`${year} ${contentRating}`}</div>
        )}
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  cover: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
};

export default CarouselItem;
