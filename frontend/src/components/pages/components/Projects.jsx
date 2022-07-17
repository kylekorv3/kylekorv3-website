import {
  Container,
  Toolbar,
  Button,
  CardMedia,
  CardContent,
  Typography,
  useTheme,
  IconButton,
  useMediaQuery,
  Box,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useContext, useState, useEffect } from "react";
import { BlogContext } from "../../BlogContext";
import projectList from "./json/projectList";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Projects = () => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.between("md", "xl"));
  const { projectsRef, contactRef } = useContext(BlogContext);
  const [selectProject, setSelectProject] = useState(0);
  const upwardAnimation = useAnimation();
  const [upwardRef, upwardInView] = useInView({
    threshold: 1,
  });
  useEffect(() => {
    if (upwardInView) {
      upwardAnimation.start({
        y: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3
        },
        opacity: 1,
      });
    } else {
      upwardAnimation.start({
        y: "1em",
        opacity: 0,
      });
    }
  }, [upwardInView]);

  return (
    <div>
      <Container disableGutters>
        <Toolbar ref={projectsRef} sx={{ bgcolor: "primary.contrastText" }} />
      </Container>
      <Container
        sx={{
          height: "20vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "primary",
        }}
        ref={upwardRef}
      >
        <Typography
          variant="h3"
          fontWeight="600"
          sx={{ color: "primary.contrastText" }}
          component={motion.div}
          animate={upwardAnimation}
        >
          Projects
        </Typography>
      </Container>
      <Container
        sx={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          bgcolor: "primary",
          color: "primary.contrastText",
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ px: desktop && 8 }}>
            <Button target="_blank" href={projectList[selectProject].href}>
              <CardMedia
                component="img"
                image={projectList[selectProject].thumbnail}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Button>
            <CardContent>
              <Typography
                variant="h4"
                fontWeight="700"
                sx={{ textAlign: "center", my: 1 }}
              >
                {projectList[selectProject].label}
              </Typography>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                {projectList[selectProject].description}
              </Typography>
            </CardContent>
          </Box>
        </Container>
        <Box>
          {projectList.map((item, idx) => (
            <IconButton
              key={idx}
              onClick={() => {
                setSelectProject(idx);
              }}
            >
              <FiberManualRecordIcon
                sx={{
                  color:
                    selectProject === idx
                      ? "primary.contrastText"
                      : "text.secondary",
                }}
              />
            </IconButton>
          ))}
        </Box>
      </Container>
      <Toolbar ref={contactRef} />
    </div>
  );
};

export default Projects;
