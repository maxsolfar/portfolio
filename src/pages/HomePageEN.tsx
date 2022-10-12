import { VStack, Heading } from '@chakra-ui/react';
import { Footer, Header, Navbar, SkillSlider, Projects } from '../components';
import { useAppSelector } from '../redux/hooks/redux-hooks';

const HomePageEN = (): JSX.Element => {
  const { projects } = useAppSelector((state) => state.projects);
  return (
    <VStack minH={'100vh'} fontFamily={'Poppins'}>
      <Navbar />
      <Header />
      <Heading pt={28}>My Skills</Heading>
      <SkillSlider />
      <Heading >My Projects</Heading>
      <Projects projects={projects !== null ? projects : []} />
      <Footer />
    </VStack>
  );
};

export default HomePageEN;
