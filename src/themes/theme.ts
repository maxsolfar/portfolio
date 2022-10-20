import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  initialColorMode: "system",
  colors: {
    brand: {
      primary: '#1A1B23',
      primaryDark: '#212121',
      primary800: '#21232E',
      secondary: '#615AFF',
      accent: '#FF4B96',
      clear: '#f8f8ff',
      frontColor: '#00976C',
      backColor: '#494554',
      fullColor: '#008CFF',
    },
    mainPurple: {
      50: '#ECEBFF',
      200: '#615AFF',
      300: '#5147FF',
      500: '#615AFF',
      600: '#5147FF',
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode('#f8f8ff', 'brand.primary')(props),
      },
    }),
  },
  fonts: {
    heading: `'Mark Pro', sans-serif`,
    body: `'Circular Std Book', sans-serif`,
  },
});

export default theme;
