import {
  Container,
  Button,
  Typography,
  Box,
  TextField,
  FormControl,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import iconList from "./json/iconList";
import mailSchema from "../../mailSchema";
import axios from "axios";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Contact = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const contactAnimation = useAnimation();
  const [contactRef, contactInView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (contactInView) {
      contactAnimation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1.5,
        },
        opacity: 1,
      });
    } else {
      contactAnimation.start({ x: "-100vw", opacity: 0 });
    }
  });
  return (
    <div>
      <Container
        sx={{
          height: "15vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          bgcolor: "primary.contrastText",
        }}
        ref={contactRef}
      >
        <Container maxWidth="sm">
          <Typography
            component={motion.div}
            variant="h4"
            fontWeight="600"
            animate={contactAnimation}
          >
            Contact Me
          </Typography>
        </Container>
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
        <Container maxWidth="sm">
          <Formik
            initialValues={{ subject: "", body: "" }}
            validationSchema={mailSchema}
            onSubmit={async (data, actions) => {
              const res = await axios.post("/api/contact", data);
              if (res.data.errorMsg) {
                alert(res.data.errorMsg);
              } else {
                alert(res.data.msg);
                actions.resetForm();
              }
            }}
          >
            {({ errors, touched }) => (
              <Box component={motion.div} animate={contactAnimation}>
                <Box component={Form} sx={{ px: !mobile && "20%" }}>
                  <FormControl fullWidth sx={{ my: 1 }}>
                    <Typography variant="h5" fontWeight="600">
                      Subject
                    </Typography>
                  </FormControl>
                  <FormControl fullWidth sx={{ my: 1 }}>
                    <Field
                      as={TextField}
                      label={
                        errors.subject && touched.subject
                          ? errors.subject
                          : "Enter Subject..."
                      }
                      name="subject"
                      variant="outlined"
                      size="small"
                    />
                  </FormControl>
                  <FormControl fullWidth sx={{ my: 1 }}>
                    <Typography variant="h5" fontWeight="600">
                      Body
                    </Typography>
                  </FormControl>
                  <FormControl fullWidth sx={{ my: 1 }}>
                    <Field
                      as={TextField}
                      name="body"
                      label={
                        errors.body && touched.body
                          ? errors.body
                          : "Enter Body..."
                      }
                      variant="outlined"
                      size="small"
                      multiline
                      rows={4}
                    />
                  </FormControl>
                  <FormControl fullWidth sx={{ my: 3 }}>
                    <Button type="submit" variant="outlined" size="normal">
                      Send Mail
                    </Button>
                  </FormControl>
                </Box>
              </Box>
            )}
          </Formik>
          <Box sx={{ textAlign: "center" }}>
            {iconList.map((item) => (
              <IconButton
                key={item.label}
                target="_blank"
                href={item.href}
                sx={{
                  color: "primary",
                  ":hover": {
                    bgcolor: "transparent",
                  },
                  mx: 1,
                }}
              >
                {item.icon}
              </IconButton>
            ))}
          </Box>
        </Container>
      </Container>
    </div>
  );
};

export default Contact;
