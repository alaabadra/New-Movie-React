import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from "./component/Navbar";
import WatchListHome from "./component/Home";
import Search from "./component/search";
import getMovie from "./utils/getData"
export default class App extends Component {
  state = {
    watchList: [
      {
        name: "CAPTAIN MARVEL",
        img:
          "https://image.tmdb.org/t/p/w600_and_h900_bestv2/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
        date: "4April,2019",
        overview:
          " The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
        status: false
      },
      {
        Name: "CAPTAIN MARVEL",
        img:
          "https://image.tmdb.org/t/p/w600_and_h900_bestv2/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
        date: "4April,2019",
        overview:
          " The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
        status: true                         
      }
    ],
    //for search
    searchResult:null,
  };
  searchvalue = null;
    handleSearchInput = e => {
      this.searchvalue = e.target.value;
    };
    handleGetMovie = e =>{
      e.preventDefault();
      getMovie(this.searchvalue).then(response=>{
        this.setState({searchResult:response.results});
        const html = document.querySelector("html");
        const sectionMovie = document.querySelector(".watchList--main");
        setTimeout(() => (html.scrollTop = sectionMovie.offsetTop), 200);
      })
    }
    /////////////////////////////
  render() {
    return (
      <BrowserRouter>
      <NavBar />
      <Switch>
      <Route
      exact
      path={"/"}
      component={() => (
        <WatchListHome
        watchList={this.state.watchList}
        />
        )}
     /> 
       <Route 
       exact 
       path={"/search"}
       component={()=>(
         <Search 
         searchresult ={this.state.searchResult}
         searchIn={this.handleSearchInput}
         submitGetMovie={this.handleGetMovie}
        //  idAdd={this.handleIdToAdd}
         />
       )}
       /> 
     
     </Switch>
      </BrowserRouter>
     
    );
  }
}


