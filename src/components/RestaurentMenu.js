import React from "react";
import Shimmer from "./Shimmer";
import RestMenuCard from "./RestMenuCard";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurentMenu = () => {
  const { resId } = useParams();

  const restaurantData = useRestaurantMenu(resId);

  if (restaurantData === null) return <Shimmer />;

  //console.log(restaurantData);
  const { name, costForTwoMessage, cuisines, avgRating } =
    restaurantData.cards[0]?.card?.card?.info;
  const { itemCards } =
    restaurantData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="restaurent-menu">
      <h1> {name} </h1>
      <h2>{costForTwoMessage}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h2>{avgRating}Stars</h2>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((menuItem) => (
          <RestMenuCard menuItem={menuItem} key={menuItem.card.info.id} />
        ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
