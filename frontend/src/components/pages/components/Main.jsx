import { Container, Typography, Box, IconButton, Toolbar } from "@mui/material";
import iconList from "./json/iconList";
import { useContext } from "react";
import { BlogContext } from "../../BlogContext";

const Main = () => {
  const { portfolioRef } = useContext(BlogContext);

  return (
    <Container
      sx={{
        height: "100vh",
        backgroundImage: "url(../../../assets/doge-bg.webp)",
        backgroundPosition: "83%",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        pt: "50vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            fontWeight="600"
            sx={{ color: "primary.contrastText", mb: 5 }}
          >
            Korver Tsai 蔡汶璋
          </Typography>
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ color: "primary.contrastText", mb: 5 }}
          >
            Web Developer / Crypto Trader
          </Typography>
          <Typography
            variant="h6"
            fontWeight="600"
            sx={{ color: "primary.contrastText", mb: 5 }}
          >
            A Developer who enjoys creating useful stuffs !
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          {iconList.map((item) => (
            <IconButton
              key={item.label}
              target="_blank"
              href={item.href}
              sx={{ color: "primary.contrastText" }}
            >
              {item.icon}
            </IconButton>
          ))}
        </Box>
      </Box>
      <Toolbar ref={portfolioRef} />
    </Container>
  );
};

export default Main;
