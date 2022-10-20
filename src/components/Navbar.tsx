import { ColorModeSwitcher } from '../ColorModeSwitcher';
import logo from '../assets/masolfar.png';
import logoDark from '../assets/masolfar-dark.png';
import { BsChatDotsFill } from 'react-icons/bs';
import { RiMenu3Line, RiCloseFill } from 'react-icons/ri';
import {
  VStack,
  Image,
  IconButton,
  HStack,
  Stack,
  Button,
  Collapse,
  useDisclosure,
  useColorMode,
} from '@chakra-ui/react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const sections = [
    {
      name: 'About me',
      link: 'about-me',
    },
    {
      name: 'My Skills',
      link: 'my-skills',
    },
    {
      name: 'Projects',
      link: 'projects',
    },
  ];
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode } = useColorMode();
  return (
    <VStack
      as="section"
      pos={'fixed'}
      top={0}
      w={'100%'}
      alignItems={'center'}
      bg={colorMode === "dark" ? ["brand.primary","brand.primary","transparent","transparent"] : ["brand.clear","brand.clear","transparent","transparent"]}
      zIndex={2}
      /* pt={[0,0,5,5]} */
      py={[2,2,5,5]}
      px={[5, 5, 8, 0]}
    >
      <HStack
        as="nav"
        maxW={'container.xl'}
        w="100%"
        justifyContent={'space-between'}
        alignItems={'center'}
        pb={4}
/*         borderBottom="1px"
        borderColor="rgba(150,150,150,.1)" */
        bg={["transparent", "transparent", colorMode === "dark" ? "brand.primary800" : "#f3f3ff", colorMode === "dark" ? "brand.primary800" : "#f3f3ff"]}
        py={[0,0,3,3]}
        px={[0,0,8,8]}
        borderRadius={[0,0,10,10]}
        shadow={["none", "none", "md", "md"]}
      >
        <Image
          src={colorMode === 'dark' ? logo : logoDark}
          alt="Máximo Solis Farfan"
          w={['140px', '140px', '150px', '160px']}
        />
        <Stack
          spacing={4}
          direction="row"
          align="center"
          display={['none', 'none', 'flex', 'flex']}
        >
          {sections.map((section, index) => {
            return (
              <Link
                key={index}
                to={section.link}
                smooth={true}
                spy={true}
                offset={-70}
                duration={1200}
              >
                <Button
                  variant={'ghost'}
                  aria-label={section.name}
                  w={'100%'}
                  px={4}
                  color={colorMode === 'dark' ? "brand.clear": "brand.primary800"}
                >
                  {section.name}
                </Button>
              </Link>
            );
          })}
        </Stack>

        <Stack spacing={4} direction="row" align="center">
          <Link
            to={'footer'}
            smooth={true}
            spy={true}
            offset={-70}
            duration={1200}
          >
            <IconButton
              aria-label="contact-me"
              colorScheme="mainPurple"
              color={'brand.clear'}
              variant={'solid'}
              display={['none', 'none', 'none', 'flex']}
              px={3}
              icon={<BsChatDotsFill />}
            />
          </Link>

          <IconButton
            aria-label="Open Menu"
            icon={isOpen ? <RiCloseFill /> : <RiMenu3Line />}
            size="lg"
            w={'100%'}
            variant={'unstyled'}
            color={'brand.secondary'}
            display={['flex', 'flex', 'none', 'none']}
            onClick={onToggle}
          />

          <ColorModeSwitcher />
        </Stack>
      </HStack>
      <Collapse in={isOpen} animateOpacity>
        <Stack
          spacing={4}
          w={'100vw'}
          h={'100vh'}
          bgColor={colorMode === 'dark' ? 'brand.primary' : 'brand.clear'}
          direction="column"
          align="center"
          display={['flex', 'flex', 'none', 'none']}
          pos={'absolute'}
          top={'70px'}
          left={0}
          p={10}
          borderRadius={'100% 0% 100% 0% / 0% 0% 70% 100%'}
        >
          {sections.map((section, index) => {
            return (
              <Link
                key={index}
                to={section.link}
                smooth={true}
                spy={true}
                offset={-70}
                duration={1200}
              >
                <Button
                  variant={'ghost'}
                  aria-label={section.name}
                  w={'100%'}
                  px={4}
                  color={colorMode === 'dark' ? "brand.clear": "brand.primary800"}
                >
                  {section.name}
                </Button>
              </Link>
            );
          })}
          <Link
            to={'footer'}
            smooth={true}
            spy={true}
            offset={-70}
            duration={1200}
          >
            <Button
              colorScheme="mainPurple"
              color={'brand.clear'}
              variant={'solid'}
              px={3}
              rightIcon={<BsChatDotsFill />}
            >
              Contact me
            </Button>
          </Link>
          <Stack
            pos={'absolute'}
            bottom={0}
            right={0}
            w={'100%'}
            h={'100%'}
            bg={'brand.secondary'}
            zIndex={-1}
          >
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#615AFF"
                fill-opacity="1"
                d="M0,128L40,144C80,160,160,192,240,213.3C320,235,400,245,480,218.7C560,192,640,128,720,106.7C800,85,880,107,960,128C1040,149,1120,171,1200,176C1280,181,1360,171,1400,165.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
              ></path>
            </svg> */}
          </Stack>
        </Stack>
      </Collapse>
    </VStack>
  );
};

export default Navbar;
