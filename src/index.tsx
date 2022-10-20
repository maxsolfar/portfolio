import { ColorModeScript } from '@chakra-ui/react';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { App } from './App';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './themes/theme';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import Fonts from './Fonts';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Fonts />
        <ColorModeScript />
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
