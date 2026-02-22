import { Box, Typography, Container, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Section from "../theme/section";
import Header from "../components/HeaderMenu";
import WhatsAppFab from "../components/WhatsAppFab";
import Footer from "../components/Footer";

// Componente para manejar Imágenes o Videos dinámicamente
const MediaContent = ({ src, alt }) => {
  const baseRoute = process.env.PUBLIC_URL || "";
  const fullPath = `${baseRoute}${src}`;
  const isVideo = src.toLowerCase().endsWith(".mp4");

  return (
    <Box
      sx={{
        width: "100%",
        mt: 3,
        mb: 2,
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0px 10px 25px rgba(0,0,0,0.4)",
        border: "3px solid #fff",
        position: "relative",
        lineHeight: 0,
        bgcolor: "#000",
      }}
    >
      {isVideo ? (
        <Box
          component="video"
          src={fullPath}
          autoPlay
          loop
          muted
          playsInline
          sx={{ width: "100%", display: "block" }}
        />
      ) : (
        <Box
          component="img"
          src={fullPath}
          alt={alt}
          sx={{ width: "100%", height: "auto", display: "block" }}
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/400x300?text=Emmanuel+Pizza";
          }}
        />
      )}
    </Box>
  );
};

export const NavButton = ({ label, to }) => (
  <Button
    component={Link}
    to={to}
    sx={{
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(5px)",
      border: "1px solid #fff",
      color: "#fff",
      fontFamily: "Archivo Black, sans-serif",
      fontWeight: "bold",
      borderRadius: "20px",
      px: { xs: 1.5, sm: 3 },
      fontSize: { xs: "0.7rem", sm: "0.85rem", md: "1rem" },
      whiteSpace: "nowrap",
      minWidth: "auto",
      flex: "1 1 auto",
      maxWidth: { xs: "130px", sm: "200px" },
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "#fff",
        color: "#000",
        transform: "scale(1.05)",
      },
    }}
  >
    {label}
  </Button>
);

export const MenuRow = ({ nombre, precio }) => (
  <Box sx={{ display: "flex", alignItems: "baseline", mb: 0.8 }}>
    <Typography
      sx={{
        fontFamily: "Archivo Black, sans-serif",
        fontSize: "0.9rem",
        color: "#fff",
        textTransform: "uppercase",
        textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
      }}
    >
      {nombre}
    </Typography>
    <Box
      sx={{
        flexGrow: 1,
        borderBottom: "2px dotted rgba(255,255,255,0.6)",
        mx: 1,
      }}
    />
    <Typography
      sx={{
        fontFamily: "Archivo Black, sans-serif",
        fontSize: "1.1rem",
        color: "#fff",
      }}
    >
      {precio === "-" ? "-" : `$${precio}`}
    </Typography>
  </Box>
);

export const SectionTitle = ({ children }) => (
  <Typography
    sx={{
      fontFamily: "Archivo Black, sans-serif",
      fontStyle: "italic",
      fontSize: "2rem",
      color: "#fff",
      mt: 4,
      mb: 1.5,
      textAlign: "left",
      lineHeight: 1,
      textShadow: "3px 3px 0px rgba(0,0,0,0.2)",
    }}
  >
    {children}
  </Typography>
);

export default function Menu() {
  return (
    <Section bg="background.default">
      <Box
        sx={{
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 4,
          pb: 2,
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(244, 121, 32, 0.4) 0%, transparent 40%),
            radial-gradient(circle at 90% 50%, rgba(244, 121, 32, 0.4) 0%, transparent 40%)
          `,
        }}
      >
        <Box sx={{ width: "100%", zIndex: 1 }}>
          <Header />
        </Box>

        <Typography
          sx={{
            fontFamily: "Archivo Black, sans-serif",
            fontSize: { xs: "70px", md: "90px" },
            color: "#fff",
            WebkitTextStroke: "2px #000",
            textAlign: "center",
            position: "relative",
            zIndex: 10,
            mt: 4,
            mb: 2.5,
            textShadow: "4px 4px 0px rgba(0,0,0,0.15)",
          }}
        >
          MENÚ
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          sx={{
            zIndex: 10,
            mb: 4,
            width: "95%",
            maxWidth: "600px",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <NavButton label="PIZZAS" to="/pizzas" />
          <NavButton label="HAMBURGUESAS" to="/hamburguesas" />
          <NavButton label="ALITAS" to="/alitas" />
          <NavButton label="PROMOCIONES" to="/promociones" />
          <NavButton label="TORITOS..." to="/toritos" />
        </Stack>

        <Container
          maxWidth="xs"
          sx={{ zIndex: 5, px: 3, position: "relative", mb: 5 }}
        >
          <SectionTitle>PIZZAS</SectionTitle>
          <MenuRow nombre="Mini" precio="70" />
          <MenuRow nombre="Chica" precio="90" />
          <MenuRow nombre="Mediana" precio="135" />
          <MenuRow nombre="Grande" precio="165" />
          <MenuRow nombre="Familiar" precio="190" />
          <MenuRow nombre="Olímpica" precio="215" />
          <MenuRow nombre="Cuadrada" precio="230" />
          {/* USANDO VIDEO PARA PIZZAS */}
          <MediaContent src="/img/pizzas1.jpeg" alt="Pizzas Emmanuel" />

          <SectionTitle>EXTRAS</SectionTitle>
          <MenuRow nombre="Cinché (Calzone)" precio="110" />
          <MenuRow nombre="Hamburguesa" precio="75" />
          <MenuRow nombre="Papas CH $40 G" precio="60" />
          <MenuRow nombre="Torito" precio="80" />
          <MenuRow nombre="Nuggets" precio="60" />
          <MenuRow nombre="Sincronizada" precio="50" />
          <MenuRow nombre="Gringas" precio="55" />
          <MenuRow nombre="Papas c/ carne" precio="80" />
          {/* USANDO IMAGEN PARA HAMBURGUESAS */}
          <MediaContent
            src="/img/hamburguesas1.jpeg"
            alt="Hamburguesas y snacks"
          />

          <SectionTitle>ALITAS</SectionTitle>
          <MenuRow nombre="Orden (Chica)" precio="100" />
          <MenuRow nombre="Orden (Grande)" precio="180" />
          <MenuRow nombre="Orden (Familiar)" precio="230" />
          <MediaContent src="/img/alitas3.jpeg" alt="Alitas" />

          <SectionTitle>BEBIDAS</SectionTitle>
          <MenuRow nombre="Agua Natural 1 LT" precio="25" />
          <MenuRow nombre="Agua Sabor" precio="30" />
          <MenuRow nombre="Refresco Lata" precio="25" />
          <MenuRow nombre="Coca 2 LT" precio="45" />
          <MediaContent src="/img/aguasFrescas.png" alt="Bebidas" />
        </Container>

        <WhatsAppFab />
      </Box>
      <Footer />
    </Section>
  );
}
