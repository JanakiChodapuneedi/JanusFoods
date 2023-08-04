import React, { useEffect, useState } from "react";
import { RES_MENU_API } from "./../utils/constants";
import Shimmer from "./Shimmer";
import RestMenuCard from "./RestMenuCard";
import { useParams } from "react-router-dom";
const RestaurentMenu = () => {
  const [restaurantData, setRestaurantData] = useState(null);
  const {resId}= useParams();
  
  useEffect(() => {
    getRestaurentMenu();
  }, []);

  const getRestaurentMenu = async() => {
    //console.log(RES_MENU_API + resId +"&catalog_qa=undefined&submitAction=ENTER")
    const data = await fetch(RES_MENU_API + resId +"&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();
    //console.log(json);
    //console.log(json?.data?.cards[0]?.card?.card?.info);
    setRestaurantData(json?.data);
    console.log(json?.data);
  }; 

  

  if (restaurantData === null) return <Shimmer />;
  console.log(restaurantData);
  const { name, costForTwoMessage, cuisines, avgRating } =
    restaurantData.cards[0]?.card?.card?.info;
  const {itemCards}  = restaurantData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  
  return (
    <div className="restaurent-menu">
      <h1> {name} </h1>
      <h2>{costForTwoMessage}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h2>{avgRating}Stars</h2>
      <h2>Menu</h2>
      <ul>
      {itemCards.map((menuItem) => (
        <RestMenuCard menuItem={menuItem} key={menuItem.card.info.id}/>
      ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
