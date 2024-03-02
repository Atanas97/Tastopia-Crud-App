import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import PlaceholderImg from "../assets/svg/placeholder_img_menu.svg";

const MenuItem = ({ recipe, isLoading }) => {
    const { title, image, pricePerServing, diets, id } = recipe;

    const navigate = useNavigate();

    const mappedDiets = diets.map((diet, index) => (
        <span key={index}>{diet}</span>
    ));
    return (
        <>
            <motion.div
                layout
                exit={{ scale: 0, opacity: 0 }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
            >
                <div
                    className="group flex cursor-pointer justify-between gap-4 transition-colors duration-300 hover:bg-primaryColor"
                    onClick={() => navigate(`menu/${id}`)}
                >
                    <div className="flex items-start gap-4">
                        <picture className="block flex-none bg-darkColor">
                            <img
                                src={
                                    image !== undefined ? image : PlaceholderImg
                                }
                                alt={title}
                                loading="lazy"
                                width={"100%"}
                                height={"100%"}
                                className="h-20 w-20 object-cover opacity-80"
                                decoding="async"
                            />
                        </picture>
                        <div>
                            <h3 className="text-2xl capitalize text-white">
                                {title}
                            </h3>
                            <p>{mappedDiets}</p>
                        </div>
                    </div>
                    <p className="whitespace-nowrap text-2xl text-primaryColor group-hover:text-white">
                        $ {pricePerServing}
                    </p>
                </div>
            </motion.div>
        </>
    );
};

export default MenuItem;
