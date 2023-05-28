import { Box, Card, CardContent } from "@mui/material";
import React from "react";

type Props = {
  note: string;
}

function NoteBox(props: Props) {
  const { note } = props;

  return (
    <Box display="inline-block">
      <Card
        sx={{
          backgroundColor: "#415986ff",
          borderRadius: "50%",
          minWidth:'20vw',
          minHeight:'20vw'
        }}
      >
        <CardContent
          sx={{
            fontSize: "25vh",
            color:'#FBF3EAff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {note}
        </CardContent>
      </Card>
    </Box>
  );
}

export default NoteBox;
