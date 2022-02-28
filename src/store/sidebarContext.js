import { createContext, useState } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [barIs, setBar] = useState(1);

  return (
    <SidebarContext.Provider value={{ barIs, setBar }}>
      {children}
    </SidebarContext.Provider>
  );
};
