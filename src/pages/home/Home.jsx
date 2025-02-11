import React from "react";
import { eventsData } from "../../constants";
import EventsComponent from "../../components/events/EventsComponent";
import Opportunities from "./components/opportunities/Opportunities";
import Success from "./components/success/Success";
import Hero from "./components/hero/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <EventsComponent data={eventsData} />
      <Opportunities />
      <Success />
    </div>
  );
};

export default Home;
