import React from "react";
import React, { useEffect, useState } from "react";

import { RES_MENU_API } from "./../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    getRestaurentMenu();
  }, []);

  const getRestaurentMenu = async () => {
    //console.log(RES_MENU_API + resId +"&catalog_qa=undefined&submitAction=ENTER")
    const data = await fetch(
      RES_MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    //console.log(json);
    //console.log(json?.data?.cards[0]?.card?.card?.info);
    setResInfo(json?.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
