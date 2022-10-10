import {
  Stack,
  Text,
  Flex,
  Heading,
  Box,
  keyframes,
  Image,
  useColorMode,
  Button,
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
    fetch('cv-maxsolfar.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'cv-maximo-solis.pdf';
            alink.click();
        })
    })
}

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
      px={5}
      maxW={'container.xl'}
      w={'100%'}
      h={['600px', '600px', '500px', '500px']}
      justify={'center'}
      alignItems={'center'}
      pos={'relative'}
      gap={[8,8,4,4]}
    >
      <Flex
        direction={'column'}
        gap={4}
        basis={['55%', '55%', '65%', '55%']}
        justify={'center'}
      >
        <Box pos={'relative'}>
          <Heading size={'lg'}>Hi, I am</Heading>
          <Heading
            size={['3xl', '2xl', '2xl', '3xl']}
            color={'brand.secondary'}
            pt={2}
          >
            Máximo Solis
          </Heading>
          <Box
            as={motion.div}
            pos={'absolute'}
            top={["-7%","-7%","-30%","-30%"]}
            left={["30%","30%","35%","25%"]}
            animation={upAnimationAssets}
            zIndex={-1}
            w={['60px', '60px', '100px', '100px']}
          >
            <Image src={codeAssetsA} alt="Vector Header"></Image>
          </Box>
        </Box>

        <Heading size={'xl'}>
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
        <Text fontSize={'md'} w={['100%', '100%', '80%', '80%']}>
          MERN & PERN Stack Developer, who Focus on writing clean, elegant and
          efficient code.
        </Text>
        <Button
          colorScheme="mainPurple"
          size="md"
          variant={"outline"}
          w={['100%', '100%', '35%', '35%']}
          onClick={onButtonClick}
          leftIcon={<FiDownload/>}
        >
          Download CV
        </Button>
      </Flex>
      <Flex basis={'55%'} alignItems={'center'} justify={'center'}>
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
      </Flex>
    </Stack>
  );
}

export default Header;
