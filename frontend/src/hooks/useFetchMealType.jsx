import { useEffect, useState } from "react";
import axios from "axios";

const useFetchMealType = (mealType) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const getDataFromApi = async () => {
            const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
            const controller = new AbortController();
            //https://api.spoonacular.com/recipes/complexSearch?type=mealType&apiKey=YOUR_API_KEY
            try {
                setIsLoading(true);
                const response = await axios.get(
                    `https://api.spoonacular.com/recipes/random?tags=${mealType}&number=10&apiKey=${API_KEY}`,
                    {
                        signal: controller.signal,
                    },
                );
                setData(response.data.recipes);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(true);
                setError(error);
            }
        };
        getDataFromApi();

        return () => {
            const abortController = new AbortController();
            abortController.abort();
        };
    }, [mealType]);

    return { data, isLoading, error };
};

export default useFetchMealType;
