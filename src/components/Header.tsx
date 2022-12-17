import {
  Stack,
  Flex,
  Heading,
  Box,
  keyframes,
  Image,
  useColorMode,
  Button,
  Text,
} from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

import vectorHeader from '../assets/vector-header.png';
import vectorHeaderDark from '../assets/vector-header-dark.png';
import vectorHeaderD from '../assets/vector-header-d.png';
import vectorHeaderDDark from '../assets/vector-header-d-dark.png';
import codeAssetsA from '../assets/assets-header.png';
import manVector from '../assets/man-vector.png';
import manVectorDark from '../assets/man-vector-dark.png';
import { FiDownload } from 'react-icons/fi';

function Header() {
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('cv-maxsolfar.pdf').then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'cv-maximo-solis.pdf';
        alink.click();
      });
    });
  };

  const { colorMode } = useColorMode();

  const animationBounceKeyframes = keyframes`
    0% { transform: scale(1);}
    50% { transform: scale(1.02);}
    100% { transform: scale(1); }
  `;
  const animationUpKeyframes = keyframes`
    0% { transform: translateY(0px) scale(1);}
    50% { transform: translateY(-10px) scale(1.02);}
    100% { transform: translateY(0px) scale(1); }
  `;
  const animationUpDownKeyframes = keyframes`
    0% { transform: translateY(0px);}
    50% { transform: translateY(-5px);}
    100% { transform: translateY(0px); }
  `;
  const bounceAnimation = `${animationBounceKeyframes} 4s ease-in-out infinite`;
  const upAnimation = `${animationUpKeyframes} 6s ease-in-out infinite`;
  const upAnimationAssets = `${animationUpDownKeyframes} 4s ease-in-out infinite`;

  return (
    <Stack
      direction={['column-reverse', 'column-reverse', 'row', 'row']}
      pt={24}
      maxW={'container.xl'}
      w={'90%'}
      h={['70vh', '70vh', '60vh', '60vh']}
      justify={'center'}
      alignItems={'center'}
      gap={[8, 8, 8, 8]}
      title={'about-me'}
      id="about-me"
      pos={'relative'}
    >
      <Flex
        direction={'column'}
        gap={4}
        basis={'100%'}
        justify={'center'}
        alignItems={'center'}
      >
        <Box textAlign={'center'}>
          <Heading
            size={'lg'}
            color={colorMode === 'dark' ? 'brand.clear' : 'brand.primary800'}
          >
            Hi, I am
          </Heading>
          <Heading
            size={['3xl', '3xl', '2xl', '4xl']}
            letterSpacing={'-0.2rem'}
            color={'brand.secondary'}
            pt={2}
          >
            Máximo Solis Farfan
          </Heading>
          {/* <Box
            as={motion.div}
            pos={'absolute'}
            bottom={['0%', '0%', '15%', '15%']}
            left={['0%', '0%', '6%', '6%']}
            animation={upAnimationAssets}
            zIndex={0}
            w={['60px', '60px', '90px', '90px']}
          >
            <Image src={codeAssetsA} alt="Vector Header"></Image>
          </Box> */}
          <Box
            as={motion.div}
            animation={upAnimation}
            zIndex={-1}
            pos={'absolute'}
            bottom={0}
            right={0}
            w={'18%'}
            display={['none', 'none', 'flex', 'flex']}
          >
            <Image
              src={colorMode === 'dark' ? manVector : manVectorDark}
              alt="Coder img"
            ></Image>
          </Box>
        </Box>

        <Heading
          size={'xl'}
          color={colorMode === 'dark' ? 'brand.clear' : 'brand.primary800'}
        >
          <Typewriter
            options={{
              strings: [
                'Full Stack Developer',
                'Front end Developer',
                'Back end Developer',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </Heading>
        <Text
          fontSize={'lg'}
          textAlign={'center'}
          w={['100%', '100%', '80%', '80%']}
        >
          I'm a committed developer, responsible, detail-oriented, able to search and find creative and effective solutions to challenges of different
          complexity.
        </Text>
        <Button
          colorScheme="mainPurple"
          size="md"
          variant={'outline'}
          w={['100%', '100%', '48%', '20%']}
          onClick={onButtonClick}
          leftIcon={<FiDownload />}
        >
          Download CV
        </Button>
      </Flex>
      {/* <Flex basis={'55%'} alignItems={'center'} justify={'center'}>
        <Box
          as={motion.div}
          animation={bounceAnimation}
          zIndex={-1}
          w={['100%', '100%', '98%', '98%']}
        >
          <Image
            src={colorMode === 'dark' ? vectorHeader : vectorHeaderDark}
            alt="Main console image"
          ></Image>
        </Box>
        <Box
          as={motion.div}
          animation={upAnimation}
          zIndex={-1}
          pos={'absolute'}
          bottom={0}
          right={'2%'}
          w={'33%'}
          display={['none', 'none', 'flex', 'flex']}
        >
          <Image
            src={colorMode === 'dark' ? vectorHeaderD : vectorHeaderDDark}
            alt="laptop image"
          ></Image>
        </Box>
        <Box
          as={motion.div}
          animation={upAnimation}
          zIndex={-1}
          pos={'absolute'}
          bottom={0}
          right={'35%'}
          w={'14%'}
          display={['none', 'none', 'flex', 'flex']}
        >
          <Image
            src={colorMode === 'dark' ? manVector : manVectorDark}
            alt="Coder img"
          ></Image>
        </Box>
        <Box
          as={motion.div}
          animation={upAnimation}
          zIndex={-1}
          pos={'absolute'}
          top={'30%'}
          right={'5%'}
          w={'30%'}
          display={['flex', 'flex', 'none', 'none']}
        >
          <Image
            src={colorMode === 'dark' ? manVector : manVectorDark}
            alt="Coder img"
          ></Image>
        </Box>
      </Flex> */}
    </Stack>
  );
}

export default Header;
