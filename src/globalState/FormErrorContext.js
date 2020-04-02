import React, { useState, createContext } from 'react';

export const FormErrorContext = createContext(); // Create when context

export const FormErrorProvider = (props) => {
  const { children } = props || {};

  const [errorState, setErrorState] = useState({});

  return (
    <FormErrorContext.Provider
      value={{
        errorState,
        updateErrorState: (name, payload) => {
          setErrorState({ ...errorState, [name]: payload });
        },
      }}
    >
      {children}
    </FormErrorContext.Provider>
  );
};
