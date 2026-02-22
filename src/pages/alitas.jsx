import React from "react";
import { Box, Typography, Container, Stack, Paper } from "@mui/material";
import Section from "../theme/section";
import Header from "../components/HeaderMenu";
import WhatsAppFab from "../components/WhatsAppFab";
import Footer from "../components/Footer";
import { NavButton, CategoryImage, MenuRow } from "./menu";

// SUBTÍTULO REFINADO: Naranja sobre fondo claro
const StyledSubtitle = ({ children }) => (
  <Box sx={{ mb: 3, mt: 2 }}>
    <Typography
      sx={{
        fontFamily: "Archivo Black, sans-serif",
        fontSize: "1.5rem",
        color: "#f47920",
        textTransform: "uppercase",
        display: "flex",
        alignItems: "center",
        "&::after": {
          content: '""',
          flex: 1,
          height: "3px",
          bgcolor: "rgba(244, 121, 32, 0.2)",
          ml: 2,
          borderRadius: "10px",
        },
      }}
    >
      {children}
    </Typography>
  </Box>
);

export default function AlitasPage() {
  const sabores = [
    { nombre: "Ajo parmesano", nivel: 0 },
    { nombre: "BBQ", nivel: 0 },
    { nombre: "Ajo especial", nivel: 1 },
    { nombre: "Buffalo", nivel: 2 },
    { nombre: "Cajun", nivel: 2 },
    { nombre: "Spicy Garlic", nivel: 2 },
    { nombre: "Chiltepin", nivel: 3 },
    { nombre: "Mango habanero", nivel: 5 },
  ];

  const renderFlames = (nivel) => "🔥".repeat(nivel);

  // Definimos las rutas usando PUBLIC_URL para compatibilidad con GitHub Pages
  const imagenesAlitas = [
    `${process.env.PUBLIC_URL}/img/Alitas3.jpeg`,
    `${process.env.PUBLIC_URL}/img/Alitas2.jpeg`,
    `${process.env.PUBLIC_URL}/img/Alitas1.jpeg`,
  ];

  return (
    <Section bg="#fcc99f">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          backgroundImage: `linear-gradient(180deg, rgba(244, 121, 32, 0.15) 0%, #fd7200 100%)`,
        }}
      >
        <Box sx={{ width: "100%", zIndex: 10 }}>
          <Header />
        </Box>

        <Box sx={{ flex: 1, width: "100%", pt: 5, pb: 10 }}>
          <Container maxWidth="md">
            {/* TÍTULO PRINCIPAL CON RELIEVE */}
            <Box
              sx={{
                textAlign: "center",
                mb: 4,
                position: "relative",
                zIndex: 100,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Archivo Black, sans-serif",
                  fontSize: { xs: "60px", md: "90px" },
                  color: "#ff6a00",
                  lineHeight: 1,
                  textShadow: `
                    4px 4px 0px #fff, 
                    0px 10px 20px rgba(0,0,0,0.15)
                  `,
                  mb: 2,
                }}
              >
                ALITAS
              </Typography>
              <Stack direction="row" justifyContent="center">
                <NavButton label="VOLVER AL MENÚ" to="/menu" />
              </Stack>
            </Box>

            <Stack spacing={4} sx={{ position: "relative", zIndex: 1 }}>
              {/* SECCIÓN PRECIOS */}
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: "24px",
                  bgcolor: "#fff",
                  border: "2px solid rgba(244, 121, 32, 0.1)",
                  boxShadow: "0px 10px 30px rgba(244, 121, 32, 0.05)",
                }}
              >
                <StyledSubtitle>NUESTRAS ALITAS</StyledSubtitle>
                <Box sx={{ "& .MuiTypography-root": { color: "#444" } }}>
                  <MenuRow nombre="Orden (chica)" precio="100" />
                  <MenuRow nombre="Orden (grande)" precio="180" />
                  <MenuRow nombre="Orden (familiar)" precio="230" />
                </Box>
              </Paper>

              {/* SECCIÓN SALSAS */}
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: "24px",
                  bgcolor: "#fff",
                  border: "2px solid rgba(244, 121, 32, 0.1)",
                }}
              >
                <StyledSubtitle>ESCOGE TU SALSA</StyledSubtitle>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                    gap: 1.5,
                  }}
                >
                  {sabores.map((sabor) => (
                    <Box
                      key={sabor.nombre}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        p: 1.5,
                        borderRadius: "12px",
                        bgcolor: "rgba(244, 121, 32, 0.03)",
                        border: "1px solid rgba(244, 121, 32, 0.05)",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Oswald",
                          color: "#f47920",
                          fontWeight: "bold",
                          textTransform: "uppercase",
                        }}
                      >
                        {sabor.nombre}
                      </Typography>
                      <Box
                        sx={{
                          fontSize: "1.1rem",
                          filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.1))",
                        }}
                      >
                        {renderFlames(sabor.nivel)}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Paper>

              {/* IMÁGENES VERTICALES AJUSTADAS */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                  gap: 3,
                }}
              >
                {imagenesAlitas.map((img, i) => (
                  <Box
                    key={i}
                    sx={{
                      height: "450px",
                      borderRadius: "24px",
                      overflow: "hidden",
                      boxShadow: "0px 15px 35px rgba(244, 121, 32, 0.1)",
                      border: "4px solid #fff",
                    }}
                  >
                    <img
                      src={img}
                      alt={`Alitas ${i + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      // Fallback por si la imagen no carga
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/450x600?text=Cargando+Alitas";
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Stack>
          </Container>
        </Box>

        <Footer />
        <WhatsAppFab />
      </Box>
    </Section>
  );
}
