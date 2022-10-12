import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      primary: '#21232E',
      primaryDark: '#212121',
      primary800: '#2B2D3B',
      secondary: '#615AFF',
      accent: '#FF4B96',
      clear: '#ffffff',
      frontColor: "#00976C",
      backColor: "#494554",
      fullColor: "#008CFF"
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
        bg: mode('white', 'brand.primary')(props),
      },
    }),
  },
});


export default theme;