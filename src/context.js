import React, { createContext } from "react";

const { Provider, Consumer } = createContext("");

export const NameProvider = ({ name, children }) => (
  <Provider value={name}>{children}</Provider>
);
export const getName = WrappedComponent => props => (
  <Consumer>{name => <WrappedComponent {...props} name={name} />}</Consumer>
);
