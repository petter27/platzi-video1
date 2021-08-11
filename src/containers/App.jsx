import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categoria from '../components/Categoria';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouslItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const App = () => {
  const initialState = useInitialState(API);
  return (
    <div className="App">
      <Header />
      <Search />

      { (initialState.mylist !== undefined && initialState.mylist.length > 0) ? (
        <Categoria title="Mi lista">
          <Carousel>
          { initialState.mylist ? initialState.mylist.map((item) => <CarouselItem key={item.id} {...item} />) : null }
          </Carousel>
        </Categoria>
      ) :
        null}
      <Categoria title="Tendencias">
        <Carousel>
          { initialState.trends ? initialState.trends.map((item) => <CarouselItem key={item.id} {...item} />) : null }
        </Carousel>
      </Categoria>
      <Categoria title="Originales de Platzi Video">
        <Carousel>
        { initialState.originals ? initialState.originals.map((item) => <CarouselItem key={item.id} {...item} />) : null }
        </Carousel>
      </Categoria>
      <Footer />
    </div>
  );
};

export default App;
