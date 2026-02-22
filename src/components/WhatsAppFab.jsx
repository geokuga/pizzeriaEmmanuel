import { Fab, Zoom } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp"; // Necesitas instalar @mui/icons-material

const WhatsAppFab = () => {
  const phoneNumber = "521234567890"; // Reemplaza con tu número real (código de país + número)
  const message = "¡Hola! Me gustaría hacer un pedido.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Zoom in={true} style={{ transitionDelay: "500ms" }}>
      <Fab
        color="success"
        aria-label="whatsapp"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          backgroundColor: "#25D366", // Verde oficial de WhatsApp
          color: "#fff",
          zIndex: 1000,
          "&:hover": {
            backgroundColor: "#128C7E",
            transform: "scale(1.1)",
          },
        }}
      >
        <WhatsAppIcon sx={{ fontSize: "2rem" }} />
      </Fab>
    </Zoom>
  );
};

export default WhatsAppFab;
