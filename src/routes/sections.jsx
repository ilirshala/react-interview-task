import { lazy, Suspense } from "react";
import { Outlet, useRoutes } from "react-router-dom";

export const IndexPage = lazy(() => import("../pages/home"));
export const JobsiteDetails = lazy(() => import("../pages/jobsite-detail"));

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
        {
          path: "/:jobsiteId",
          element: <JobsiteDetails />,
        },
      ],
    },
  ]);
  return routes;
}
