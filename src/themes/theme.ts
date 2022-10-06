import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      primary: '#21232E',
      primaryDark: '#212121',
      secondary: '#615AFF',
      accent: '#ffffff',
      clear: '#ffffff',
    },
    mainPurple: {
      200: '#615AFF',
      300: '#5147FF',
      500: '#615AFF',
      600: '#5147FF',
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode('white', 'brand.primary')(props),
      },
    }),
  },
});


export default theme