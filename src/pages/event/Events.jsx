import React from "react";
import EventsComponent from "../../components/events/EventsComponent";
import { eventsData } from "../../constants";

const Events = () => {
    return (
        <>
            <EventsComponent data={eventsData} />
        </>
    );
};

export default Events;
