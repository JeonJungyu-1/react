import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovies(json.data.movie);
    setLoading(false);
    console.log(id);
  };
  useEffect(() => {
    getMovie();
  }, []);

return (
  <div>
    {loading ? (
      <h1>Loading...</h1>
    ) : (
      <div>
        <img src={movies.large_cover_image} />
        <h1>title : {movies.title}</h1>
        <p>rating : {movies.rating}</p>
        <p>runtime : {movies.runtime}</p>
        <p>genres</p>
        <ul>
          {movies.genres && movies.genres.map((g) => <li key={g}>{g}</li>)}
        </ul>
      </div>
    )}
  </div>
);
}


export default Detail;
