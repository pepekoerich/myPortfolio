"use client";

import React, { useState } from "react";
import { links } from "@/libs/data";
import { createContext } from "react";
import { useContext } from "react";

const linksName = links.map((link) => link.name);
const activeSectionContext = createContext(null);

export default function ActiveSectionContextProvider({ children }) { 
  const [activeSection, setActiveSection] = useState(linksName[0]);
  const [lastClicked, setLastClicked] = useState(0);

  return (
    <activeSectionContext.Provider value={{ activeSection, setActiveSection, lastClicked, setLastClicked }}>
      {children}
    </activeSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
    const context = useContext(activeSectionContext);
    if (context === null) {
        throw new Error(
        "useActiveSectionContext must be used within a ActiveSectionContextProvider"
        );
    }
    return context;
}
