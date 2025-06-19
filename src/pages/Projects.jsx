import './../styles/main.css';
import Project from '../components/project/Project';
import { projects } from '../helpers/ProjectsList';
import FadeInOnScroll from '../components/dynamic/FadeInOnScroll';




const Projects = () => {
    return ( 
        <>
            <main className="section-projects">
                <div className="container-projects">
                    <div className="container">
                        <FadeInOnScroll  className="title-1">
                            <h2>Projects</h2>
                        </FadeInOnScroll>
                        <ul className="projects">
                            {projects.map((project, index) => {
                                return (
                                    <FadeInOnScroll>
                                        <Project 
                                            key={index} 
                                            title={project.title} 
                                            img={project.img}
                                            index={index}
                                        />
                                    </FadeInOnScroll>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Projects;