import {
  VStack,
  Heading,
  useColorMode,
  Image,
  Text,
  IconButton,
  HStack,
  Stack,
  Box,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import vectorContact from '../assets/contact-vector.png';
import { SiMailDotRu } from 'react-icons/si';
import FormSection from './FormSection';

const ContactForm = () => {
  const { colorMode } = useColorMode();
  return (
    <Stack
      spacing={8}
      py={44}
      w={'90%'}
      maxW={'container.xl'}
      alignItems={'center'}
      direction={["column", "column", "row", "row"]}
    >
      <VStack
        bg={colorMode === 'dark' ? 'brand.primary800' : '#f9f9f9'}
        borderRadius={10}
        boxShadow="md"
        alignItems={'flex-start'}
        px={8}
        gap={3}
        pb={8}
      >
        <Image
          src={vectorContact}
          alt="vector contact image"
          w={'55%'}
          mt={'-50px'}
          alignSelf={'center'}
        />
        <Heading as={'h3'} fontSize={'2xl'} opacity={0.8}>
          Contact me
        </Heading>
        <HStack gap={2}>
          <IconButton
            as="a"
            target="_blank"
            href={''}
            aria-label="GitHub"
            variant={'outline'}
            icon={<FaGithub fontSize="1.5rem" />}
            color={'brand.secondary'}
            opacity={0.8}
          />
          <Box>
            <Text as={'span'} fontSize={'xs'} opacity={0.5}>
              Github:
            </Text>
            <Text
              as={'a'}
              display={'block'}
              href={'https://www.github.com/maxsolfar'}
              target={'_blank'}
              _hover={{ color: 'brand.secondary' }}
            >
              github.com/maxsolfar
            </Text>
          </Box>
        </HStack>
        <HStack gap={2}>
          <IconButton
            as="a"
            target="_blank"
            href={''}
            aria-label="LinkedIn"
            variant={'outline'}
            icon={<FaLinkedinIn fontSize="1.5rem" />}
            color={'brand.secondary'}
            opacity={0.8}
          />
          <Box>
            <Text as={'span'} fontSize={'xs'} opacity={0.5}>
              Linkedin:
            </Text>
            <Text
              as={'a'}
              display={'block'}
              href={'https://www.linkedin.com/in/maxsolfar'}
              target={'_blank'}
              _hover={{ color: 'brand.secondary' }}
            >
              linkedin.com/in/maxsolfar
            </Text>
          </Box>
        </HStack>
        <HStack gap={2}>
          <IconButton
            as="a"
            target="_blank"
            href={''}
            aria-label="Email"
            variant={'outline'}
            icon={<SiMailDotRu fontSize="1.5rem" />}
            color={'brand.secondary'}
            opacity={0.8}
          />
          <Box>
            <Text as={'span'} fontSize={'xs'} opacity={0.5}>
              Email:
            </Text>
            <Text
              as={'a'}
              display={'block'}
              href={'mailto:maxsolfar@gmail.com'}
              target={'_blank'}
              _hover={{ color: 'brand.secondary' }}
            >
              maxsolfar@gmail.com
            </Text>
          </Box>
        </HStack>
        <HStack gap={2}>
          <IconButton
            as="a"
            target="_blank"
            href={''}
            aria-label="Phone"
            variant={'outline'}
            icon={<FaPhoneAlt fontSize="1.5rem" />}
            color={'brand.secondary'}
            opacity={0.8}
          />
          <Box>
            <Text as={'span'} fontSize={'xs'} opacity={0.5}>
              Phone:
            </Text>
            <Text
              as={'a'}
              display={'block'}
              href={'tel:+51951196477'}
              target={'_blank'}
              _hover={{ color: 'brand.secondary' }}
            >
              +51 951 196 477
            </Text>
          </Box>
        </HStack>
      </VStack>
      <FormSection/>
    </Stack>
  );
};

export default ContactForm;
