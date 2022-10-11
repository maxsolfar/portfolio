import { VStack, Heading } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Footer, Header, Navbar, SkillSlider } from '../components';
import { useAppSelector } from '../redux/hooks/redux-hooks';

const HomePageEN = () => {
  const { projects } = useAppSelector(state => state.projects);
  useEffect(() => {
    console.log(projects);
  }, [projects]);

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
