import React from "react";
import { CounterWrapper } from "./CounterWrapper";

export const RemoteContent = () => {
  return (
    <div>
      <h2>Привет! Я микрофронтенд и я буду импортирован в host.</h2>
      <CounterWrapper />
    </div>
  );
};
