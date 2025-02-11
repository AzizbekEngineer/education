import React from "react";
import Events from "../../components/events/Events";
import { eventsData } from "../../constants";

const Home = () => {
    return (
        <div>
            <Events data={eventsData} />
        </div>
    );
};

export default Home;
