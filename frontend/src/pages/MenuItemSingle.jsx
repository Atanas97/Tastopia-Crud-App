import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchSingleMeal from "../hooks/useFetchSingleMeal";
import useFetchNutritions from "../hooks/useFetchNutritions";
import { AnimatePresence, motion } from "framer-motion";

//Component imports
import PageBanner from "../components/PageBanner";
import Wrapper from "../layout/Wrapper";
import ComponentLoader from "../components/ComponentLoader";

//Images import
import banner from "../assets/banners/banner1.png";
import FullRecipe from "../components/FullRecipe";

const MenuItemSingle = () => {
    const params = useParams();
    const recipeID = params.id;
    const { data, isLoading } = useFetchSingleMeal(recipeID);
    const { nutritions } = useFetchNutritions(recipeID);

    const [openFullRecipe, setOpenFullRecipe] = useState(false);

    useEffect(() => {
        openFullRecipe
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "auto");
    }, [openFullRecipe]);

    const {
        title,
        image,
        instructions,
        summary,
        pairedWine,
        cuisines,
        dishTypes,
        extendedIngredients,
    } = data;

    const { calories, carbs, fat, protein } = nutritions;

    let mappedCuisines;
    if (cuisines) {
        mappedCuisines = cuisines.map((cuisine, index) => (
            <span className="pr-2" key={index}>
                {cuisine}
            </span>
        ));
    }

    let mappedDishTypes;
    if (dishTypes) {
        mappedDishTypes = dishTypes.map((type, index) => (
            <span className="pr-2" key={index}>
                {type}
            </span>
        ));
    }
    console.log(data);
    return (
        <>
            <PageBanner banner={banner} title={title} />
            <Wrapper className="my-20 lg:my-40">
                <button type="button" onClick={() => setOpenFullRecipe(true)}>
                    Open full recipe
                </button>
                {isLoading ? (
                    <ComponentLoader />
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                            <div>
                                <picture className="block bg-darkColor">
                                    <img
                                        src={image}
                                        alt={title}
                                        loading="lazy"
                                        height={"100%"}
                                        width={"100%"}
                                        className="opacity-90"
                                    />
                                </picture>
                                <div></div>
                            </div>
                            <div>
                                <h1 className="text-5xl font-normal">
                                    {title}
                                </h1>
                                {/* <ul>
                                <li className="flex items-center justify-between">
                                    <span>Cuisines</span>
                                    <span>{mappedCuisines}</span>
                                </li>
                                <li className="flex items-center justify-between">
                                    <span>Dish Types</span>
                                    <span>{mappedDishTypes}</span>
                                </li>
                            </ul> */}
                                <div></div>
                                <div>
                                    <h3>Hot to make it?</h3>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: instructions,
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </Wrapper>

            {openFullRecipe && (
                <FullRecipe
                    nutritions={nutritions}
                    openFullRecipe={openFullRecipe}
                    setOpenFullRecipe={setOpenFullRecipe}
                />
            )}
        </>
    );
};

export default MenuItemSingle;
