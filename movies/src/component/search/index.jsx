import React from "react";
import "./style.css";
import Header from "../Header";
import CardSearch from "../CardSearch";

const Search = ({ searchIn, searchresult, submitGetMovie}) => (
  <section id="movie-list" className="watchList">
    <Header changeSearchIn={searchIn} submitMovie={submitGetMovie} />
    {searchresult && (
      <div className="watchList--main">
        <h1 className="watchList-h1">Search Result</h1>
        <div className="watchList-list">
          {searchresult.map((searchOne, index) => (
            <CardSearch key={index}  id={index} data={searchOne} />
          ))}
        </div>
      </div>
    )}
  </section>
);

export default Search;
