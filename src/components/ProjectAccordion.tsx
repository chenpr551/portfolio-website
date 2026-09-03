"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface AccordionContextValue {
  expandedId: string | null;
  toggle: (id: string) => void;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

export function ProjectAccordionProvider({ children }: { children: ReactNode }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <AccordionContext.Provider value={{ expandedId, toggle }}>
      {children}
    </AccordionContext.Provider>
  );
}

export function useProjectAccordion() {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error(
      "useProjectAccordion must be used within a ProjectAccordionProvider"
    );
  }
  return ctx;
}
