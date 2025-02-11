import React from "react";
import EventsComponent from "../../components/events/EventsComponent";
import { trainingsData } from "../../constants";

const Trainings = () => {
    return (
        <>
            <EventsComponent data={trainingsData} />
        </>
    );
};

export default Trainings;
