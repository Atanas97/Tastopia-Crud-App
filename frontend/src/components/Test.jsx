import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Test = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <button onClick={() => setOpen((prevState) => !prevState)}>
                Open
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        layout
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.4 }}
                        style={{
                            height: "500px",
                            width: "500px",
                            backgroundColor: "red",
                        }}
                    ></motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Test;
