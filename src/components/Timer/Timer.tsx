import React, { useEffect, useState } from "react";

type Props = {
  timerTotal: number;
  timerInterval: number;
  start: boolean;
  notes: string[];
  setCurrentNote: (note: string) => void;
  removeNote: (note: string) => void;
};

function Timer(props: Props) {
  const { timerTotal, timerInterval, start, removeNote, notes, setCurrentNote} = props;
  const [time, setTime] = useState(timerTotal);
  const [running, setRunning] = useState<boolean>(start);
  
  useEffect(()=> {
    setRunning(start)
  }, [start])

  useEffect(() => {
    setTime(timerTotal)
  }, [timerTotal])

  useEffect(() => {
    if (running) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [running]);

  useEffect(() => {
    if (running) {
      const intervalTimer = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * notes.length);
        const selectedNote = notes[randomIndex];
        removeNote(selectedNote);
        setCurrentNote(selectedNote)
      }, timerInterval * 1000);

      
      return () => clearInterval(intervalTimer);
    }
  }, [timerInterval, running]);

  useEffect(() => {
    if (time <= 0) {
      setRunning(false);
    }
  }, [time, timerInterval]);

  const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  return time > 0 ? (
    <div style={{ fontSize: "7vh", color: "#415986ff" }}>
      {formatTime(time)}
    </div>
  ) : null;
}

export default Timer;
