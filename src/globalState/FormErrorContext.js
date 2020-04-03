import React, { useState, createContext } from 'react';

export const FormErrorContext = createContext(); // Create when context

export const FormErrorProvider = (props) => {
  const { children } = props || {};

  const [errorState, setErrorState] = useState({});

  const updateErrorState = (name, errorMessage) => {
    setErrorState({ ...errorState, [name]: errorMessage });
  };

  return (
    <FormErrorContext.Provider
      value={{
        errorState,
        updateErrorState,
      }}
    >
      {children}
    </FormErrorContext.Provider>
  );
};
