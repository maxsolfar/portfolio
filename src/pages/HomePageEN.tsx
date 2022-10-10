import { VStack, Heading } from '@chakra-ui/react';
import { Footer, Header, Navbar, SkillSlider } from '../components';

const HomePageEN = () => {
  return (
    <VStack minH={'100vh'} fontFamily={'Poppins'}>
      <Navbar />
      <Header />
      <Heading pt={28}>My Skills</Heading>
      <SkillSlider />
      <Footer />
    </VStack>
  );
};

export default HomePageEN;
