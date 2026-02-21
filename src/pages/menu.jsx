import React from "react";
import { Box, Typography } from "@mui/material";

export default function Menu() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" fontWeight="bold">
        MENÚ DE PIZZAS 🍕
      </Typography>
    </Box>
  );
}
