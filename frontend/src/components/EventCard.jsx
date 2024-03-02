import React from "react";
import { Link } from "react-router-dom";

//Icons import
import ArrowRight from "../assets/svg/arrow_right.svg";

const EventCard = ({ event }) => {
    const { title, description, _id, createdAt } = event;

    const convertedDate = new Date(createdAt).toLocaleString();
    return (
        <>
            <Link
                to={`${_id}`}
                state={{ title: title, description: description }}
                className="group rounded-xl p-5 transition-all hover:bg-gray-100 dark:hover:bg-white/[.05] flex flex-col h-full"
            >
                <div className="aspect-w-16 aspect-h-10">
                    <img
                        className="w-full rounded-xl object-cover"
                        src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                        alt="Image Description"
                    />
                </div>
                <small className="mt-5 block text-sm text-gray-800 dark:text-gray-300 dark:hover:text-white">
                    {convertedDate}
                </small>
                <h3 className="my-3 text-3xl text-gray-800 dark:text-gray-300 dark:hover:text-white">
                    {title}
                </h3>
                <p className="mt-auto inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
                    Learn more
                    <span className="size-4 flex-shrink-0 ">
                        <img
                            src={ArrowRight}
                            alt="Tastopia icon"
                            width={"24px"}
                            height={"24px"}
                            loading="lazy"
                            className="flex-shrink-0 transition ease-in-out group-hover:translate-x-1"
                        />
                    </span>
                </p>
            </Link>
        </>
    );
};

export default EventCard;
