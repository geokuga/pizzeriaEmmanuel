import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import Section from "../theme/section";
import Header from "../components/HeaderMenu";
import WhatsAppFab from "../components/WhatsAppFab";
import Footer from "../components/Footer";
import { NavButton } from "./menu";

// Componente para las tarjetas de promoción unificado
const PromoCard = ({ titulo, detalle, precio, especial = false }) => (
  <Paper
    elevation={3}
    sx={{
      p: 2,
      height: "140px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: especial
        ? "linear-gradient(45deg, #d32f2f 30%, #f47920 90%)"
        : "#fff176",
      color: especial ? "#fff" : "#000",
      borderRadius: "20px",
      border: "3px solid #fff",
      textAlign: "center",
      width: "100%",
    }}
  >
    <Typography
      sx={{
        fontFamily: "Archivo Black, sans-serif",
        fontSize: "0.85rem",
        lineHeight: 1.1,
        mb: 0.5,
        textTransform: "uppercase",
      }}
    >
      {titulo}
    </Typography>
    <Typography
      sx={{
        fontFamily: "Archivo Black, sans-serif",
        fontSize: especial ? "1.1rem" : "1.3rem",
        color: especial ? "#fff" : "#d32f2f",
      }}
    >
      {especial ? detalle : `$${precio}`}
    </Typography>
    {!especial && (
      <Typography
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontSize: "0.75rem",
          fontWeight: "bold",
          mt: 0.5,
          color: "#333",
          textTransform: "uppercase",
        }}
      >
        {detalle}
      </Typography>
    )}
  </Paper>
);

export default function PromocionesPage() {
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
          backgroundImage: `linear-gradient(180deg, rgba(244, 121, 32, 0.2) 0%, #fd7200 100%)`,
        }}
      >
        <Box sx={{ width: "100%", zIndex: 30 }}>
          <Header />
        </Box>

        <Box sx={{ flex: 1, width: "100%", pt: { xs: 6, md: 8 }, pb: 10 }}>
          <Container maxWidth="sm">
            {/* TÍTULO CON SALTO DE LÍNEA */}
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Typography
                sx={{
                  fontFamily: "Archivo Black, sans-serif",
                  fontSize: "clamp(35px, 8vw, 55px)",
                  color: "#fff",
                  textTransform: "uppercase",
                  textShadow: "3px 3px 0px #f47920",
                  lineHeight: 1.1, // Ajustado para el salto de línea
                  mb: 2,
                }}
              >
                PROMOCIONES <br /> DIARIAS
              </Typography>
              <NavButton label="VOLVER AL MENÚ" to="/menu" />
            </Box>

            {/* GRID DE 2 COLUMNAS */}
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={6}>
                <PromoCard
                  especial
                  titulo="PROMO MIÉRCOLES"
                  detalle="2 GRANDES X $229"
                />
              </Grid>
              <Grid item xs={6}>
                <PromoCard
                  titulo="1 GRANDE"
                  detalle="1 Refresco + Papas"
                  precio="220"
                />
              </Grid>
              <Grid item xs={6}>
                <PromoCard
                  titulo="1 FAMILIAR"
                  detalle="1 Refresco + Papas"
                  precio="245"
                />
              </Grid>
              <Grid item xs={6}>
                <PromoCard
                  titulo="2 FAMILIARES"
                  detalle="1 Refresco"
                  precio="330"
                />
              </Grid>
              <Grid item xs={6}>
                <PromoCard
                  titulo="2 GRANDES"
                  detalle="1 Refresco"
                  precio="290"
                />
              </Grid>
              <Grid item xs={6}>
                <PromoCard
                  titulo="2 OLÍMPICAS"
                  detalle="1 Refresco"
                  precio="380"
                />
              </Grid>
            </Grid>

            {/* NOTAS FINALES */}
            <Box sx={{ mt: 5, textAlign: "center", color: "#fff", px: 2 }}>
              <Typography
                sx={{
                  fontSize: "0.7rem",
                  fontWeight: "bold",
                  mb: 0.5,
                  textTransform: "uppercase",
                }}
              >
                * PRECIOS SUJETOS A CAMBIOS SIN PREVIO AVISO
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.7rem",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                * LAS PROPINAS DEL REPARTIDOR NO VAN INCLUIDAS
              </Typography>
            </Box>
          </Container>
        </Box>

        <Footer />
        <WhatsAppFab />
      </Box>
    </Section>
  );
}
