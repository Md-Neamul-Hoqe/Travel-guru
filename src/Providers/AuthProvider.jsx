import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [id, setId] = useState(1);

  const handleSliderId = (itemId) => {
    setId(itemId);
  };

  const globalVariables = {
    id,
    setId,
    handleSliderId,
  };

  return (
    <AuthContext.Provider value={globalVariables}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
