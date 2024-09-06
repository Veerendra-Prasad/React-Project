import React, { useContext, useState } from "react";
const Appcontext = React.createContext();

const AppProvider = ({ children }) => {
  const [showsidebar, setShowSidebar] = useState(false);

  function show() {
    setShowSidebar(true);
  }

  function hide() {
    setShowSidebar(false);
  }
  return (
    <Appcontext.Provider value={{showsidebar,show,hide}}>
      {children}
    </Appcontext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(Appcontext);
};

export { AppProvider, useGlobalContext };
