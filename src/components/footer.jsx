import { Box, Typography } from "@mui/material";
import WaveDivider from "./waveDivider";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "secondary.main",  overflow: "hidden" }}>
      <WaveDivider color="secondary" />

      <Box sx={{ py: 6, textAlign: "center" }}>
        <Typography mb={15} color="black" fontWeight = "bold">
          EMILIANO ZAPATA #33 B (LA PIZANADA)
        </Typography>
      </Box>
      <Box

      color = "red"
        

      />
    </Box>
  );
}

