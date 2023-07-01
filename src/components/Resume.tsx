import { Container, Flex, HStack, Heading, VStack } from '@chakra-ui/react';
import { Education, EducationListProps } from '../interfaces';
import EducationCard from './EducationCard';

const Resume = ({ resume }: EducationListProps): JSX.Element => {
  return (
    <VStack py={4}>
      <Heading pb={4} > Education </Heading>
      <Flex
        direction={['column', 'column', 'column', 'row']}
        gap={8}
        w={'90%'}
        maxW={'container.xl'}
      >
        {resume &&
          resume.map((education: Education) => (
            <EducationCard
              key={education.id}
              id={education.id}
              location={education.location}
              title={education.title}
              description={education.description}
              image={education.image}
              date={education.date}
              certificate={education.certificate}
            />
          ))}
      </Flex>
    </VStack>
  );
};

export default Resume;
