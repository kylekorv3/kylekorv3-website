import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  IconButton,
  Avatar,
  Box,
  Drawer,
  List,
  ListItemText,
  ListItemButton,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useContext } from "react";
import { BlogContext } from "../../BlogContext";

const Navbar = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const [pageListOpen, setPageListOpen] = useState(false);
  const toggleDrawer = (toggle) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setPageListOpen(toggle);
  };
  const { mainRef, portfolioRef, projectsRef, contactRef } = useContext(BlogContext);
  const pageList = [
    {
      label: "Portfolio",
      href: "/#portfolio",
      ref: portfolioRef,
    },
    {
      label: "Projects",
      href: "/#projects",
      ref: projectsRef,
    },
    {
      label: "Contact Me",
      href: "/#contact",
      ref: contactRef,
    },
  ];
  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar ref={mainRef}>
        <Container maxWidth="md" sx={{ display: "flex" }}>
          <Box
            sx={{
              flexWrap: "nowrap",
              flexGrow: 1,
            }}
          >
            <Button
              onClick={() => {
                handleScroll(mainRef.current);
              }}
              sx={{ textTransform: "none" }}
            >
              <Avatar src="../../../assets/K-icon.webp" />
              <Typography
                variant="h5"
                fontWeight="600"
                sx={{ color: "primary.contrastText" }}
              >
                kylekorv3
              </Typography>
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {mobile ? (
              <Box>
                <IconButton
                  onClick={() => {
                    setPageListOpen(!pageListOpen);
                  }}
                >
                  <MenuIcon fontSize="large" sx={{ color: "#d1d0d1" }} />
                </IconButton>
                <Drawer
                  anchor="top"
                  open={pageListOpen}
                  onClose={toggleDrawer(false)}
                >
                  <Toolbar />
                  <List sx={{ bgcolor: "primary.main" }}>
                    {pageList.map((item, index) => (
                      <Box key={item.label}>
                        <ListItemButton
                          onClick={() => {
                            handleScroll(item.ref.current);
                            setPageListOpen(false);
                          }}
                          href={item.href}
                        >
                          <ListItemText
                            primary={item.label}
                            sx={{ color: "primary.contrastText" }}
                          />
                        </ListItemButton>
                        {index !== pageList.length - 1 && <Divider />}
                      </Box>
                    ))}
                  </List>
                </Drawer>
              </Box>
            ) : (
              pageList.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    handleScroll(item.ref.current);
                  }}
                  variant="h6"
                  sx={{
                    color: "#7d828b",
                    textDecoration: "none",
                    ":hover": {
                      color: "primary.contrastText",
                    },
                    mx: 1,
                  }}
                >
                  {item.label}
                </Link>
              ))
            )}
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
