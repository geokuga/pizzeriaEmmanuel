import { Box, Typography, Stack } from "@mui/material";

export default function OrderButtons() {
  return (
    <Box sx={{ backgroundColor: "secondary.main", overflow: "hidden" }}>
      <Stack direction="column" alignItems="center" spacing={0.5}>
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

        {/* Subtítulo de servicio */}
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
