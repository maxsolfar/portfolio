import {
  Box,
  Heading,
  Text,
  Image,
  Container,
  useColorMode,
  keyframes,
  Button,
  Flex,
  IconButton,
  Stack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import { Education } from '../interfaces';
import { motion } from 'framer-motion';
import { FaFileArchive } from 'react-icons/fa';

const EducationCard: React.FC<Education> = ({
  title,
  location,
  description,
  date,
  image,
  certificate,
}) => {
  const { colorMode } = useColorMode();
  const animationBounceKeyframes = keyframes`
    0% { transform: scale(.85);}
    50% { transform: scale(.90);}
    100% { transform: scale(.85); }
  `;
  const bounceAnimation = `${animationBounceKeyframes} 4s ease-in-out infinite`;

  return (
    <Stack
      as = {"section"}
      direction={["column", "column", "row", "row"]}
      alignItems={"center"}
      justifyContent={"center"}
      w={'100%'}
      borderRadius={'20px'}
      boxShadow="md"
      bg={colorMode === 'dark' ? 'brand.primary800' : '#f9f9f9'}
      py={4}
      px={8}
      gap={4}
    >
      <Box as={motion.div} animation={bounceAnimation} flexBasis={'25%'}>
        <Image src={image} alt={title} w={'100%'} />
      </Box>
      <Flex direction={'column'} gap={2} flexBasis={'75%'} alignItems={["center", "center", "flex-start", "flex-start"]}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'space-between'}
          flexDirection={["column", "column", "row", "row"]}
          w={"100%"}
          gap={2}
          pb={4}
          borderBottom="1px"
          borderColor="rgba(150,150,150,.1)"
        >
          <VStack alignItems={"space-between"} >
            <Heading as="h4" fontSize={'lg'} textAlign={["center", "center", "left", "left"]}>
              {title}
            </Heading>
            <Text
              as={'span'}
              borderRadius={6}
              py={1}
              px={4}
              fontSize={'xs'}
              bg={'brand.secondary'}
              alignSelf={["center","center", "flex-start", "flex-start"]}
            >
              {location}
            </Text>
          </VStack>
          <Text
            fontSize={'xs'}
            fontWeight={'semibold'}
            border={'1px'}
            py={2}
            px={3}
            borderRadius={6}
            alignSelf={"center"}
          >
            {date}
          </Text>
        </Box>
        <Text fontSize={'sm'} noOfLines={2} opacity={0.8} py={1}>
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
          ): <Text color={"brand.secondary"} fontWeight={"bold"}>In process</Text>}
        </Flex>
      </Flex>
    </Stack>
  );
};

export default EducationCard;
