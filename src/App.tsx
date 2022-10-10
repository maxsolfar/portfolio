import {
  VStack,
} from '@chakra-ui/react';
import { Footer, Header, Navbar, SkillSlider } from './components';

export const App = () => {

  return (
    <VStack minH={"100vh"} fontFamily={"Poppins"}>
      <Navbar />
      <Header />
      <SkillSlider />
      <Footer />
    </VStack>
  );
};
