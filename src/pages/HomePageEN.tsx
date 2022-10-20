import React from 'react';
import { VStack, Heading, Container, ColorModeContext, useColorMode } from '@chakra-ui/react';
import { Footer, Header, Navbar, SkillSlider } from '../components';
import { useAppSelector } from '../redux/hooks/redux-hooks';
import ContactForm from '../components/ContactForm';
import { DotPulse } from '@uiball/loaders';

const Projects = React.lazy(() => import('../components/Projects'));
const Resume = React.lazy(() => import('../components/Resume'));

const HomePageEN = (): JSX.Element => {
  const {colorMode} = useColorMode();
  const { projects } = useAppSelector((state) => state.projects);
  const { resume } = useAppSelector((state) => state.resume);

  return (
    <VStack minH={'100vh'}>
      <Navbar />
      <Header />
     {/*  <Heading id="education" pt={20} pb={6}>
        Education
      </Heading> */}
      <Container my={8} w={"100%"} maxW={"100%"} bg={colorMode === "dark" ? "brand.primary800" : "#f3f3ff"} py={8} display={"flex"} justifyContent={"center"}>
        <React.Suspense
          fallback={<DotPulse size={40} speed={1.3} color="#615AFF" />}
        >
          <Resume resume={resume !== null ? resume : []} />
        </React.Suspense>
      </Container>
      <Heading id="my-skills" pt={28} pb={6} color={colorMode === 'dark' ? "brand.clear": "brand.primary800"}>
        My Skills
      </Heading>
      <SkillSlider />

      <Heading id="projects" color={colorMode === 'dark' ? "brand.clear": "brand.primary800"}>My Projects</Heading>
      <React.Suspense
        fallback={<DotPulse size={40} speed={1.3} color="#615AFF" />}
      >
        <Projects projects={projects !== null ? projects : []} />
      </React.Suspense>

      <ContactForm />
      <Footer />
    </VStack>
  );
};

export default HomePageEN;
