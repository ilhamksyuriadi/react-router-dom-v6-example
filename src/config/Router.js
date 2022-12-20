import {
    createBrowserRouter,
} from "react-router-dom";
import RenderLayout from "./RenderLayout";
import SectionHome from '../components/SectionHome'
import SectionTestimoni from "../components/SectionTestimoni";
import SectionDetail from '../components/SectionDetail'

// NOTES: each time you want to add new page, add it here

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RenderLayout children={<SectionHome />} />,
    },
    {
        path: "/testimoni",
        element: <RenderLayout children={<SectionTestimoni />} />,
    },
    {
        path: "/detail",
        element: <RenderLayout children={<SectionDetail />} />,
    },
]);