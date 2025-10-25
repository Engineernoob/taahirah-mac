"use client";

import { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 30000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${hours}:${minutes} ${ampm}`;
  };

  return (
    <div
      style={{
        fontFamily: "'Chicago', monospace",
        fontWeight: "bold",
        fontSize: "12px",
        color: "black",
        backgroundColor: "white",
        padding: "2px 6px",
        userSelect: "none",
      }}
    >
      {formatTime(time)}
    </div>
  );
}
