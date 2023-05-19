import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Users from "./Users";
import Sessions from "./Sessions";
import Records from "./Records";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/users",
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
