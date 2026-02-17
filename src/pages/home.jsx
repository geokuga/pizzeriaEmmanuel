import { Box, Typography, Stack, Divider } from "@mui/material";
import Section from "../theme/section";
import OrderButtons from "../components/OrderButtons";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Section>
        <Header />
      </Section>

      <Section bg="background.default" waveBottom>
        <Box
          sx={{
            minHeight: "20vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            pt: 1,
            pb: 0,
            textAlign: "center",
            overflow: "visible",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{ width: "90%", maxWidth: 540, mb: 2 }}
          >
            <Divider
              sx={{ flexGrow: 1, borderBottomWidth: 3, borderColor: "#ffde59" }}
            />
            <Typography
              sx={{
                fontFamily: "Oswald, sans-serif",
                fontSize: { xs: "22px", md: "30px" },
                fontWeight: "bold",
                letterSpacing: 3,
                color: "#fff",
                whiteSpace: "nowrap",
              }}
            >
              PROMOS
            </Typography>
            <Divider
              sx={{ flexGrow: 1, borderBottomWidth: 3, borderColor: "#ffde59" }}
            />
          </Stack>

          <Typography
            sx={{
              fontFamily: "Archivo Black, sans-serif",
              fontSize: { xs: "55px", md: "80px" },
              fontWeight: "bold",
              lineHeight: 1,
              color: "#ffde59",
              mb: 2,
            }}
          >
            DIARIAS
          </Typography>

          <Typography
            sx={{
              fontFamily: "Archivo Black, sans-serif",
              fontSize: { xs: "18px", md: "24px" },
              fontWeight: 900,
              letterSpacing: 1,
              color: "#fff",
              mb: 2,
              textShadow: "2px 2px 0px #ff9300",
            }}
          >
            ¡SERVICIO A DOMICILIO!
          </Typography>

          {/* Contenedor de Imagen Central y Destellos */}
          <Box sx={{ position: "relative", mt: 1, display: "inline-block" }}>
            <Box
              component="img"
              src="/img/destello1.png"
              sx={{
                position: "absolute",
                left: { xs: 10, md: -60 },
                top: "20%",
                mb: "-50px",
                width: { xs: "60px", md: "90px" },
              }}
            />

            <Box
              component="img"
              src="/img/logo1.png"
              alt="Pizzas Emmanuel"
              sx={{
                width: "100%",
                maxWidth: { xs: "550px", md: "800px" },
                position: "relative",
                mb: "-40px",
                zIndex: 2,
                filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.2))",
              }}
            />

            <Box
              component="img"
              src="/img/destello2.png"
              sx={{
                position: "absolute",
                right: { xs: 20, md: -60 },
                top: "15%",
                mb: "-50px",
                width: { xs: "60px", md: "90px" },
              }}
            />
          </Box>
        </Box>
      </Section>

      <Section bg="secondary.main">
        <OrderButtons />
      </Section>
    </>
  );
}
