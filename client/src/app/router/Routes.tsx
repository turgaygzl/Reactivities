import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import CreateActivity from "../../features/activities/form/CreateActivity";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import EditActivity from "../../features/activities/form/EditActivity";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'activities', element: <ActivityDashboard /> },
            { path: 'activities/:id', element: <ActivityDetails /> },
            { path: 'createActivity', element: <CreateActivity /> },
            { path: 'editActivity/:id', element: <EditActivity/> }
        ]
    }
])