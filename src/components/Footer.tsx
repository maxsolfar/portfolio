import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import {
  SiTypescript,
  SiRedux,
  SiReactrouter,
  SiReact
} from 'react-icons/si';

const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Container
      as="footer"
      id="footer"
      title="footer"
      role="contentinfo"
      py={2}
      borderTop="1px"
      borderColor="rgba(150,150,150,.1)"
      w="100%"
      maxW="container.xl"
      zIndex={-1}
      mt={'auto !important'}
    >
      <Stack spacing={{ base: '2', md: '3' }}>
        <Stack justify="center" direction="row" align="center">
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="#"
              aria-label="React.js"
              variant={'outline'}
              icon={<SiReact fontSize="1.5rem" />}
            />
            <IconButton
              as="a"
              aria-label="Redux"
              variant={'outline'}
              icon={<SiRedux fontSize="1.5rem" />}
            />
            <IconButton
              as="a"
              aria-label="TypeScript"
              variant={'outline'}
              icon={<SiTypescript fontSize="1.5rem" />}
            />
            <IconButton
              as="a"
              aria-label="React router"
              variant={'outline'}
              icon={<SiReactrouter fontSize="1.5rem" />}
            />
          </ButtonGroup>
        </Stack>
        <Text
          fontSize="sm"
          mt={0}
          color={colorMode === 'dark' ? 'brand.clear' : 'brand.primary'}
          opacity={'.6'}
          textAlign={'center'}
        >
          &copy; {new Date().getFullYear()} MaxSolFar, Inc. All rights reserved.
        </Text>
      </Stack>
    </Container>
  );
};

export default Footer;
