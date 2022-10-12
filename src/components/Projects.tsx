import { SimpleGrid } from '@chakra-ui/react';
import { Project, ProjectListProps } from '../interfaces';
import ProjectCard from './ProjectCard';

const Projects = ({projects}:ProjectListProps):JSX.Element => {
  return ( 
    <SimpleGrid columns={[1,1,2,3]} spacing={5} py={8} w={"90%"} maxW={'container.xl'}>
    {projects && projects.map((project: Project) => (
      <ProjectCard 
        key={project.id}
        id = {project.id}
        titleES= {project.titleES}
        titleEN= {project.titleEN}
        descriptionEN = {project.descriptionEN}
        descriptionES = {project.descriptionES}
        tools= {project.tools}
        deploy= {project.deploy}
        image= {project.image}
        category= {project.category}
        color = {project.color}
        repository = {project.repository}
        creationDate = {project.creationDate}
      />
    ))}
    </SimpleGrid>
  );
}

export default Projects;
