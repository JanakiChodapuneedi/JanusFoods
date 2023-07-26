import RestaurantCard from "./RestaurantCard";
import { restList } from "./../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [filteredRest, setFilteredRest] = useState(restList);
  function getTopRatedRest() {
    const filterRest = restList.filter((rest) => rest.info.avgRating > 4);
    setFilteredRest(filterRest);
  }
  return (
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
        {filteredRest.map((rest) => (
          <RestaurantCard key={rest.info.id} resData={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body;
