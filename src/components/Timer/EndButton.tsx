import React from "react";
import { IconButton } from "@mui/material";
import StopIcon from '@mui/icons-material/Stop';

const EndButton: React.FC = () => {
  return (
    <IconButton
      sx={{
        borderRadius: "50%",
        minWidth: "4vw",
        minHeight: "4vw",
        background:
          "radial-gradient(circle, rgba(204, 153, 0, 0.4), rgba(255, 219, 88, 1))",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <StopIcon sx={{ color: "white" }} />
    </IconButton>
  );
};

export default EndButton;
