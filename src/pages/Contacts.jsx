import FadeInOnScroll from '../components/dynamic/FadeInOnScroll';
import { motion } from 'framer-motion';
import './../styles/main.css';

const Contacts = () => {
    return (  
        <motion.main className="section-contacts"

        >
            <div className="section">
                <div className="container">
                    <FadeInOnScroll className="title-1">
                        <h2>Contacts</h2>
                    </FadeInOnScroll>
                    <ul className="content-list">
                        <FadeInOnScroll className="content-list__item">
                            <h2 className="title-2">Location</h2>
                            <p>Perm, Russia</p>
                        </FadeInOnScroll>
                        <FadeInOnScroll className="content-list__item">
                            <h2 className="title-2">Telegram / WhatsApp</h2>
                            <p><a href="tel:+79051234567"><strong>+7 (905) 123-45-67</strong></a></p>
                        </FadeInOnScroll>
                        <FadeInOnScroll className="content-list__item">
                            <h2 className="title-2">Email</h2>
                            <p><a href="mailto:webdev@protonmail.com"><strong>webdev@protonmail.com</strong></a></p>
                        </FadeInOnScroll>
                    </ul>
                </div>
            </div>
        </motion.main>
    );
}

export default Contacts;