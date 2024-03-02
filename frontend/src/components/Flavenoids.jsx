import React from "react";
import { VerticalChart } from "./VerticalChart";
import { motion } from "framer-motion";

const Flavenoids = ({ nutritions, selectedCategory }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div>
                <VerticalChart
                    nutritions={nutritions}
                    selectedCategory={selectedCategory}
                />
            </div>
        </motion.div>
    );
};

export default Flavenoids;
