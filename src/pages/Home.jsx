import RouteLink from '@/components/RouteLink';
import banner03 from '@/assets/img-banner03.svg';
import { Banner } from '@/components/Banner/Banner';
// import Footer from '@/components/Footer/Footer';
import { Slider } from '@/components/Slider/Slider';
import React from "react";
import ReactDOM from "react-dom";

const Home = () => {
  return (
    <div style={{height:'100.3vh'}}>
      <h2>Home</h2>
      <Slider/>
      <Banner imgSrc={banner03} children="더 풍성해진 10월의 퍼플위크 적립률 UP+3종 쿠폰팩
  KURLY PURPLE WEEK"/>
    </div>
  );
};

export default Home;
