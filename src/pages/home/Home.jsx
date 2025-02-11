import React from "react";
import { eventsData } from "../../constants";
import EventsComponent from "../../components/events/EventsComponent";
import Hero from "./components/hero/Hero";

const Home = () => {
    return (
        <div>
            <Hero />
            <EventsComponent data={eventsData} />
        </div>
    );
};

export default Home;
