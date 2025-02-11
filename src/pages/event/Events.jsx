import React from "react";
import EventsComponent from "../../components/events/EventsComponent";
import { eventsData } from "../../constants";
import "./Events.scss"

const Events = () => {
    return (
        <div className="events-page">
            <EventsComponent data={eventsData} />
        </div>
    );
};

export default Events;
