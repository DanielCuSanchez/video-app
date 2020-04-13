import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import InitialState from "../hooks/InitialState";
import "../assets/styles/App.scss";

const API = "http://localhost:3000/initalState";

const App = () => {
  const initialState = InitialState(API);
  return (
    <div>
      <Header />
      <Search />
      {initialState.mylist?.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}
      {initialState.trends?.length > 0 && (
        <Categories title="Tendencias">
          <Carousel>
            {initialState.trends.map((trend) => {
              return <CarouselItem key={trend.id} {...trend} />;
            })}
          </Carousel>
        </Categories>
      )}
      {initialState.originals?.length > 0 && (
        <Categories title="Originales">
          <Carousel>
            {initialState.originals.map((original) => {
              return <CarouselItem key={original.id} {...original} />;
            })}
          </Carousel>
        </Categories>
      )}
      <Footer />
    </div>
  );
};

export default App;
