import React from "react";
import { IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

type Props = {
  running: boolean;
};

function PlayButton(props: Props) {
  const { running } = props;
  return (
    <IconButton
      sx={{
        borderRadius: "50%",
        minWidth: "4vw",
        minHeight: "4vw",
        background:
          "radial-gradient(circle, rgba(198, 75, 74, 0.6), rgba(198, 75, 74, 1))",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      {running ? (
        <PauseIcon sx={{ color: "white" }} />
      ) : (
        <PlayArrowIcon sx={{ color: "white" }} />
      )}
    </IconButton>
  );
}

export default PlayButton;
