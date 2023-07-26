import {RES_IMG_CDN_URL} from './../utils/constants';

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, avgRating, cuisines, areaName } =
      resData?.info;
    return (
      <div className="restoCard">
        <img
          className="restoCard-image"
          src={
            RES_IMG_CDN_URL +
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