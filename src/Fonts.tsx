import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      /* Mark Pro */
      @font-face {font-family: "Mark Pro";
      src: url("//db.onlinewebfonts.com/t/72112afab388987941068c3f7a741a53.eot");
      src: url("//db.onlinewebfonts.com/t/72112afab388987941068c3f7a741a53.eot?#iefix") format("embedded-opentype"),
      url("//db.onlinewebfonts.com/t/72112afab388987941068c3f7a741a53.woff2") format("woff2"),
      url("//db.onlinewebfonts.com/t/72112afab388987941068c3f7a741a53.woff") format("woff"),
      url("//db.onlinewebfonts.com/t/72112afab388987941068c3f7a741a53.ttf") format("truetype"),
      url("//db.onlinewebfonts.com/t/72112afab388987941068c3f7a741a53.svg#Mark Pro Heavy") format("svg"); }
      
      @font-face {font-family: "Circular Std Book";
      src: url("//db.onlinewebfonts.com/t/860c3ec7bbc5da3e97233ccecafe512e.eot");
      src: url("//db.onlinewebfonts.com/t/860c3ec7bbc5da3e97233ccecafe512e.eot?#iefix") format("embedded-opentype"),
      url("//db.onlinewebfonts.com/t/860c3ec7bbc5da3e97233ccecafe512e.woff2") format("woff2"),
      url("//db.onlinewebfonts.com/t/860c3ec7bbc5da3e97233ccecafe512e.woff") format("woff"),
      url("//db.onlinewebfonts.com/t/860c3ec7bbc5da3e97233ccecafe512e.ttf") format("truetype"),
      url("//db.onlinewebfonts.com/t/860c3ec7bbc5da3e97233ccecafe512e.svg#Circular Std Book") format("svg"); }
      `}
  />
);

export default Fonts;
