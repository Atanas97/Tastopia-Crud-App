import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

export function VerticalChart({ nutritions, selectedCategory }) {

    console.log(nutritions)

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend,
    );
    const flavonoidsData = nutritions.flavonoids;
    const nutritionsData = nutritions.nutrients;

    const flavenoindsLabels = flavonoidsData.map((flavenoid) => {
        return flavenoid.name;
    });

    const nutritionsLabels = nutritionsData.map((nutrition) => {
        return nutrition.name;
    });

    const mappedFlavenoidsAmount = flavonoidsData.map((flavenoid) => flavenoid.amount)
    const mappedNutritionsAmount = nutritionsData.map((flavenoid) => flavenoid.amount)


    const options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                stacked: true,
                grid: {
                    display: true,
                    color: "rgba(255,99,132,0.2)",
                },
            },
            x: {
                grid: {
                    display: false,
                },
            },
        },
    };

    const labels = flavenoindsLabels;

    const data = {
        labels,
        datasets: [
            {
                label: selectedCategory === "Flavenoids" ? "Flavenoids" : "Nutrition",
                data: selectedCategory === "Flavenoids" ? mappedFlavenoidsAmount : mappedNutritionsAmount,
                backgroundColor: "#c6a87d",
            },
        ],
    };
    return (
        <div className="min-h-[400px]">
            <Bar options={options} data={data} />
        </div>
    );
}
