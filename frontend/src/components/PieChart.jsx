import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

const PieChart = ({ nutritions }) => {
    const { calories, carbs, fat, protein } = nutritions;
    const getGeneralMacros = [calories, carbs, fat, protein];

    const dataForPieChart = getGeneralMacros.map((macros) =>{
        const replaceG = macros.replace("g", "")

        return  parseInt(replaceG);
    });

    ChartJS.register(ArcElement, Tooltip, Legend);
    const data = {
        labels: ["Calories", "Carbs", "Fats", "Protein"],
        datasets: [
            {
                // label: "calories",
                data: dataForPieChart,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.8)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                ],
                // borderWidth: 1,
            },
        ],
    };

    return <Pie data={data} />;
};

export default PieChart;
