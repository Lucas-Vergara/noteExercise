import React, { useEffect, useState } from "react";
import PlayButton from "./PlayButton";
import EndButton from "./EndButton";
import RestartButton from "./RestartButton";

type Props = {
  timerTotal: number;
  timerInterval: number;
  start: boolean;
  notes: string[];
  setCurrentNote: (note: string) => void;
  removeNote: (note: string) => void;
};

function Timer(props: Props) {
  const {
    timerTotal,
    timerInterval,
    start,
    removeNote,
    notes,
    setCurrentNote,
  } = props;
  const [time, setTime] = useState<number>(timerTotal);
  const [running, setRunning] = useState<boolean>(false);

  useEffect(() => {
    setRunning((prevRunning) => !prevRunning);
  }, [start]);

  useEffect(() => {
    setTime(timerTotal);
  }, [timerTotal]);

  useEffect(() => {
    if (running) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [running]);

  // change notes
  useEffect(() => {
    if (running) {
      if (time === timerTotal) {
        const randomIndex = Math.floor(Math.random() * notes.length);
        const selectedNote = notes[randomIndex];
        // removeNote(selectedNote);
        setCurrentNote(selectedNote);
      }
      const intervalTimer = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * notes.length);
        const selectedNote = notes[randomIndex];
        // removeNote(selectedNote);
        setCurrentNote(selectedNote);
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

  const handlePauseContinue = () => {
    setRunning((prevRunning) => !prevRunning);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  const handleFinish = () => {
    setTime(0);
    setRunning(false);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  const handleReset = () => {
    setTime(timerTotal);
    setRunning(false);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.code === "Space") {
      setRunning((prevRunning) => !prevRunning);
      if (time === 0) {
        setTime(timerTotal)
      }
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
  }, [time]);

  return time > 0 ? (
    <div>
      <div style={{ fontSize: "7vh", color: "#415986ff" }}>
        {formatTime(time)}
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <div onClick={handlePauseContinue}>
          <PlayButton running={running} />
        </div>
        <div onClick={handleReset}>
          <RestartButton />
        </div>
        <div onClick={handleFinish}>
          <EndButton />
        </div>
      </div>
    </div>
  ) : null;
}

export default Timer;
