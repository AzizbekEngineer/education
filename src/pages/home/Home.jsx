import React from "react";
import { eventsData } from "../../constants";
import EventsComponent from "../../components/events/EventsComponent";
import Opportunities from "./components/opportunities/Opportunities";
import Success from "./components/success/Success";
import Hero from "./components/hero/Hero";
import NewsCard from "./components/newsCard/newsCard";

const Home = () => {
  return (
    <div>
      <Hero />
      <Opportunities />
      <Success />
      <NewsCard />
      <EventsComponent data={eventsData} />
    </div>
  );
};

export default Home;
