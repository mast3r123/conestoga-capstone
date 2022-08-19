import useFetch from "../../hooks/useFetch";
import "./featuredHotels.css";
import { Link } from "react-router-dom";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {console.log(data)}
          {data.map((item) => (
            <div className="fpItem" key="{item}">
              <Link to={`/hotels/${item._id}`}>
                <img src={item.photos[0]} alt="" className="fpImg" />
                <span className="fpName"></span>
                <span className="fpPrice">Starting from $</span>
                {item.rating && (
                  <div className="fpRating">
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                  </div>
                )}
              </Link>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
