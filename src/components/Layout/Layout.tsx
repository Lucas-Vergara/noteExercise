import React, { useState, useEffect } from "react";
import NoteBox from "../NoteBox/NoteBox";
import { Box, Grid } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import Timer from "../Timer/Timer";
import { allNotes } from "./notes";

const Layout = () => {
  const [start, setStart] = useState<boolean>(false);
  const [timerTotal, setTimerTotal] = useState<number>(900); // 15 MINUTES
  const [timerInterval, setTimerInterval] = useState<number>(30);

  const [notes, setNotes] = useState<string[]>(allNotes);
  const [currentNote, setCurrentNote] = useState<string>("𝄞");

const removeNote = (note: string) => {
  const updatedNotes = notes.filter((n) => n !== note);
  setNotes(updatedNotes);
};

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.code === "Space") {
      setStart(true);
      const randomIndex = Math.floor(Math.random() * notes.length);
      const selectedNote = notes[randomIndex];
      removeNote(selectedNote);
      setCurrentNote(selectedNote)
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      handleKeyPress(event);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
        <NoteBox note={currentNote} />
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
