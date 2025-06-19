import FadeInOnScroll from "../dynamic/FadeInOnScroll";
import "./style.css";

import vk from './../../img/icons/vk.svg';
import twitter from './../../img/icons/twitter.svg';
import linkedIn from './../../img/icons/linkedIn.svg';
import instagram from './../../img/icons/instagram.svg';
import gitHub from './../../img/icons/gitHub.svg';


const Footer = () => {
    return ( 
        <FadeInOnScroll>
            <footer className="footer">
                <div className="container">
                    <div className="footer__wrapper">
                        <ul className="social">
                            <li className="social__item">
                                <a href="https://vk.com/page">
                                    <img src={vk} alt="Link"/>
                                </a>
                            </li>
                            <li className="social__item">
                                <a href="https://www.instagram.com/">
                                    <img src={instagram} alt="Link"/>
                                </a>
                            </li>
                            <li className="social__item">
                                <a href="https://x.com/">
                                    <img src={twitter} alt="Link"/>
                                </a>
                            </li>
                            <li className="social__item">
                                <a href="https://github.com/valeru19">
                                    <img src={gitHub} alt="Link"/>
                                </a>
                            </li>
                            <li className="social__item">
                                <a href="https://ru.linkedin.com/">
                                    <img src={linkedIn} alt="Link"/>
                                </a>
                            </li>
                        </ul>
                        <div className="copyright">
                            <p>© 2022 frontend-dev.com</p>
                        </div>
                    </div>
                </div>
            </footer>
        </FadeInOnScroll>
        
    );
}

export default Footer;