import { Box, Typography, Stack, Container, Link } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ width: "100%", mt: "auto", position: "relative" }}
    >
      {/* ONDA SUPERIOR (SVG para máxima calidad) */}
      <Box
        component="svg"
        viewBox="0 0 1440 320"
        sx={{ display: "block", width: "100%", height: "auto", mb: -1 }}
      >
        <path
          fill="#FFD700"
          fillOpacity="1"
          d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,133.3C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </Box>

      {/* CONTENIDO AMARILLO */}
      <Box sx={{ backgroundColor: "#FFD700", pb: 6, px: 2 }}>
        <Container maxWidth="md">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            {/* LOGO CON ANIMACIÓN SUAVE */}
            <Box
              component="img"
              src={`${process.env.PUBLIC_URL}/img/logo1.png`}
              alt="Pizzas Emmanuel"
              sx={{
                width: { xs: "180px", md: "220px" },
                filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.2))",
              }}
            />

            {/* TEXTOS Y CONTACTO */}
            <Box
              sx={{ textAlign: { xs: "center", md: "left" }, color: "#000" }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Archivo Black, sans-serif",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", md: "flex-start" },
                  gap: 1,
                  mb: 1,
                }}
              >
                <PhoneIcon /> HAZ TU PEDIDO AL:
              </Typography>

              {/* Números Clickeables */}
              <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent={{ xs: "center", md: "flex-start" }}
                gap={1}
              >
                {["33 3696 0368", "33 1535 5511", "33 4670 4677"].map((num) => (
                  <Link
                    key={num}
                    href={`tel:${num.replace(/\s/g, "")}`}
                    sx={{
                      color: "#000",
                      textDecoration: "none",
                      fontWeight: "900",
                      fontSize: "1.1rem",
                      fontFamily: "Oswald, sans-serif",
                      "&:hover": { color: "#d32f2f" },
                    }}
                  >
                    {num} {num !== "33 4670 4677" && "|"}
                  </Link>
                ))}
              </Stack>

              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", md: "flex-start" },
                  gap: 1,
                }}
              >
                <WhatsAppIcon sx={{ color: "#25D366", fontSize: "2rem" }} />
                <Link
                  href="https://wa.me/523335989685"
                  target="_blank"
                  sx={{
                    color: "#000",
                    textDecoration: "none",
                    fontWeight: "900",
                    fontSize: "1.3rem",
                    fontFamily: "Oswald, sans-serif",
                  }}
                >
                  33 3598 9685
                </Link>
              </Box>

              <Typography
                variant="body2"
                sx={{
                  mt: 3,
                  fontWeight: "bold",
                  backgroundColor: "rgba(0,0,0,0.05)",
                  p: 1,
                  borderRadius: "8px",
                  display: "inline-block",
                }}
              >
                📍 Servicio a Domicilio (envío foráneo con costo extra de $20)
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
