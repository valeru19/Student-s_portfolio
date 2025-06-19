
import FadeInOnScroll from '../dynamic/FadeInOnScroll';
import './style.css';

import { NavLink } from 'react-router-dom';



const Project = ({title, img, index}) => {
    return (  
        <NavLink to={`/project/${index}`}>
            <FadeInOnScroll>
                <li className="project">
                    <img 
                        src={img}  
                        alt={title} 
                        className="project__img"
                    />
                    <h3 className="project__title">
                        {title}
                    </h3>
                </li>
            </FadeInOnScroll>
        </NavLink>
    );
};

export default Project;