import { Flex, SimpleGrid } from '@chakra-ui/react';
import { Education, EducationListProps } from '../interfaces';
import EducationCard from './EducationCard';

const Resume = ({resume}:EducationListProps):JSX.Element => {
  return ( 
    <Flex direction={"column"} gap={4} w={"90%"} maxW={'container.lg'}>
    {resume && resume.map((education: Education) => (
      <EducationCard 
        key={education.id}
        id = {education.id}
        location = {education.location}
        title= {education.title}
        description = {education.description}
        image = {education.image}
        date = {education.date}
        certificate = {education.certificate}
      />
    ))}
    </Flex>
  );
}

export default Resume;
