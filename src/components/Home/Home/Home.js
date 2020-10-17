import React from 'react';
import Brands from '../Brands/Brands';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import WorkSlider from '../WorkSlider/WorkSlider';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Brands></Brands>
      <Services></Services>
      <WorkSlider></WorkSlider>
      <ClientFeedback></ClientFeedback>
      <Footer></Footer>
    </div>
  );
};

export default Home;