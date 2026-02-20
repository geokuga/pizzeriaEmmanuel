import { Box, Typography, Stack, Button, Divider } from "@mui/material";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled"; // Icono para el horario

export default function OrderButtons() {
  // Números para llamadas (aleatorios)
  const numerosLlamadas = ["1234567890", "0987654321", "1122334455"];

  // NÚMERO FIJO PARA WHATSAPP
  const numeroWhatsApp = "523312345678";

  const mensajeWA = encodeURIComponent(
    "¡Hola! Me gustaría realizar un pedido de pizza. 🍕",
  );

  const llamarAlAzar = () => {
    const indiceAleatorio = Math.floor(Math.random() * numerosLlamadas.length);
    window.location.href = `tel:${numerosLlamadas[indiceAleatorio]}`;
  };

  const abrirWhatsAppFijo = () => {
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensajeWA}`;
    window.open(url, "_blank");
  };

  return (
    <Box sx={{ backgroundColor: "secondary.main", overflow: "hidden", py: 4 }}>
      <Stack direction="column" alignItems="center" spacing={3}>
        {/* Fila superior: Menú y Llamada */}
        <Stack direction="row" spacing={2}>
          <Button
            component="a"
            href="/menu"
            variant="contained"
            startIcon={<RestaurantMenuIcon />}
            sx={{
              backgroundColor: "#473521",
              color: "#ffde59",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#5d462c" },
            }}
          >
            Ver Menú
          </Button>

          <Button
            variant="contained"
            onClick={llamarAlAzar}
            startIcon={<PhoneInTalkIcon />}
            sx={{
              backgroundColor: "#d32f2f",
              color: "#fff",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#b71c1c" },
            }}
          >
            Pedir ahora
          </Button>
        </Stack>

        {/* WhatsApp */}
        <Button
          variant="contained"
          onClick={abrirWhatsAppFijo}
          startIcon={<WhatsAppIcon />}
          sx={{
            backgroundColor: "#25D366",
            color: "#fff",
            fontWeight: "bold",
            px: 4,
            "&:hover": { backgroundColor: "#128C7E" },
          }}
        >
          WhatsApp
        </Button>

        <Divider
          sx={{
            width: "60%",
            borderColor: "rgba(71, 53, 33, 0.2)",
            borderBottomWidth: 1,
          }}
        />

        {/* Sección de Dirección y Horario */}
        <Stack
          direction="column"
          alignItems="center"
          spacing={2}
          sx={{ mt: 1 }}
        >
          {/* Dirección */}
          <Stack direction="row" alignItems="center" spacing={1}>
            <Box
              component="svg"
              viewBox="0 0 24 24"
              sx={{
                width: { xs: 24, md: 32 },
                height: { xs: 24, md: 32 },
                fill: "#473521",
              }}
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </Box>

            <Typography
              sx={{
                fontFamily: "Archivo Black, Impact, sans-serif",
                color: "#473521",
                fontSize: { xs: "0.9rem", md: "1.3rem" },
                textTransform: "uppercase",
                fontWeight: "bold",
                lineHeight: 1.2,
              }}
            >
              EMILIANO ZAPATA #33 B (LA PIZANADA)
            </Typography>
          </Stack>

          {/* DISEÑO DEL HORARIO */}
          <Box
            sx={{
              backgroundColor: "rgba(71, 53, 33, 0.1)",
              px: 3,
              py: 0.5,
              borderRadius: "20px",
              border: "1px dashed #473521",
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <AccessTimeFilledIcon
                sx={{ color: "#473521", fontSize: "1.2rem" }}
              />
              <Typography
                sx={{
                  color: "#473521",
                  fontFamily: "Oswald, sans-serif",
                  fontSize: { xs: "0.9rem", md: "1.1rem" },
                  fontWeight: "bold",
                  letterSpacing: 1,
                }}
              >
                HORARIO: 1:00 P.M. A 11:00 P.M.
              </Typography>
            </Stack>
          </Box>

          <Typography
            sx={{
              color: "#473521",
              fontSize: { xs: "0.8rem", md: "1rem" },
              fontWeight: 500,
              fontStyle: "italic",
            }}
          >
            Servicio a Domicilio (envío foráneo con costo extra de $20)
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
