import { Box } from "@mui/material";
import WaveDivider from "../components/waveDivider";

export default function Section({
  children,
  bg = "background.default",
  waveBottom,
}) {
  return (
    <Box sx={{ backgroundColor: bg, position: "relative" }}>
      {children}
      {waveBottom && <WaveDivider />}

    </Box>
  );
}
