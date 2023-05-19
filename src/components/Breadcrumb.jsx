import { Breadcrumbs, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function MyBreadCrumbs() {
  const l = useLocation();
  const c = l.pathname
    .split("/")
    .slice(1)
    .filter((e, i) => i % 2 === 0);

  return (
    <Breadcrumbs>
      <Typography>Sessions</Typography>
    </Breadcrumbs>
  );
}
