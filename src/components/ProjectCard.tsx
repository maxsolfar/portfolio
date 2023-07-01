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
  Spacer,
  Divider,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { IoMdRocket } from 'react-icons/io';
import { Project } from '../interfaces';

const ProjectCard: React.FC<Project> = ({
  id,
  image,
  titleEN,
  titleES,
  descriptionES,
  descriptionEN,
  color,
  tools,
  category,
  repository,
  deploy,
  creationDate,
  role,
  duration,
}) => {
  const { colorMode } = useColorMode();
  const animationBounceKeyframes = keyframes`
    0% { transform: scale(.95);}
    50% { transform: scale(.98);}
    100% { transform: scale(.95); }
  `;
  const bounceAnimation = `${animationBounceKeyframes} 4s ease-in-out infinite`;

  return (
    <Container
      w={'100%'}
      maxW={'100%'}
      display={'flex'}
      flexDirection={['column', 'column', 'row', 'row']}
      borderRadius={'20px'}
      overflow="hidden"
      boxShadow="md"
      bg={colorMode === 'dark' ? 'brand.primary800' : '#f3f3ff'}
      p={2}
      pos={'relative'}
      _hover={{ transform: 'scale(1.02)' }}
      transition=".5s linear"
      cursor="pointer"
    >
      {/* <Box
        fontSize={'xs'}
        pos={'absolute'}
        top={4}
        left={4}
        bg={colorsCategory[category]}
        color={'brand.clear'}
        zIndex={1}
        py={1}
        px={2}
        borderRadius={4}
      >
        {category}
      </Box> */}
      <Box flexBasis={'35%'} as={motion.div} animation={bounceAnimation}>
        <Image src={image} alt={titleEN} w={'100%'} />
      </Box>
      <Box px={6} py={4} flexBasis={'65%'}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          pb={2}
          /*           borderBottom="1px"
          borderColor="rgba(150,150,150,.1)" */
        >
          <Heading as="h3" fontSize={['xl', 'xl', '2xl', '2xl']}>
            {titleEN}
            {/* <Text fontSize={"xs"} fontWeight={"bold"} color={colorsCategory[category]} pt={1}>{creationDate}</Text> */}
          </Heading>

          <Flex gap={2}>
            {repository !== '' && (
              <IconButton
                as="a"
                target="_blank"
                href={repository}
                aria-label="GitHub"
                variant={'outline'}
                icon={<FaGithub fontSize="1.25rem" />}
              />
            )}
            {deploy !== '' && (
              <IconButton
                as="a"
                target="_blank"
                href={deploy}
                aria-label="See more"
                variant={'outline'}
                icon={<IoMdRocket fontSize="1.25rem" />}
              />
            )}
          </Flex>
        </Box>
        <Flex gap={2} wrap={'wrap'} py={2} alignItems={'center'}>
          <Heading
            size={'sm'}
            fontWeight={'semibold'}
            color={'brand.secondary'}
          >
            Technologies:{' '}
          </Heading>
          {tools?.map((tool, index) => (
            <Button
              key={index}
              /* bg={index%2 === 0 ? "brand.secondary" : "brand.accent"} */ variant={
                'outline'
              }
              colorScheme={'mainPurple'}
              fontWeight={'medium'}
              size={'xs'}
            >
              {tool}
            </Button>
          ))}
        </Flex>
        <Text fontSize={'md'} noOfLines={3} opacity={0.8} py={1}>
          {descriptionEN}
        </Text>
        <Divider />
        <Flex gap={16} pt={4}>
          <VStack alignItems={'flex-start'}>
            <Heading
              size={'sm'}
              fontWeight={'semibold'}
              color={'brand.secondary'}
            >
              Role:{' '}
            </Heading>
            <Text size={'md'} fontWeight={'semibold'}>
              {role}
            </Text>
          </VStack>
          <VStack alignItems={'flex-start'}>
            <Heading
              size={'sm'}
              fontWeight={'semibold'}
              color={'brand.secondary'}
            >
              Duration:{' '}
            </Heading>
            <Text size={'md'} fontWeight={'semibold'}>
              {duration}
            </Text>
          </VStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default ProjectCard;
