import React, { useEffect, useState } from "react";
import "./RowPost.css";
import { imageURL } from "../../constants/constants";
import axios from "../../axios";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        //console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((err) => {
         alert('Network Error')
      });
  }, []);
  return (

    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
      {movies.map((obj) => (
  <div className="posterContainer" key={obj.id}>
    <img className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageURL + obj.backdrop_path}`} />
    <div className="posterTitle">{  obj.title || obj.name }</div>
  </div>
))}
      </div>
    </div>
  );
}

export default RowPost;
