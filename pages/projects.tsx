import ProjectCard from '../components/cards/ProjectCard';
import PageLayout from '../containers/layouts/PageLayout';
import PROJECTS from '../data/projects';
import { Heading, Stack, Paragraph } from 'bumbag';
import HeroBase from '../components/HeroBase';

const Projects = () => (
  <PageLayout
    title="Projects"
    pageMeta={{
      description: 'These are some of the current and past software projects that I have worked on',
      endpoint: '/projects',
    }}
    banner={
      <HeroBase backgroundImage="url(/images/monplan-futureyou.png)">
        <Heading>Projects</Heading>
        <Paragraph>These are some of the current and past software projects that I have worked on</Paragraph>
        <Paragraph fontSize="0.75rem">Background Image: MonPlan and FutureYou team</Paragraph>
      </HeroBase>
    }
  >
    <Heading use="h3">Current Projects</Heading>
    <Stack variant="horizontal">
      {PROJECTS.current.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </Stack>

    <Heading use="h3">Previous Projects</Heading>
    <Stack orientation="horizontal">
      {PROJECTS.previous.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </Stack>
  </PageLayout>
);

export default Projects;
