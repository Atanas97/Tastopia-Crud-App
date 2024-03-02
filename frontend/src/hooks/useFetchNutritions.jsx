import { useEffect, useState } from "react";
import axios from "axios";

const useFetchMealType = (id) => {
    const [nutritions, setNutritions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const getDataFromApi = async () => {
            const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
            const controller = new AbortController();
            //https://api.spoonacular.com/recipes/{id}/information
            try {
                setIsLoading(true);
                const response = await axios.get(
                    `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${API_KEY}`,
                    {
                        signal: controller.signal,
                    },
                );
                setNutritions(response.data);
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
    }, [id]);

    return { nutritions, isLoading, error };
};

export default useFetchMealType;
