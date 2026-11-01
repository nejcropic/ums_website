import { projects } from "../../projects/projects";

export const sliderData = [
  ...projects.slice(0, projects.length).map((project) => ({
    image: { src: project.photo, srcSet: project.srcSet },
    title: project.title,
    body: project.year,
  })),
];
