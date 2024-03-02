import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes/routesConfig";
import RootLayout from "./pages/RootLayout";

//Pages import
import Page404 from "./pages/Page404";

function App() {
    const router = createBrowserRouter([
        {
            element: <RootLayout />,
            errorElement: <Page404 />,
            children: routes,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
