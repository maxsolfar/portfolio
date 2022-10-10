import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Container
      as="footer"
      role="contentinfo"
      py={2}
      borderTop="1px"
      borderColor="rgba(150,150,150,.1)"
      w="100%"
      maxW="container.lg"
      zIndex={-1}
      mt={"auto !important"}
    >
      <Stack spacing={{ base: '2', md: '3' }}>
        <Stack justify="center" direction="row" align="center">
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="#"
              aria-label="Youtube"
              icon={<FaYoutube fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
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
