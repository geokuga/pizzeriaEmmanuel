import React from "react";
import { Box, Typography, Container, Stack, Paper } from "@mui/material";
import Section from "../theme/section";
import Header from "../components/HeaderMenu";
import WhatsAppFab from "../components/WhatsAppFab";
import Footer from "../components/Footer";
import { NavButton } from "./menu";

// Componente para mostrar el producto e ingredientes de forma directa
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

export default function HamburguesasPage() {
  const baseRoute = process.env.PUBLIC_URL || "";
  const imagenHamburguesa = `${baseRoute}/img/hamburguesas1.jpeg`;

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
            {/* TÍTULO AJUSTADO CON SALTO DE LÍNEA */}
            <Box
              sx={{
                textAlign: "center",
                mb: 6,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: { xs: "150px", md: "200px" }, // Aumentado para acomodar 2 líneas
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Archivo Black, sans-serif",
                  fontSize: "clamp(35px, 8vw, 70px)", // Ajustado ligeramente para balancear
                  color: "#ff6a00",
                  lineHeight: 1.1,
                  textAlign: "center",
                  textShadow: "4px 4px 0px #fff, 0px 10px 20px rgba(0,0,0,0.2)",
                  mb: 3,
                }}
              >
                HAMBURGUESAS <br /> Y PAPAS
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
                }}
              >
                <StyledSubtitle>NUESTRAS HAMBURGUESAS</StyledSubtitle>
                <MenuDetalle
                  nombre="Hamburguesa con papas"
                  ingredientes="Pan (Bimbollo super), carne de res, lechuga, cebolla, queso amarillo, jitomate. Aderezos: cátsup, mayonesa y mostaza."
                />
                <MenuDetalle
                  nombre="Hamburguesa de Pollo"
                  ingredientes="Pan, carne de pollo (tipo nuggets), lechuga, cebolla, jitomate. Aderezos: cátsup, mayonesa y mostaza."
                />
                <Typography
                  sx={{
                    fontFamily: "Archivo Black, sans-serif",
                    fontSize: "0.9rem",
                    textAlign: "center",
                    mt: 2,
                    color: "#f47920",
                    textTransform: "uppercase",
                  }}
                >
                  * TODAS VAN ACOMPAÑADAS DE PAPAS A LA FRANCESA
                </Typography>
              </Paper>

              <Paper
                elevation={0}
                sx={{ p: 4, borderRadius: "24px", bgcolor: "#fff" }}
              >
                <StyledSubtitle>PAPAS Y SNACKS</StyledSubtitle>
                <MenuDetalle nombre="Papas a la francesa" />
                <MenuDetalle
                  nombre="Papas con carne y queso"
                  ingredientes="Opciones de carne: Adobada, bistec o chorizo."
                />
                <MenuDetalle nombre="Papas con queso" />
                <MenuDetalle nombre="Papas Gajo" />
                <MenuDetalle nombre="Nuggets (10 pz)" />
              </Paper>

              <Box
                sx={{ display: "flex", justifyContent: "center", mt: 2, px: 1 }}
              >
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "600px",
                    height: { xs: "280px", sm: "400px" },
                    borderRadius: "24px",
                    overflow: "hidden",
                    boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.2)",
                    border: "6px solid #fff",
                  }}
                >
                  <img
                    src={imagenHamburguesa}
                    alt="Hamburguesas"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    onError={(e) => {
                      e.target.src = "img/hamburguesas1.jpeg";
                    }}
                  />
                </Box>
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
