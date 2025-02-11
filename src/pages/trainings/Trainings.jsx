import React from "react";
import EventsComponent from "../../components/events/EventsComponent";
import { trainingsData } from "../../constants";
import "./Trainings.scss"

const Trainings = () => {
    return (
        <div className="training-page">
            <EventsComponent data={trainingsData} />
        </div>
    );
};

export default Trainings;
