import { Box, Card, CardContent } from "@mui/material";
import React from "react";

type Props = {
  note: string;
  notes: string[];
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
  removeNote: (note: string) => void;
  setCurrentNote: (note: string) => void;
};

function NoteBox(props: Props) {
  const { note, setStart } = props;
  const handleClick = (): void => {
    setStart((prevStart) => !prevStart);
  };

  return (
    <Box display="inline-block" onClick={handleClick}>
      <Card
        sx={{
          backgroundColor: "#415986ff",
          borderRadius: "50%",
          minWidth: "20vw",
          minHeight: "20vw",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          cursor: "pointer",
        }}
      >
        <CardContent
          sx={{
            fontSize: "25vh",
            color: "#FBF3EAff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {note}
        </CardContent>
      </Card>
    </Box>
  );
}

export default NoteBox;
