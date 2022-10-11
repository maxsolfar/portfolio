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

const Navbar = () => {
  const sections = ['About me', 'Projects', 'Experience', 'Education'];
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode } = useColorMode();
  return (
    <VStack
      as="section"
      pos={'fixed'}
      w={'100%'}
      alignItems={'center'}
      bgColor={colorMode === 'dark' ? 'brand.primary' : 'brand.clear'}
      zIndex={2}
    >
      <HStack
        as="nav"
        maxW={'container.xl'}
        w="100%"
        p={5}
        justifyContent={'space-between'}
        alignItems={'center'}
        borderBottom="1px"
        borderColor="rgba(150,150,150,.1)"
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
              <Button key={index} variant={'ghost'} aria-label={section} w={'100%'} px={4}>
                {section}
              </Button>
            );
          })}
        </Stack>

        <Stack spacing={4} direction="row" align="center">
          <Button
            colorScheme="mainPurple"
            color={'brand.clear'}
            variant={'solid'}
            display={['none', 'none', 'none', 'flex']}
            px={3}
            rightIcon={<BsChatDotsFill />}
          >
            Contact me
          </Button>

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
          top={'85px'}
          left={0}
          p={10}
          borderRadius={'100% 0% 100% 0% / 0% 0% 70% 100%'}
        >
          {sections.map((section, index) => {
            return (
              <Button key={index} variant={'ghost'} aria-label={section} w={'100%'} px={4}>
                {section}
              </Button>
            );
          })}
          <Button
            colorScheme="mainPurple"
            color={'brand.clear'}
            variant={'solid'}
            px={3}
            rightIcon={<BsChatDotsFill />}
          >
            Contact me
          </Button>
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
