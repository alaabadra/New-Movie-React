import React from "react";
import "./style.css";
const CardSearch = ({data:{title,overview,poster_path},id})=>(
  <div className="listMovies">
    {poster_path ? (
        <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`} alt="movie poster"
        />
    ) : (

    <img className="img" alt="no movie poster"/>
)}
<div className="desc">
        <h3>Name: {title}</h3>
        <h3>overview: {overview}</h3>
</div>
  </div>  
);
export default CardSearch;