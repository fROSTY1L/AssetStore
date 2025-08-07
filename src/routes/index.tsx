import type { RouteObject } from "react-router-dom";
import MainLayout from "../app/layouts/MainLayout";
import { clientRoutes } from "./clientRoutes";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            ...clientRoutes,
            { path: '*', element: <div>Error 404</div>}
        ]
    }
]