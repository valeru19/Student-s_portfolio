import { useParams } from 'react-router-dom';
import FadeInOnScroll from '../components/dynamic/FadeInOnScroll';
import BtnGitHub from '../components/btnGitHub/BtnGitHub';
import {projects} from '../helpers/ProjectsList';



const ProjectPage = () => {
    const {id} = useParams();
    const project = projects[id];

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <FadeInOnScroll className="title-1">
                        <h1>{project.title}</h1>
                    </FadeInOnScroll>
                    
                    <FadeInOnScroll>
                        <img 
                            src={project.imgBig} 
                            alt={project.title}
                            className="project-details__cover"
                        />
                    </FadeInOnScroll>
                
                    <FadeInOnScroll className="project-details__desc">
                        <p>Skills: {project.skills}</p>
                    </FadeInOnScroll>

                    {project.gitHubLink && (
                        <FadeInOnScroll>
                            <BtnGitHub link="https://github.com/valeru19"/>
                        </FadeInOnScroll> )}

                    
                </div>
            </div>
        </main>
    );
};

export default ProjectPage;