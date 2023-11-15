"use client";
import React, { createContext, useState } from "react";

const SoundEnabledContext = createContext();

function SoundEnabledProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = useState(true);

  return (
    <SoundEnabledContext.Provider value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </SoundEnabledContext.Provider>
  );
}

export function useSoundEnabled() {
  const data = React.useContext(SoundEnabledContext);

  if (!data) {
    throw new Error(
      "Cannot consume SoundEnabled context without a SoundEnabledProvider"
    );
  }

  return data;
}

export default SoundEnabledProvider;
