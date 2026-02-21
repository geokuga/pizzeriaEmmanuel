import { Box, Typography, Container } from "@mui/material";
import Section from "../theme/section";
import Header from "../components/HeaderMenu";

// Componente para cada renglón del menú con sombras para resaltar
const MenuRow = ({ nombre, precio }) => (
  <Box sx={{ display: "flex", alignItems: "baseline", mb: 0.8 }}>
    <Typography
      sx={{
        fontFamily: "Oswald, sans-serif",
        fontWeight: "bold",
        fontSize: { xs: "1rem", md: "1.2rem" },
        color: "#fff",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        // Sombra suave para separar el texto del fondo naranja
        textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
      }}
    >
      {nombre}
    </Typography>

    <Box
      sx={{
        flexGrow: 1,
        borderBottom: "2px dotted rgba(255,255,255,0.6)", // Más opaco
        mx: 1,
      }}
    />

    <Typography
      sx={{
        fontFamily: "Oswald, sans-serif",
        fontWeight: "bold",
        fontSize: { xs: "1.1rem", md: "1.3rem" },
        color: "#fff",
        textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
      }}
    >
      ${precio}
    </Typography>
  </Box>
);

// Títulos de sección con sombra más pronunciada e itálica
const SectionTitle = ({ children }) => (
  <Typography
    sx={{
      fontFamily: "Archivo Black, sans-serif",
      fontStyle: "italic",
      fontSize: { xs: "1.8rem", md: "2.2rem" },
      color: "#fff",
      mt: 4,
      mb: 1,
      textAlign: "left",
      lineHeight: 1,
      // Sombra proyectada (Drop Shadow)
      textShadow: "3px 3px 0px rgba(0,0,0,0.2)",
    }}
  >
    {children}
  </Typography>
);

export default function Menu() {
  return (
    <>
      <Section bg="background.default" waveBottom>
        <Box
          sx={{
            minHeight: "100vh",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: 2,
            pb: 8,
            // CAPA DE FONDO: Añade los "trazos" o manchas de color naranja oscuro
            backgroundImage: `
              radial-gradient(circle at 10% 20%, rgba(244, 121, 32, 0.4) 0%, transparent 40%),
              radial-gradient(circle at 90% 50%, rgba(244, 121, 32, 0.4) 0%, transparent 40%),
              radial-gradient(circle at 20% 80%, rgba(244, 121, 32, 0.4) 0%, transparent 40%)
            `,
          }}
        >
          {/* Ondas flotantes */}
          <Header />

          {/* Título Principal con sombra y borde */}
          <Typography
            sx={{
              fontFamily: "Archivo Black, sans-serif",
              fontSize: { xs: "65px", md: "90px" },
              color: "#fff",
              WebkitTextStroke: "2px #000", // Borde un poco más grueso
              zIndex: 2,
              mb: 2,
              // Doble sombra para efecto 3D
              textShadow: "4px 4px 0px rgba(0,0,0,0.15)",
            }}
          >
            MENÚ
          </Typography>

          <Container maxWidth="xs" sx={{ z_index: 2, px: 3 }}>
            <SectionTitle>PIZZAS</SectionTitle>
            <MenuRow nombre="Mini" precio="70" />
            <MenuRow nombre="Chica" precio="90" />
            <MenuRow nombre="Mediana" precio="135" />
            <MenuRow nombre="Grande" precio="165" />
            <MenuRow nombre="Familiar" precio="190" />
            <MenuRow nombre="Olímpica" precio="215" />
            <MenuRow nombre="Cuadrada" precio="230" />

            <SectionTitle>EXTRAS</SectionTitle>
            <MenuRow nombre="Cinché CH $90 G" precio="110" />
            <MenuRow nombre="Papas CH $40 G" precio="60" />
            <MenuRow nombre="Hamburguesa" precio="75" />
            <MenuRow nombre="Torito" precio="80" />
            <MenuRow nombre="Nuggets" precio="60" />
            <MenuRow nombre="Sincronizada" precio="50" />
            <MenuRow nombre="Gringas" precio="55" />
            <MenuRow nombre="Papas c/ carne" precio="80" />
            <MenuRow nombre="Carne extra" precio="20" />
            <MenuRow nombre="Queso crema" precio="20" />

            <SectionTitle>BEBIDAS</SectionTitle>
            <MenuRow nombre="Agua Natural 1 LT" precio="25" />
            <MenuRow nombre="Agua Sabor" precio="30" />
            <MenuRow nombre="Refresco Tapa R. y Lata" precio="25" />
            <MenuRow nombre="Refresco 500 ML Ret." precio="20" />
            <MenuRow nombre="Coca 2 LT" precio="45" />
            <MenuRow nombre="Sabores 1.5 LT" precio="30" />
            <MenuRow nombre="Café" precio="-" />
          </Container>
        </Box>
      </Section>
    </>
  );
}
