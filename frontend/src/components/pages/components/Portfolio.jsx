import {
  Container,
  Grid,
  Avatar,
  Button,
  Typography,
} from "@mui/material";
import skillList from "./json/skillList";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Portfolio = () => {
  const upwardAnimation = useAnimation();
  const boxAnimation = useAnimation();
  const [upwardRef, upwardInView] = useInView({
    threshold: 0.5,
  });
  const [downwardRef, downwardInView] = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (upwardInView) {
      upwardAnimation.start({
        y: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
        opacity: 1,
      });
    } else {
      upwardAnimation.start({
        y: "1em",
        opacity: 0,
      });
    }
    if (downwardInView) {
      boxAnimation.start({
        opacity: 1,
        x: 0,
        y: 0,
      });
    } else {
      boxAnimation.start({
        opacity: 0,
        x: 50,
        y: 50,
      });
    }
  }, [upwardInView, downwardInView]);
  return (
    <div>
      <Container
        sx={{
          height: "20vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "primary.contrastText",
        }}
        ref={upwardRef}
      >
        <Typography
          component={motion.div}
          variant="h3"
          fontWeight="600"
          animate={upwardAnimation}
        >
          Techniques
        </Typography>
      </Container>
      <Container
        sx={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          bgcolor: "primary.contrastText",
        }}
      >
        <Grid
          container
          maxWidth="sm"
          sx={{
            width: "100%",
          }}
          ref={downwardRef}
        >
          {skillList.map((item, idx) => (
            <Grid
              item
              key={item.label}
              xs={4}
              sm={4}
              md={4}
              sx={{ display: "flex", justifyContent: "center", p: 3 }}
            >
              <motion.div
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={boxAnimation}
                transition={{ duration: 1, delay: 0.1 * idx  }}
              >
                <Button
                  sx={{
                    ":hover": {
                      bgcolor: "transparent",
                    },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    variant="square"
                    src={item.icon}
                    sx={{ width: 80, height: 80, mb: 1 }}
                  />
                  <Typography>{item.label}</Typography>
                </Button>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Portfolio;
