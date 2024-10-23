import { lazy, Suspense } from "react";
import { Outlet, useRoutes } from "react-router-dom";

export const IndexPage = lazy(() => import("../pages/home"));

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <Suspense>
          <Outlet />
        </Suspense>
      ),
      children: [
        {
          element: <IndexPage />,
          index: true,
        },
      ],
    },
  ]);
  return routes;
}
