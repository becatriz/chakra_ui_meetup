import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { theme } from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Home />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
