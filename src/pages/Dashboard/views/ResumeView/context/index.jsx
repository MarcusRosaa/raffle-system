import { createContext, useContext, useState } from "react";

export const ResumeContext = createContext({});

const ResumeViewProvider = ({ children }) => {
  const [view, setView] = useState(false);

  return (
    <ResumeContext.Provider
      value={{
        view,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

function useResumeView() {
  const context = useContext(ResumeContext);

  if (!context)
    throw new Error("useResumeView must be used within a UserProvider");

  return context;
}

export { ResumeViewProvider, useResumeView };
