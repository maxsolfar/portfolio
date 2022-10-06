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
  useColorMode
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
          {sections.map((section) => {
            return (
              <Button variant={'ghost'} aria-label={section} w={'100%'} px={4}>
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
            display={['none', 'none', 'flex', 'flex']}
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
          zIndex={20}
          bgColor={colorMode === 'dark' ? 'brand.primary' : 'brand.clear'}
          direction="column"
          align="center"
          display={['flex', 'flex', 'none', 'none']}
          pos={'absolute'}
          top={'85px'}
          left={0}
          p={10}
        >
          {sections.map((section) => {
            return (
              <Button variant={'ghost'} aria-label={section} w={'100%'} px={4}>
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
        </Stack>
      </Collapse>
    </VStack>
  );
};

export default Navbar;
