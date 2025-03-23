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
import Advantages from '../Advantages/Advantages'
import OurTeachers from '../OurTeachers/ourteachers'
import AboutUs from '../AboutUs/AboutUs'
import TheoricalTP from '../TheoricalTP/TheoricalTP'
import FAQ from '../FAQ/FAQ'

function HomePage() {

  return (
    <>
      <Navigation/>
      <MainPage/>
      <Advantages/>
      <br />
      <br />
      <br />
      <FormatLearning/>
      <OurTeachers/>
      <Carousel/>
      <AboutUs/>
      <ProgramLearning/>
      <CardsUL/>
      <TheoricalTP/>
      <Dogovor/>
      <Docs/>
      <FAQ/>
      <Naves/>
      <Footer/>
    </>
  )
}

export default HomePage;