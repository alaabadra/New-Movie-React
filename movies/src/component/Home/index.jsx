import React from "react";
import CardHomeList from "../CardHomeList";
import "./style.css";
const WatchListHome = ({watchList}) => (
    <section className="watch-list">
    <h1 className="homeList-h1">The Movie</h1>
    <div className="div-watchList">
    {watchList.map((index,list)=>(
        <CardHomeList key={index} id={index} data={list}/>
    ))}
    </div>
    </section>
);
export default WatchListHome; 