import React from "react";
import { eventsData } from "../../constants";
import EventsComponent from "../../components/events/EventsComponent";

const Home = () => {
    return (
        <div>
            <EventsComponent data={eventsData} />
        </div>
    );
};

export default Home;
