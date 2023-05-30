import React from "react";
import { IconButton } from "@mui/material";
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const RestartButton: React.FC = () => {
  return (
    <IconButton
      sx={{
        borderRadius: "50%",
        minWidth: "4vw",
        minHeight: "4vw",
        background: "radial-gradient(circle, rgba(101, 141, 135, 0.6), rgba(101, 141, 135, 1))",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <RestartAltIcon
        sx={{
          color: "white", 
        }}
      />{" "}
    </IconButton>
  );
};

export default RestartButton;
