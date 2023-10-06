import { createContext } from "react";

const DynamicContext = createContext(null);
const DynamicProvider = () => {
  const globalVariables = {};

  return <DynamicContext.Provider value={globalVariables} />;
};

export default DynamicProvider;
