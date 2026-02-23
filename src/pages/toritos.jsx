import React from "react";
import { Box, Typography, Container, Stack, Paper } from "@mui/material";
import Section from "../theme/section";
import Header from "../components/HeaderMenu";
import WhatsAppFab from "../components/WhatsAppFab";
import Footer from "../components/Footer";
import { NavButton } from "./menu";

const MenuDetalle = ({ nombre, ingredientes }) => (
  <Box sx={{ mb: 3 }}>
    <Typography
      sx={{
        fontFamily: "Archivo Black, sans-serif",
        fontSize: "1.2rem",
        color: "#000",
        textTransform: "uppercase",
      }}
    >
      {nombre}
    </Typography>
    {ingredientes && (
      <Typography
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontSize: "1rem",
          color: "#333",
          mt: 0.5,
          pl: 1,
          fontStyle: "italic",
        }}
      >
        {ingredientes}
      </Typography>
    )}
  </Box>
);

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

// Componente para las imágenes grandes con el estilo de marco original
const LargeMediaFrame = ({ src, alt }) => (
  <Box
    sx={{
      width: "100%",
      maxWidth: "800px", // Aumentado para que ocupe más ancho
      height: { xs: "280px", sm: "450px" },
      borderRadius: "24px",
      overflow: "hidden",
      boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.3)",
      border: "6px solid #fff",
      mb: 4, // Espacio entre imágenes
      mx: "auto",
    }}
  >
    <img
      src={src}
      alt={alt}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
      onError={(e) => {
        e.target.src =
          "https://via.placeholder.com/600x400?text=Emmanuel+Pizza";
      }}
    />
  </Box>
);

export default function ToritosPage() {
  const baseRoute = process.env.PUBLIC_URL || "";
  // Definimos las rutas según tu carpeta img
  const img1 = `${baseRoute}/img/toritos1.jpeg`;
  const img2 = `${baseRoute}/img/toritos2.jpeg`;

  return (
    <Section bg="#fcc99f">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          overflowX: "hidden",
          backgroundImage: `linear-gradient(180deg, rgba(244, 121, 32, 0.15) 0%, #fd7200 100%)`,
        }}
      >
        <Box sx={{ width: "100%", zIndex: 30 }}>
          <Header />
        </Box>

        <Box sx={{ flex: 1, width: "100%", pt: { xs: 8, md: 10 }, pb: 10 }}>
          <Container maxWidth="md">
            <Box
              sx={{
                textAlign: "center",
                mb: 6,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: { xs: "150px", md: "200px" },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Archivo Black, sans-serif",
                  fontSize: "clamp(35px, 9vw, 75px)",
                  color: "#ff6a00",
                  lineHeight: 1.1,
                  textAlign: "center",
                  textShadow: "4px 4px 0px #fff, 0px 10px 20px rgba(0,0,0,0.2)",
                  mb: 3,
                }}
              >
                TORITOS <br /> Y MÁS
              </Typography>
              <NavButton label="VOLVER AL MENÚ" to="/menu" />
            </Box>

            <Stack spacing={4} sx={{ position: "relative", zIndex: 10 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: "24px",
                  bgcolor: "#fff",
                  border: "2px solid #f47920",
                  mb: 2,
                }}
              >
                <StyledSubtitle>ESPECIALIDADES EN HARINA</StyledSubtitle>

                <MenuDetalle
                  nombre="Toritos"
                  ingredientes="Tortilla de harina, carne a elegir (chorizo, adobada o bistec), queso gratinado, salsa de tomate, cilantro y cebolla."
                />

                <MenuDetalle
                  nombre="Gringas"
                  ingredientes="Tortilla de harina, carne a elegir (chorizo, adobada o bistec), queso gratinado, salsa de tomate, cilantro y cebolla."
                />

                <MenuDetalle
                  nombre="Sincronizadas"
                  ingredientes="Jamón y queso, acompañadas de lechuga, jitomate, cebolla, cátsup, mayonesa y mostaza."
                />
              </Paper>

              {/* IMÁGENES GRANDES APILADAS */}
              <Box sx={{ width: "100%", mt: 2 }}>
                <LargeMediaFrame src={img1} alt="Toritos Especialidad 1" />
                <LargeMediaFrame src={img2} alt="Toritos Especialidad 2" />
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
