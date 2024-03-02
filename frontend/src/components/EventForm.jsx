import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ComponentLoader from "../components/ComponentLoader";

const EventForm = () => {
    const [eventData, setEventData] = useState({
        title: "",
        description: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleTitleChange = (e) => {
        setEventData({ ...eventData, title: e.target.value });
    };

    const handleDescriptionChange = (e) => {
        setEventData({ ...eventData, description: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log(eventData);

        try {
            setIsLoading(true);
            const response = await fetch(`http://localhost:4000/events/`, {
                method: "POST",
                body: JSON.stringify(eventData),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = response.json();
        } catch (error) {
            console.log(error);
        }
        // if (!response.ok) {
        //     throw new Error("idk fam");
        // }
        if (response.ok) {
            setEventData({ ...eventData, title: "", description: "" });
            console.log("new event added!" + json);
            setIsLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mx-auto w-full max-w-screen-md"
        >
            <div className="relative z-10 mt-5 rounded-xl bg-secondaryColor p-4 sm:mt-10 md:p-10">
                {isLoading && <ComponentLoader />}
                <h2 className="mb-6 text-center text-xl font-bold sm:text-3xl">
                    Create an Event!
                </h2>
                <form onSubmit={(e) => handleFormSubmit(e)}>
                    <div className="mb-4 sm:mb-8">
                        <label
                            htmlFor="hs-feedback-post-comment-email-1"
                            className="mb-2 block text-sm font-medium"
                        >
                            Event Title
                        </label>
                        <input
                            type="text"
                            id="hs-feedback-post-comment-email-1"
                            className="w-full border border-textColor bg-transparent px-4 py-3 font-light text-textColor focus:border-primaryColor focus:outline-none"
                            placeholder="Event Title"
                            onChange={(e) => handleTitleChange(e)}
                            value={eventData.title}
                        />
                    </div>

                    <div className="mb-4 sm:mb-8">
                        <label
                            htmlFor="hs-feedback-post-comment-textarea-1"
                            className="mb-2 block text-sm font-medium"
                        >
                            Event Information
                        </label>
                        <div className="mt-1">
                            <textarea
                                id="hs-feedback-post-comment-textarea-1"
                                name="hs-feedback-post-comment-textarea-1"
                                rows="3"
                                className="w-full border border-textColor bg-transparent px-4 py-3 font-light text-textColor focus:border-primaryColor focus:outline-none"
                                placeholder="Event Information"
                                onChange={(e) => handleDescriptionChange(e)}
                                value={eventData.description}
                            ></textarea>
                        </div>
                    </div>
                    <div className="mb-4 sm:mb-8">
                        <span className="mb-2 block text-sm font-medium">
                            Event Image
                        </span>
                        <label htmlFor="file-input" className="sr-only">
                            Choose file
                        </label>
                        <input
                            type="file"
                            name="file-input"
                            id="file-input"
                            className="block w-full border border-textColor text-sm shadow-sm file:me-4 file:border-0 file:bg-gray-50 file:px-4 file:py-3 focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 "
                        />
                    </div>
                    <div className="grid pt-4">
                        <button
                            type="submit"
                            className="inline-flex w-full items-center justify-center gap-x-2 border border-transparent bg-primaryColor px-4 py-3 text-sm font-semibold text-white hover:opacity-90 disabled:pointer-events-none disabled:opacity-50 "
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default EventForm;
