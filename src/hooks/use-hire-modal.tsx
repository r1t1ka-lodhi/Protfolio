import { createContext, useContext, useState, ReactNode } from "react";

interface HireModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const HireModalContext = createContext<HireModalContextType | null>(null);

export function HireModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <HireModalContext.Provider
      value={{
        isOpen,
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      }}
    >
      {children}
    </HireModalContext.Provider>
  );
}

export function useHireModal() {
  const ctx = useContext(HireModalContext);
  if (!ctx) throw new Error("useHireModal must be used inside HireModalProvider");
  return ctx;
}
