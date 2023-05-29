import { createHashRouter } from "react-router-dom";
import Records from "./Records";
import Root from "./Root";
import Sessions from "./Sessions";
import Users from "./Users";

export const router = createHashRouter([
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
