import React, { useReducer, createContext } from 'react';

export const FormErrorContext = createContext(); // Create when context

export const FormErrorProvider = (props) => {
  const { children } = props || {};

  const initialState = [];

  // Set up a reducer so we can change state based on centralised logic here
  const reducer = (state, action) => {
    // Update the favState depening on action type
    switch (action.type) {
      // Add favourite
      case 'ADD_ERROR':
        return [...state, action.payload];

      // Remove favourite
      case 'REMOVE_ERROR':
        return state.filter((item) => item !== action.payload);

      // Default should return intial state if error
      default:
        return initialState;
    }
  };
  // Set up reducer using reducer logic and initialState by default
  const [errorState, errorDispatch] = useReducer(reducer, initialState);
  console.log({ errorState });

  return (
    <FormErrorContext.Provider value={[errorState, errorDispatch]}>
      {children}
    </FormErrorContext.Provider>
  );
};
