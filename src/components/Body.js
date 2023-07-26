import RestaurantCard from "./RestaurantCard";
import { restList } from "./../utils/mockData";
import { useState,useEffect } from "react";
import {SWIGGY_API} from "./../utils/constants";
import Shimmer from "./Shimmer";
const Body = () => {
  const [filteredRest, setFilteredRest] = useState([]);
  function getTopRatedRest() {
    const filterRest = restList.filter((rest) => rest.info.avgRating > 4);
    setFilteredRest(filterRest);
  }
  const fetchData= async() =>{
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    console.log(json);
    setFilteredRest(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
  }
  useEffect(()=>{
    fetchData();
  },[]);
  return (
    filteredRest.length!=0 ?
    <div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            getTopRatedRest();
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="resto-container">
        {filteredRest?.map((rest) => (
          <RestaurantCard key={rest.info.id} resData={rest} />
        ))}
      </div>
    </div> :
    <Shimmer/>
  );
};

export default Body;
