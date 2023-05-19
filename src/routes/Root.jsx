import PersonIcon from "@mui/icons-material/Person";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import MyBreadCrumbs from "../components/Breadcrumb";

export default function Root() {
  const v = useNavigate();
  return (
    <Box sx={{ width: "100vw", height: "100vh", bgcolor: "background.paper", display: "flex" }}>
      <Box sx={{ borderRight: "1px solid #cccccc" }}>
        <List>
          <ListItem>
            <ListItemButton
              onClick={() => {
                v("/users");
              }}
            >
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Users"></ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Box sx={{ flexGrow: 1, padding: "0 20px", display: "flex", flex: 1, flexDirection: "column" }}>
        {/* <MyBreadCrumbs /> */}
        <Box sx={{ marginTop: "20px" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
