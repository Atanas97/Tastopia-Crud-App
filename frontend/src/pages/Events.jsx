import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PathConstants } from "../routes/pathConstants";

//Component import
import PageBanner from "../components/PageBanner";
import EventForm from "../components/EventForm";
import Wrapper from "../layout/Wrapper";
import Overlay from "../layout/Overlay";

//Images import
import banner from "../assets/banners/banner1.png";
import EventCard from "../components/EventCard";

import EmptyEventsImg from "../assets/svg/empty_events.svg";
import { AnimatePresence } from "framer-motion";

const Events = () => {
    const [events, setEvents] = useState(null);
    const [isEventFormVisible, setIsEventFormVisible] = useState(false);
    const [viewAllEvents, setViewAllEvents] = useState(false);

    useEffect(() => {
        const getAllEvents = async () => {
            const fetchURL = await fetch(`http://localhost:4000/events/`);
            const response = await fetchURL.json();

            setEvents(response);
            console.log(events);
        };

        getAllEvents();
    }, []);

    useEffect(() => {
        isEventFormVisible
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "auto");
    }, [isEventFormVisible]);

    let emptyState;
    if (events && events.length <= 0) {
        emptyState = (
            <div className="text-center">
                <h3 className="text-3xl text-white">
                    There are no events currently
                </h3>
                <p className="my-4 text-lg">
                    But feel free to create any wish by click the button below!
                </p>
                <img
                    src={EmptyEventsImg}
                    loading="lazy"
                    alt="tastopia no events"
                    height={"100%"}
                    width={"500px"}
                    className="mx-auto"
                />
            </div>
        );
    }

    return (
        <>
            <PageBanner banner={banner} title="Events " />
            <Wrapper className="my-20">
                {emptyState}
                <div className="mb-10 grid place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                    {events &&
                        events.map((event) => (
                            <EventCard key={event._id} event={event} />
                        ))}
                </div>

                <div className="text-center">
                    <button
                        type="button"
                        className="rounded-md bg-primaryColor px-6 py-3 text-white"
                        onClick={() => setIsEventFormVisible(true)}
                    >
                        Add an Event
                    </button>

                    {/* {events.length >= 6 && (
                        <Link to={PathConstants.HOMEPAGE} className="underline">
                            See all events
                        </Link>
                    )} */}
                </div>

                <AnimatePresence>
                    {isEventFormVisible && (
                        <Overlay
                            isOpen={isEventFormVisible}
                            closeModal={setIsEventFormVisible}
                        >
                            <EventForm />
                        </Overlay>
                    )}
                </AnimatePresence>
            </Wrapper>
        </>
    );
};

export default Events;
