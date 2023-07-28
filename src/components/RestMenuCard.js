import React from "react";
import { RES_IMG_CDN_URL } from "../utils/constants";
const RestMenuCard = ({menuItem}) => {
  return (
    <div className="menu-card">
      <div>
        <h2>{menuItem.card.info.name}</h2>
        <h3>{menuItem.card.info.description}</h3>
        <h4>{menuItem.card.info.price / 100} Rupees</h4>
      </div>
      <div className="menu-img-btn">
        <img
          className="menu-card-image"
          src={RES_IMG_CDN_URL + menuItem.card.info.imageId}
        />
        <button className="menu-add-btn">Add</button>
      </div>
    </div>
  );
};

export default RestMenuCard;
