import React from "react";
import { eventsData } from "../../constants";
import EventsComponent from "../../components/events/EventsComponent";
import Opportunities from "./components/opportunities/Opportunities";
import Success from "./components/success/Success";
import Hero from "./components/hero/Hero";
import NewsSection from "./components/newsSection/NewsSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <Opportunities />
      <Success />
      <NewsSection />
      <EventsComponent data={eventsData} />
    </div>
  );
};

export default Home;
