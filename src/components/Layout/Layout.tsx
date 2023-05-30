import React, { useState, useEffect } from "react";
import NoteBox from "../NoteBox/NoteBox";
import { Box, Grid } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import Timer from "../Timer/Timer";
import { allNotes } from "./notes";

const Layout = () => {
  const [start, setStart] = useState<boolean>(false);
  const [timerTotal, setTimerTotal] = useState<number>(900); // 15 MINUTES
  const [timerInterval, setTimerInterval] = useState<number>(20);

  const [notes, setNotes] = useState<string[]>(allNotes);
  const [currentNote, setCurrentNote] = useState<string>("𝄞");

  const removeNote = (note: string) => {
    const updatedNotes = notes.filter((n) => n !== note);
    setNotes(updatedNotes);
  };

  return (
    <Grid
      container
      sx={{
        height: "100vh",
        backgroundColor: "#FBF3EAff",
      }}
    >
      <Grid item xs={2}>
        <Sidebar
          collapsed={true}
          timerTotal={timerTotal}
          timerInterval={timerInterval}
          setTimerTotal={setTimerTotal}
          setTimerInterval={setTimerInterval}
        />
      </Grid>
      <Grid
        item
        xs={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <NoteBox
          note={currentNote}
          notes={notes}
          setStart={setStart}
          removeNote={removeNote}
          setCurrentNote={setCurrentNote}
        />
        <Timer
          timerTotal={timerTotal}
          timerInterval={timerInterval}
          start={start}
          removeNote={removeNote}
          notes={notes}
          setCurrentNote={setCurrentNote}
        />
      </Grid>
    </Grid>
  );
};

export default Layout;
