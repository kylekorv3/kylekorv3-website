import { Container, Typography } from "@mui/material";
import Footer from "./components/Footer";

const NotFound = () => {
  return (
    <div>
      <Container
        sx={{
          height: "100vh",
          bgcolor: "primary.contrastText",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" color="primary.main" sx={{ mx: 2 }}>
          404
        </Typography>
        <Typography variant="h5" color="primary.main">
          page not found
        </Typography>
      </Container>
      <Footer />
    </div>
  );
};

export default NotFound;
