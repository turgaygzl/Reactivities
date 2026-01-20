import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import CreateActivity from "../../features/activities/form/CreateActivity";
import EditActivity from "../../features/activities/form/EditActivity";
import ActivityDetailPage from "../../features/activities/details/ActivityDetailPage";
import Counter from "../../features/counter/Counter";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'activities', element: <ActivityDashboard /> },
            { path: 'activities/:id', element: <ActivityDetailPage /> },
            { path: 'createActivity', element: <CreateActivity /> },
            { path: 'editActivity/:id', element: <EditActivity /> },
            { path: 'counter', element: <Counter /> }
        ]
    }
])