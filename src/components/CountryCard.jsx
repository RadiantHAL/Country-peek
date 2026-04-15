import { Link } from "react-router-dom";
import { useFavourites } from "../context/FavouritesContext";

function CountryCard({ country }) {
  const { favourites, dispatch } = useFavourites();

  const isSaved = favourites.some((f) => f.cca3 === country.cca3);

  const toggleFav = (e) => {
    e.stopPropagation();

    dispatch({
      type: isSaved ? "REMOVE_FAVOURITE" : "ADD_FAVOURITE",
      payload: isSaved ? country.cca3 : country,
    });
  };

  return (
    <Link to={`/country/${country.cca3}`} className="card">
      <img
        src={country.flags.svg}
        alt={country.name.common}
        className="card__flag"
      />

      <div className="card__body">
        <h3 className="card__name">{country.name.common}</h3>

        <p>Population: {country.population.toLocaleString()}</p>
        <p>Region: {country.region}</p>

        <button
          className={`fav-btn ${isSaved ? "fav-btn--saved" : ""}`}
          onClick={toggleFav}
        >
          {isSaved ? "♥ Saved" : "♡ Save"}
        </button>
      </div>
    </Link>
  );
}

export default CountryCard;