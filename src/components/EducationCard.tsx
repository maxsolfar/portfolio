import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Stack,
  VStack,
  HStack,
  Image,
} from '@chakra-ui/react';
import { Education } from '../interfaces';
import { FaFileArchive } from 'react-icons/fa';
import platzi from '../assets/platzi.png';
import henry from '../assets/henry.png';
import isam from '../assets/isam.png';

const EducationCard: React.FC<Education> = ({
  id,
  title,
  location,
  description,
  date,
  image,
  certificate,
}) => {
  return (
    <Stack
      as={'section'}
      direction={['column', 'column', 'row', 'row']}
      alignItems={'center'}
      justifyContent={'center'}
      w={'100%'}
      borderRadius={'20px'}
      border="1px"
      borderColor="rgba(150,150,150,.1)"
      /* boxShadow="md" */
      /*       bg={colorMode === 'dark' ? 'brand.primary800' : '#f9f9f9'} */
      p={4}
      gap={4}
    >
      {/* <Box as={motion.div} animation={bounceAnimation} flexBasis={'25%'}>
        <Image src={image} alt={title} w={'100%'} />
      </Box> */}
      <Flex
        direction={'column'}
        gap={2}
        flexBasis={'100%'}
        alignItems={'center'}
      >
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          flexDirection={'column'}
          w={'100%'}
          gap={4}
          pb={4}
          /*          borderBottom="1px"
          borderColor="rgba(150,150,150,.1)" */
        >
          <Image src={id === "1" ? isam : id === "2" ? henry : platzi} w={'50px'} borderRadius={'50%'} />
          <Heading as="h4" fontSize={'lg'} textAlign={'center'}>
            {title}
          </Heading>
          <HStack>
            <Text
              as={'span'}
              borderRadius={6}
              py={1}
              px={4}
              fontSize={'xs'}
              bg={'brand.secondary'}
              border={'1px'}
              borderColor={'brand.secondary'}
              alignSelf={'center'}
              color={'brand.clear'}
            >
              {location}
            </Text>
            <Text
              fontSize={'xs'}
              fontWeight={'normal'}
              border={'1px'}
              py={1}
              px={4}
              borderRadius={6}
              alignSelf={'center'}
            >
              {date}
            </Text>
          </HStack>
        </Box>
        <Text
          fontSize={'sm'}
          noOfLines={2}
          opacity={0.8}
          py={1}
          textAlign={'center'}
        >
          {description}
        </Text>
        <Flex gap={2}>
          {certificate !== '' ? (
            <Button
              as="a"
              target="_blank"
              href={certificate}
              aria-label="Certificate"
              variant={'outline'}
              leftIcon={<FaFileArchive />}
            >
              Certificate
            </Button>
          ) : (
            <Button
              as="a"
              target="_blank"
              href={certificate}
              aria-label="Certificate"
              variant={'outline'}
              leftIcon={<FaFileArchive />}
            >
              In Process
            </Button>
          )}
        </Flex>
      </Flex>
    </Stack>
  );
};

export default EducationCard;
