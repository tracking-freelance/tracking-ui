import { createHashRouter } from "react-router-dom";
import Records from "./Records";
import Root from "./Root";
import Sessions from "./Sessions";
import Users from "./Users";
import ErrorPage from "./Error";

export const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/recordings",
        element: <Users />
      },
      {
        path: "/users/:userId/sessions",
        element: <Sessions />
      },
      {
        path: "/users/:userId/sessions/:sessionId/records",
        element: <Records />
      }
    ]
  }
]);
