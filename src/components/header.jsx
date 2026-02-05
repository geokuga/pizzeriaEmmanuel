import { Box } from "@mui/material";
import WaveDivider from "./waveDivider";

export default function Header() {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "background.main",
        minHeight: "10vh",
        overflow: "hidden",
      }}
    >
      {/* Ola izquierda */}
      <WaveDivider
        color="Lola"
        rotate={-220}
        sx={{
          position: "absolute",
          left: -190,
          top: 5,
          height: "200%",
          width: 350,
        }}
      />

      {/* Ola derecha */}
      <WaveDivider
        color="Lola"
        rotate={-150}
        sx={{
          position: "absolute",
          right: -160,
          top: 5,
          height: "160%",
          width: 350,
        }}
      />
    </Box>
  );
}