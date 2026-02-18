import { Box, Typography, Stack, Button } from "@mui/material";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

export default function OrderButtons() {
  const numeros = ["1234567890", "0987654321", "1122334455"];

  const llamarAlAzar = () => {
    // Selecciona un índice aleatorio entre 0 y 2
    const indiceAleatorio = Math.floor(Math.random() * numeros.length);
    const numeroSeleccionado = numeros[indiceAleatorio];

    // Ejecuta la llamada automáticamente
    window.location.href = `tel:${numeroSeleccionado}`;
  };

  return (
    <Box sx={{ backgroundColor: "secondary.main", overflow: "hidden", py: 2 }}>
      <Stack direction="column" alignItems="center" spacing={2}>
        <Stack direction="row" spacing={2} sx={{ mb: 1 }}>
          {/* Botón Menú */}
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

          {/* Botón de Llamada Aleatoria */}
          <Button
            variant="contained"
            onClick={llamarAlAzar} // Aquí disparamos la función aleatoria
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
