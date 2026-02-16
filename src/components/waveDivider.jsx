import { Box, useTheme } from "@mui/material";

export default function WaveDivider({
  color = "secondary",
  flip = false,
  rotate = 0,
  sx = {},
}) {
  const theme = useTheme();

  return (
    <Box
      component="svg"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      sx={{
        width: "100%",
        height: {
          xs: theme.customShapes.wave.height.xs,
          sm: theme.customShapes.wave.height.sm,
          md: theme.customShapes.wave.height.md,
        },
        display: "block",
        marginBottom: "-1px",
        zIndex: 0,
        transform: `${flip ? "rotate(180deg)" : ""} rotate(${rotate}deg)`,
        transformOrigin: "center",
        ...sx,
      }}
    >
      <path d={theme.customShapes.wave.path} fill={theme.palette[color].main} />
    </Box>
  );
}
