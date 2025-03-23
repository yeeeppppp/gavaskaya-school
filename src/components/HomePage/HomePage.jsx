import './HomePage.css'

// import { useState } from 'react';
// import logoBig from "../../assets/img/logo-big.svg"
// import logoFormat from "../../assets/img/forma.svg"
// import logoOffline from "../../assets/img/offline.svg"
// import logoPrice from "../../assets/img/price.svg"
// import logoGrafic from "../../assets/img/grafic.svg"
// import Metro from '../../assets/img/metro.svg'
import Navigation from '../Navigation/Navigation';
import FormatLearning from '../FormatLearning/FormatLearning'
import Carousel from '../Carousel/Carousel'
import Docs from '../Docs/Docs'
import Footer from '../Footer/Footer'
import ProgramLearning from '../ProgramLearning/ProgramLearning'
import CardsUL from '../CardsUL/CardsUL'
import Dogovor from '../dogovor/dogovor'
import Naves from '../Naves/Naves';
import MainPage from '../MainPage/MainPage';

function HomePage() {

  return (
    <>
      <Navigation/>
      <MainPage/>
      <FormatLearning/>
      <Carousel/>
      <Docs/>
      <ProgramLearning/>
      <CardsUL/>
      <Dogovor/>
      <Naves/>
      <Footer/>
      
    </>
  )
}

export default HomePage;