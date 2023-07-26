const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, avgRating, cuisines, areaName } =
      resData?.info;
    return (
      <div className="restoCard">
        <img
          className="restoCard-image"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        />
        <div> {name} </div>
        <div>{avgRating} Stars</div>
        <div>{cuisines.join(", ")}</div>
        <div>{areaName}</div>
      </div>
    );
  };
  export default RestaurantCard ;