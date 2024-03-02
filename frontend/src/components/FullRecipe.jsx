import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Overlay from "../layout/Overlay";
import Macros from "./Macros";
import Flavenoids from "./Flavenoids";
import Nutrients from "./Nutrients";

const FullRecipe = ({ openFullRecipe, setOpenFullRecipe, nutritions }) => {
    const [selectedCategory, setSelectedCategory] = useState("Macros");

    const [category, setCategory] = useState({
        macros: true,
        flavenoids: false,
        nutrients: false,
    });

    // console.log(nutritions.ingredients);

    const handleMacrosActive = () => {
        setSelectedCategory("Macros");
        setCategory({
            ...category,
            ...{ macros: true, flavenoids: false, nutrients: false },
        });
        console.log(category);
    };

    const handleFlavenoidsActive = () => {
        setSelectedCategory("Flavenoids");
        setCategory({
            ...category,
            ...{ macros: false, flavenoids: true, nutrients: false },
        });
        console.log(category);
    };

    const handleNutrientsActive = () => {
        setSelectedCategory("Nutrients");
        setCategory({
            ...category,
            ...{ macros: false, flavenoids: false, nutrients: true },
        });
        console.log(category);
    };
    return (
        <Overlay isOpen={openFullRecipe} closeModal={setOpenFullRecipe}>
            <div className="bg-darkColor p-4 lg:p-8">
                <div className="mb-10 flex justify-center gap-4">
                    <button
                        type="button"
                        area-label="filter option"
                        className={`${selectedCategory === "Macros" ? "text-primaryColor" : ""} text-xl font-medium transition-colors duration-200 hover:text-primaryColor`}
                        aria-label="select filter"
                        onClick={() => handleMacrosActive()}
                    >
                        Macros
                    </button>
                    <button
                        type="button"
                        area-label="filter option"
                        className={`${selectedCategory === "Flavenoids" ? "text-primaryColor" : ""} text-xl font-medium transition-colors duration-200 hover:text-primaryColor`}
                        aria-label="select filter"
                        onClick={() => handleFlavenoidsActive()}
                    >
                        Flavenoids
                    </button>
                    <button
                        type="button"
                        area-label="filter option"
                        className={`${selectedCategory === "Nutrients" ? "text-primaryColor" : ""} text-xl font-medium transition-colors duration-200 hover:text-primaryColor`}
                        aria-label="select filter"
                        onClick={() => handleNutrientsActive()}
                    >
                        Nutrients
                    </button>
                </div>

                <AnimatePresence>
                    {category.macros && <Macros nutritions={nutritions} />}
                    {selectedCategory === "Flavenoids" && (
                        <Flavenoids
                            nutritions={nutritions}
                            selectedCategory={selectedCategory}
                        />
                    )}
                    {selectedCategory === "Nutrients" && (
                        <Nutrients
                            nutritions={nutritions}
                            selectedCategory={selectedCategory}
                        />
                    )}
                </AnimatePresence>
            </div>
        </Overlay>
    );
};

export default FullRecipe;
