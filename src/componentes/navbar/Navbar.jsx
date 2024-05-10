import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import NavListDrawer from "./NavListDrawer";
import MenuIcon from "@mui/icons-material/Menu";

const navLinks = [
  {
    title: "Home",
    path: "#",
  },
  {
    title: "Login",
    path: "#login",
  },
  {
    title: "Register",
    path: "#register",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1 }}
          >
            News
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "bloxk" } }}>
            {navLinks.map((item) => (
              <Button
                color="inherit"
                key={item.title}
                component="a"
                href={item.path}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
      >
        <NavListDrawer navLinks={navLinks} />
      </Drawer>
    </>
  );
}
