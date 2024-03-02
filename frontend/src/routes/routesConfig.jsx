import React from "react";
import { PathConstants } from "./pathConstants";

const Homepage = React.lazy(() => import("../pages/Homepage.jsx"));
const Menu = React.lazy(() => import("../pages/Menu.jsx"));
const Gallery = React.lazy(() => import("../pages/Gallery.jsx"));
const Contactus = React.lazy(() => import("../pages/Homepage.jsx"));
const OurKitchen = React.lazy(() => import("../pages/OurKitchen.jsx"));
const Reservations = React.lazy(() => import("../pages/Reservations.jsx"));
const Faq = React.lazy(() => import("../pages/Faq.jsx"));
const MenuItemSingle = React.lazy(() => import("../pages/MenuItemSingle.jsx"));
const Events = React.lazy(() => import("../pages/Events.jsx"));
const Event = React.lazy(() => import("../pages/Event.jsx"));

export const routes = [
    {
        path: PathConstants.HOME,
        element: <Homepage />,
    },
    {
        path: PathConstants.MENU,
        element: <Menu />,
    },
    {
        path: PathConstants.MENU_ITEM,
        element: <MenuItemSingle />,
    },
    {
        path: PathConstants.GALLERY,
        element: <Gallery />,
    },
    {
        path: PathConstants.CONTACTUS,
        element: <Contactus />,
    },
    {
        path: PathConstants.KITCHEN,
        element: <OurKitchen />,
    },
    {
        path: PathConstants.EVENTS,
        element: <Events />,
    },
    {
        path: '/events/:id',
        element: <Event />,
    },
    {
        path: PathConstants.RESERVATIONS,
        element: <Reservations />,
    },
    {
        path: PathConstants.FAQ,
        element: <Faq />,
    },
];
