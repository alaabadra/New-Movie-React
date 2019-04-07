import React from "react";
import "./style.css";
const CardHomeList = ({data:{img,name,date}})=>(
    <div className="list">
        <img className="img" src={img} alt="movie"/>
        <div className="desc">
        <h3>Name: {name}</h3>
        <h3>watching Date: {date}</h3>
        </div>
    </div>
);
export default CardHomeList;