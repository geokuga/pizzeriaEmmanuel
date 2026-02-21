import { Box } from "@mui/material";
import WaveDivider from "./waveDivider";

export default function Header() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "8vh",
        backgroundColor: "background.main",
        overflow: "hidden",
        zIndex: 10,
        pointerEvents: "none",
      }}
    >
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
