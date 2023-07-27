import RestaurantCard from "./RestaurantCard";
import { restList } from "./../utils/mockData";
import { useState,useEffect } from "react";
import {SWIGGY_API} from "./../utils/constants";
import Shimmer from "./Shimmer";
const Body = () => {
  const [allRest,setAllRest] = useState([]);
  const [filteredRest, setFilteredRest] = useState([]);
  const[searchTxt,setSearchTxt]=useState("");
  function getTopRatedRest() {
    const filterRest = filteredRest.filter((rest) => rest.info.avgRating > 4);
    setFilteredRest(filterRest);
  }
  const fetchData= async() =>{
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    console.log(json);
    //to get restaurants in caurosel
    setFilteredRest(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
    //to get restaurants in grid
   // setFilteredRest(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
    setAllRest(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  function  searchFilteredRest(){
    const filtRest = allRest.filter((rest) => rest.info.name.toUpperCase().includes(searchTxt.toUpperCase()));
    setFilteredRest(filtRest);
    console.log("searchFilteredRest called");
   
  }
  useEffect(()=>{
    fetchData();
  },[]);
  return (
    filteredRest.length === 0 ? <Shimmer/>:
    <div>
      <div className="filter">
        <div className="search">
          <input type="text" 
          className="search-box"
           value={searchTxt}
           onChange={(e)=>{
            setSearchTxt(e.target.value);
      
           }}/>
          <button className="search-btn" onClick={()=>{
            searchFilteredRest();}}>Search</button>
        </div>
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
    </div> 
  );
};

export default Body;
