import {
  Container,
  Toolbar,
  Grid,
  Typography,
  Link,
} from "@mui/material";

const Copyright = () => {
  return (
    <Typography variant="h6" color="text.secondary">
      {"Copyright © "}
      <Link
        sx={{
          color: "#7d828b",
          textDecoration: "none",
          ":hover": {
            color: "primary.contrastText",
          },
        }}
        href="/"
      >
        kylekorv3
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
};

const Footer = () => {
  return (
    <Toolbar>
      <Container maxWidth="md">
        <Grid
          container
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Copyright />
        </Grid>
      </Container>
    </Toolbar>
  );
};

export default Footer;
