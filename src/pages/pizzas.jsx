import React from "react";
import { Box, Typography, Container, Stack, Paper } from "@mui/material";
import Section from "../theme/section";
import Header from "../components/HeaderMenu";
import WhatsAppFab from "../components/WhatsAppFab";
import Footer from "../components/Footer";
import { NavButton } from "./menu";

// Componente para mostrar la pizza y sus ingredientes de forma directa y clara
const PizzaDetalle = ({ nombre, ingredientes }) => (
  <Box sx={{ mb: 3 }}>
    <Typography
      sx={{
        fontFamily: "Archivo Black, sans-serif",
        fontSize: "1.2rem",
        color: "#000", // Nombre siempre en negro
        textTransform: "uppercase",
      }}
    >
      {nombre}
    </Typography>
    <Typography
      sx={{
        fontFamily: "Roboto, sans-serif",
        fontSize: "1rem",
        color: "#333", // Ingredientes visibles directamente
        mt: 0.5,
        pl: 1,
        fontStyle: "italic",
      }}
    >
      {ingredientes}
    </Typography>
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

export default function PizzasPage() {
  // Rutas relativas ajustadas a tu estructura de carpetas real
  const multimedia = [
    { url: "img/pizzas2.mp4", tipo: "video" },
    { url: "img/pizzas1.jpeg", tipo: "img" },
    { url: "img/pizzas3.jpeg", tipo: "img" },
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
          overflowX: "hidden",
          backgroundImage: `linear-gradient(180deg, rgba(244, 121, 32, 0.15) 0%, #fd7200 100%)`,
        }}
      >
        <Box sx={{ width: "100%", zIndex: 30 }}>
          <Header />
        </Box>

        <Box sx={{ flex: 1, width: "100%", pt: { xs: 8, md: 10 }, pb: 10 }}>
          <Container maxWidth="md">
            {/* TÍTULO PRINCIPAL */}
            <Box
              sx={{
                textAlign: "center",
                mb: 6,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: { xs: "120px", md: "160px" },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Archivo Black, sans-serif",
                  fontSize: "clamp(40px, 12vw, 90px)",
                  color: "#ff6a00",
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                  textShadow: "4px 4px 0px #fff, 0px 10px 20px rgba(0,0,0,0.2)",
                  mb: 2,
                }}
              >
                PIZZAS
              </Typography>
              <NavButton label="VOLVER AL MENÚ" to="/menu" />
            </Box>

            <Stack spacing={3} sx={{ position: "relative", zIndex: 10 }}>
              {/* LISTA DE INGREDIENTES DISPONIBLES */}
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, sm: 4 },
                  borderRadius: "24px",
                  bgcolor: "#fff",
                  border: "2px solid #f47920",
                }}
              >
                <StyledSubtitle>INGREDIENTES</StyledSubtitle>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: "bold",
                    textAlign: "center",
                    lineHeight: 2,
                    textTransform: "uppercase",
                  }}
                >
                  JAMÓN • SALAMI • SALCHICHA • PIÑA • CHAMPIÑÓN • PEPPERONI •
                  TOCINO • CHORIZO • MORRÓN • CEBOLLA • JALAPEÑO • ACEITUNAS •
                  ELOTE • CÉRRANO
                </Typography>
              </Paper>

              {/* ESPECIALIDADES I */}
              <Paper
                elevation={0}
                sx={{ p: 4, borderRadius: "24px", bgcolor: "#fff" }}
              >
                <StyledSubtitle>ESPECIALIDADES I</StyledSubtitle>
                <PizzaDetalle nombre="HAWAIIANA" ingredientes="• Jamón, Piña" />
                <PizzaDetalle
                  nombre="MEXICANA"
                  ingredientes="• Jamón, Chorizo, Cebolla, Jitomate, Jalapeño"
                />
                <PizzaDetalle
                  nombre="VEGETARIANA"
                  ingredientes="• Elote, Champiñón, Morrón"
                />
                <PizzaDetalle
                  nombre="ITALIANA"
                  ingredientes="• Salami, Jamón"
                />
                <PizzaDetalle
                  nombre="VENECIANA"
                  ingredientes="• Jamón, Salchicha"
                />
              </Paper>

              {/* ESPECIALIDADES II */}
              <Paper
                elevation={0}
                sx={{ p: 4, borderRadius: "24px", bgcolor: "#fff" }}
              >
                <StyledSubtitle>ESPECIALIDADES II</StyledSubtitle>
                <PizzaDetalle
                  nombre="FANTASÍA"
                  ingredientes="• Pepperoni, Morrón, Champiñón, Aceitunas"
                />
                <PizzaDetalle
                  nombre="ALEMANA"
                  ingredientes="• Salami, Champiñón, Morrón"
                />
                <PizzaDetalle
                  nombre="RANCHERA"
                  ingredientes="• Jamón, Chorizo, Jalapeño"
                />
                <PizzaDetalle
                  nombre="NAPOLITANA"
                  ingredientes="• Pepperoni, Cebolla"
                />
                <PizzaDetalle
                  nombre="FRÍA"
                  ingredientes="• Jamón, Salami, Salchicha"
                />
              </Paper>

              {/* ESPECIALIDADES III */}
              <Paper
                elevation={0}
                sx={{ p: 4, borderRadius: "24px", bgcolor: "#fff" }}
              >
                <StyledSubtitle>ESPECIALIDADES III</StyledSubtitle>
                <PizzaDetalle
                  nombre="AZTECA"
                  ingredientes="• Chorizo, Tocino, Champiñón"
                />
                <PizzaDetalle
                  nombre="BBQ"
                  ingredientes="• Jamón, Nuggets, Cebolla, Morrón, Elote"
                />
                <PizzaDetalle
                  nombre="ESPECIALIDAD"
                  ingredientes="• Jamón, Salami, Salchicha, Piña, Champiñón, Chorizo"
                />
                <PizzaDetalle
                  nombre="SUPREMA"
                  ingredientes="• Pepperoni, Morrón, Champiñón, Aceitunas, Cebolla, Bistec"
                />
                <PizzaDetalle
                  nombre="TEXANA"
                  ingredientes="• Salami, Bistec o Adobada, Cebolla, Cilantro, Cérrano"
                />
              </Paper>

              {/* GALERÍA MULTIMEDIA (IMÁGENES Y VIDEO) */}
              <Stack spacing={2} sx={{ mt: 4 }}>
                {multimedia.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: "100%",
                      maxWidth: "600px",
                      height: { xs: "220px", sm: "350px" },
                      mx: "auto",
                      borderRadius: "24px",
                      overflow: "hidden",
                      boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.2)",
                      border: "6px solid #fff",
                      bgcolor: "#000",
                    }}
                  >
                    {item.tipo === "video" ? (
                      <video
                        controls
                        muted
                        autoPlay
                        loop
                        playsInline
                        preload="auto"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      >
                        <source src={item.url} type="video/mp4" />
                        <source
                          src={`/pizzeriaEmmanuel/${item.url}`}
                          type="video/mp4"
                        />
                      </video>
                    ) : (
                      <img
                        src={item.url}
                        alt={`Pizza ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        onError={(e) => {
                          e.target.src = `/pizzeriaEmmanuel/${item.url}`;
                        }}
                      />
                    )}
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Container>
        </Box>
        <Footer />
        <WhatsAppFab />
      </Box>
    </Section>
  );
}
