import React from 'react';
import { VStack, Heading } from '@chakra-ui/react';
import { Footer, Header, Navbar, SkillSlider } from '../components';
import { useAppSelector } from '../redux/hooks/redux-hooks';
import ContactForm from '../components/ContactForm';
import { DotPulse } from '@uiball/loaders'


const Projects = React.lazy(()=> import('../components/Projects'));

const HomePageEN = (): JSX.Element => {
  const { projects } = useAppSelector((state) => state.projects);
  return (
    <VStack minH={'100vh'} fontFamily={'Poppins'}>
      <Navbar />
      <Header />
      <Heading pt={28}>My Skills</Heading>
      <SkillSlider />
      <Heading id="projects">My Projects</Heading>
      <React.Suspense fallback={<DotPulse size={40} speed={1.3} color="#615AFF" />}>
        <Projects projects={projects !== null ? projects : []} />
      </React.Suspense>
      <ContactForm />
      <Footer />
    </VStack>
  );
};

export default HomePageEN;
