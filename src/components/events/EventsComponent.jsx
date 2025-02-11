import React from "react";
import "./Events.scss";
import { eventsData } from "../../constants";

const EventsComponent = ({ data }) => {
    return (
        <section className="events">
            <div className="container">
                <h2 className="events__subtitle">{data?.main_title}</h2>
                <h1 className="events__title">{data?.section_title}</h1>
                <div className="events__list">
                    {data?.events.map((event, index) => (
                        <div className="event-card" key={index}>
                            <img
                                src={event.image}
                                alt={event.title}
                                className="event-card__image"
                            />
                            <div className="event-card__content">
                                <h3 className="event-card__title">
                                    {event.title}
                                </h3>
                                <div className="event-card__meta">
                                    <span className="event-card__author">
                                        {event.author}
                                    </span>
                                    <span className="event-card__date">
                                        {event.date}
                                    </span>
                                </div>
                                <p className="event-card__description">
                                    {event.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventsComponent;
