import {
  Container,
  Image,
  Text,
  Box,
  Heading,
  useColorMode,
} from '@chakra-ui/react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import './utils/swiper.css';
// Icons
import javascript from '../assets/skills/javascript.svg';
import react from '../assets/skills/react.svg';
import redux from '../assets/skills/redux.svg';
import css from '../assets/skills/css.svg';
import html from '../assets/skills/html.svg';
import sass from '../assets/skills/sass.svg';
import chakra from '../assets/skills/chakra.svg';
import tailwind from '../assets/skills/tailwind.svg';
import node from '../assets/skills/node.svg';
import mongo from '../assets/skills/mongo.svg';
import postgres from '../assets/skills/postgres.svg';
import figma from '../assets/skills/figma.svg';
import express from '../assets/skills/express.svg';
import sequelize from '../assets/skills/sequelize.svg';
import jwt from '../assets/skills/jwt.svg';
import swagger from '../assets/skills/swagger.svg';
import git from '../assets/skills/git.svg';
import php from '../assets/skills/php.svg';
import laravel from '../assets/skills/laravel.svg';
import nest from '../assets/skills/nest.svg';
import docker from '../assets/skills/docker.svg';
import aws from '../assets/skills/aws.svg';

const SkillSlider = () => {
  const { colorMode } = useColorMode();
  const skillsFrontEnd = [
    {
      name: 'JavaScript',
      img: javascript,
    },
    {
      name: 'React.js',
      img: react,
    },
    {
      name: 'Redux',
      img: redux,
    },
    {
      name: 'CSS',
      img: css,
    },
    {
      name: 'HTML',
      img: html,
    },
    {
      name: 'Sass',
      img: sass,
    },
    {
      name: 'Chakra UI',
      img: chakra,
    },
    {
      name: 'Tailwind',
      img: tailwind,
    },
    {
      name: 'Figma',
      img: figma,
    },
  ];
  const skillsBackEnd = [
    {
      name: 'Node.js',
      img: node,
    },
    {
      name: 'Express.js',
      img: express,
    },
    {
      name: 'Nest.js',
      img: nest,
    },
    {
      name: 'PHP',
      img: php,
    },
    {
      name: 'Laravel',
      img: laravel,
    },
    {
      name: 'Mongo DB',
      img: mongo,
    },
    {
      name: 'PostgreSQL',
      img: postgres,
    },
    {
      name: 'Docker',
      img: docker,
    },
    {
      name: 'AWS',
      img: aws,
    },
    {
      name: 'Sequelize',
      img: sequelize,
    },
    {
      name: 'Swagger UI',
      img: swagger,
    },
    {
      name: 'JWT',
      img: jwt,
    },
    {
      name: 'Git',
      img: git,
    },
  ];
  SwiperCore.use([Autoplay]);
  return (
    <Container
      as={'section'}
      w={['100%', '100%', 'container.xl', 'container.xl']}
      textAlign={'center'}
      display={'flex'}
      flexDirection={['column', 'column', 'row', 'row']}
      justifyContent={'center'}
      alignItems={'center'}
      flexWrap={['wrap', 'wrap', 'wrap', 'nowrap']}
      /* pb={32} */
      gap={[4, 10, 12, 16]}
    >
      <Container>
        <Heading size="md" mb={4} opacity={'.7'}>
          Front End
        </Heading>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1800,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1600: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {skillsFrontEnd &&
            skillsFrontEnd.map((skill, index) => {
              return (
                <SwiperSlide key={index}>
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    padding={4}
                    alignItems={'center'}
                    justifyContent={'center'}
                    gap={2}
                    borderRadius={'10px'}
                    bg={colorMode === 'dark' ? 'brand.primary800' : '#eeeefc'}
                    boxShadow="md"
                  >
                    <Image src={skill.img} alt="skill-img" w={'65px'} />
                    <Text
                      fontSize={['xs', 'xs', 'sm', 'sm']}
                      fontWeight={'semibold'}
                    >
                      {skill.name}
                    </Text>
                  </Box>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </Container>
      <Container>
        <Heading size="md" mb={4} opacity={'.5'}>
          Back End
        </Heading>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1600: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {skillsBackEnd &&
            skillsBackEnd.map((skill, index) => {
              return (
                <SwiperSlide key={index}>
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    padding={4}
                    alignItems={'center'}
                    justifyContent={'center'}
                    gap={2}
                    borderRadius={'10px'}
                    bg={colorMode === 'dark' ? 'brand.primary800' : '#eeeefc'}
                    boxShadow="md"
                  >
                    <Image src={skill.img} alt="skill-img" w={'65px'} />
                    <Text
                      fontSize={['xs', 'xs', 'sm', 'sm']}
                      fontWeight={'semibold'}
                    >
                      {skill.name}
                    </Text>
                  </Box>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </Container>
    </Container>
  );
};

export default SkillSlider;
