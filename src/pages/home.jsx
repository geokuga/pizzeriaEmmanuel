import { Box, Typography, Button, Stack, createTheme } from "@mui/material";
import Section from "../theme/section";
import Footer from "../components/footer";
import Header from "../components/header";
import Divider from "@mui/material/Divider";

export default function Home() {
  return (
    <>
      <Section>
        <Header />
      </Section>

      <Section bg="background.default" waveBottom>
        <Box
          sx={{
            minHeight: "70vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            px: 2,
            color: "text.primary",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{ width: "90%", maxWidth: 540 }}
            position="absolute"
            top={5}
          >
            <Divider
              sx={{
                flexGrow: 1,
                borderBottomWidth: 4,
                borderColor: "#ffde59",
              }}
            />

            <Typography
              sx={{
                fontFamily: "Oswald, sans-serif",
                fontSize: {xs: "35px"},
                fontWeight: "bold",
                letterSpacing: 2,
                color: "text.Lola",
                WebkitTextStroke: "1px #ffde59",
                whiteSpace: "nowrap",
              }}
            >
              PROMOS
            </Typography>

            <Divider
              sx={{
                flexGrow: 1,
                borderBottomWidth: 4,
                borderColor: "#ffde59",
              }}
            />
          </Stack>

          <Typography
            sx={{
              fontFamily: "Archivo Black, sans-serif",
              fontSize: {xs: "70px"},
              fontWeight: "bold",
              letterSpacing: 2,
              color: "#ffde59",
              position: "absolute",
              mb: 32,
            }}
          >
            DIARIAS
          </Typography>

          <Typography
            sx={{
              fontFamily: "Archivo Black, sans-serif",
              fontSize: "25px",
              fontWeight: "1000",
              letterSpacing: 2,
              color: "#ffff",
              position: "absolute",
              mb: 15,

              WebkitTextStroke: "2px #ff9300",

              textShadow: `
              0 0 5px #ff9300,
              0 0 10px #ff9300,
              0 0 20px #ff9300
              `,
            }}
          >
            !SERVICIO A DOMICILIO!
          </Typography>

          <Box
            component="img"
            src="/img/logo1.png"
            alt="logoPrincipal"
            sx={{
              width: { xs: "1150px", md: "900px", lg: "1200px" },
              maxWidth: "70vh",
              position: "absolute",
              zIndex: 3,
              mt: 40,
            }}
          />
          <Box
            component="img"
            src="img\destello1.png"
              sx={{
              width: { xs: "1150px", md: "900px", lg: "1200px" },
              maxWidth: "90px",
              position: "absolute",
              zIndex: 3,
              mr: 42,
              mt: 30
            }}
          />
           <Box
            component="img"
            src="img\destello2.png"
              sx={{
              width: { xs: "1150px", md: "900px", lg: "1200px" },
              maxWidth: "90px",
              position: "absolute",
              zIndex: 3,
              ml: 39,
              mt: 25
            }}
          />
        </Box>
      </Section>

      <Section bg="secondary.main">
        <Footer />
      </Section>
    </>
  );
}
