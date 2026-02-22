import { Box, Typography, Container, Stack } from "@mui/material";
import Section from "../theme/section";
import Header from "../components/HeaderMenu";
import WhatsAppFab from "../components/WhatsAppFab";
import { NavButton, CategoryImage, MenuRow, SectionTitle } from "./menu";
// ^ Nota: Si exportaste los componentes desde menu.jsx, los puedes importar así.
// Si no, simplemente cópialos de nuevo en cada archivo.

export default function AlitasPage() {
  return (
    <Section bg="background.default" waveBottom>
      <Box
        sx={{
          minHeight: "100vh",
          position: "relative",
          pt: 4,
          pb: 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundImage: `radial-gradient(circle at 90% 10%, rgba(244, 121, 32, 0.4) 0%, transparent 40%)`,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 1,
          }}
        >
          <Header />
        </Box>

        <Typography
          sx={{
            fontFamily: "Archivo Black, sans-serif",
            fontSize: { xs: "50px", md: "70px" },
            color: "#fff",
            WebkitTextStroke: "1.5px #000",
            textAlign: "center",
            mt: 6,
            mb: 2,
          }}
        >
          ALITAS
        </Typography>

        {/* Navegación interna para volver o cambiar de submenú */}
        <Stack direction="row" spacing={1} sx={{ zIndex: 10, mb: 4 }}>
          <NavButton label="VOLVER AL MENÚ" to="/menu" />
        </Stack>

        <Container maxWidth="xs" sx={{ zIndex: 5, px: 3 }}>
          <SectionTitle>NUESTRAS ALITAS</SectionTitle>
          <MenuRow nombre="Orden (chica)" precio="100" />
          <MenuRow nombre="Orden (grande)" precio="180" />
          <MenuRow nombre="Orden (familiar)" precio="230" />

          <CategoryImage
            src="https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800"
            alt="Alitas Especiales"
          />
        </Container>

        <WhatsAppFab />
      </Box>
    </Section>
  );
}
