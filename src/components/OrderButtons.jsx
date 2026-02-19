import { Box, Typography, Stack, Button, Divider } from "@mui/material"; // <-- 'Divider' importado correctamente
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function OrderButtons() {
  // Lista de tus 3 números de negocio
  const numeros = ["1234567890", "0987654321", "1122334455"];
  const mensajeWA = encodeURIComponent(
    "¡Hola! Me gustaría realizar un pedido de pizza. 🍕",
  );

  const llamarAlAzar = () => {
    const indiceAleatorio = Math.floor(Math.random() * numeros.length);
    window.location.href = `tel:${numeros[indiceAleatorio]}`;
  };

  const whatsappAlAzar = () => {
    const indiceAleatorio = Math.floor(Math.random() * numeros.length);
    const url = `https://wa.me/${numeros[indiceAleatorio]}?text=${mensajeWA}`;
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

        {/* Fila inferior: WhatsApp centrado */}
        <Button
          variant="contained"
          onClick={whatsappAlAzar}
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

        {/* Separador Visual para dar espacio */}
        <Divider
          sx={{
            width: "60%",
            borderColor: "rgba(71, 53, 33, 0.2)",
            borderBottomWidth: 1,
          }}
        />

        {/* Sección de Dirección con Margen Superior (mt) */}
        <Stack
          direction="column"
          alignItems="center"
          spacing={1}
          sx={{ mt: 2 }}
        >
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
                fontSize: { xs: "1rem", md: "1.4rem" },
                textTransform: "uppercase",
                fontWeight: "bold",
                lineHeight: 1.2,
              }}
            >
              EMILIANO ZAPATA #33 B (LA PIZANADA)
            </Typography>
          </Stack>

          <Typography
            sx={{
              color: "#473521",
              fontSize: { xs: "0.8rem", md: "1rem" },
              fontWeight: 500,
            }}
          >
            Servicio a Domicilio (envío foráneo con costo extra de $20)
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

/*import { Box, Typography, Stack, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

export default function OrderButtons() {
  // Estado para el menú de teléfonos
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ backgroundColor: "secondary.main", overflow: "hidden", py: 2 }}>
      <Stack direction="column" alignItems="center" spacing={2}>
        
        
        <Stack direction="row" spacing={2} sx={{ mb: 1 }}>
         
          <Button
            href="/menu" // Esto funciona con carpetas estándar de React
            variant="contained"
            startIcon={<RestaurantMenuIcon />}
            sx={{
              backgroundColor: "#473521",
              color: "#ffde59",
              fontWeight: "bold",
              '&:hover': { backgroundColor: "#5d462c" }
            }}
          >
            Ver Menú
          </Button>

         
          <Button
            variant="contained"
            onClick={handleClick}
            startIcon={<PhoneInTalkIcon />}
            sx={{
              backgroundColor: "#d32f2f",
              color: "#fff",
              fontWeight: "bold",
              '&:hover': { backgroundColor: "#b71c1c" }
            }}
          >
            Pedir ahora
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component="a" href="tel:1234567890">Llamar al #1</MenuItem>
            <MenuItem onClick={handleClose} component="a" href="tel:0987654321">Llamar al #2</MenuItem>
            <MenuItem onClick={handleClose} component="a" href="tel:1122334455">Llamar al #3</MenuItem>
          </Menu>
        </Stack>

       
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
              fontSize: { xs: "1rem", md: "1.4rem" },
              textTransform: "uppercase",
              fontWeight: "bold",
              lineHeight: 1.2,
            }}
          >
            EMILIANO ZAPATA #33 B (LA PIZANADA)
          </Typography>
        </Stack>

        <Typography
          sx={{
            color: "#473521",
            fontSize: { xs: "0.8rem", md: "1rem" },
            fontWeight: 500,
          }}
        >
          Servicio a Domicilio (envío foráneo con costo extra de $20)
        </Typography>
      </Stack>
    </Box>
  );
}*/
