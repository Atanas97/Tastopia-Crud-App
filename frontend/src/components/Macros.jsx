import React from "react";
import PieChart from "./PieChart";

import { motion } from "framer-motion";

const Macros = ({ nutritions }) => {
    const { calories, carbs, fat, protein } = nutritions;

    let mappedIngredients;
    if (nutritions.ingredients) {
        mappedIngredients = nutritions.ingredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.name}</li>
        ));
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 gap-10 overflow-scroll md:grid-cols-2"
        >
            <div>
                <h3 className="mb-10 text-3xl">Nutrition per Serving</h3>
                <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
                    <div className="border text-center">
                        <p className="bg-primaryColor px-4 py-2 font-bold">
                            Calories
                        </p>
                        <p className="px-4 py-2">{calories}</p>
                    </div>
                    <div className="border text-center">
                        <p className="bg-primaryColor px-4 py-2 font-bold">
                            Carbs
                        </p>
                        <p className="px-4 py-2">{carbs}</p>
                    </div>
                    <div className="border text-center">
                        <p className="bg-primaryColor px-4 py-2 font-bold">
                            Fats
                        </p>
                        <p className="px-4 py-2">{fat}</p>
                    </div>
                    <div className="border text-center">
                        <p className="bg-primaryColor px-4 py-2 font-bold">
                            Protein
                        </p>
                        <p className="px-4 py-2">{protein}</p>
                    </div>
                </div>
                <div>
                    <h4 className="mb-2 mt-10 text-xl text-textColor">
                        Ingredients:
                    </h4>
                    <ul className="space-y-3 text-lg font-light capitalize text-textColor columns-2">
                        {mappedIngredients}
                    </ul>
                </div>
            </div>
            <div className="h-full w-full">
                <PieChart nutritions={nutritions} />
            </div>
        </motion.div>
    );
};

export default Macros;
