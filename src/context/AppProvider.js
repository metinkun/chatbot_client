import providers from './providers';
import React from 'react';

const AppProvider = ({ children }) => {
  let result = children;
  providers.forEach((Wrapper) => (result = <Wrapper>{result}</Wrapper>));
  return result;
};

export default AppProvider;
