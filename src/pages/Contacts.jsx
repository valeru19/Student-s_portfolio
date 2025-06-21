import FadeInOnScroll from '../components/dynamic/FadeInOnScroll';
import { animate, motion } from 'framer-motion';
import './../styles/main.css';

const Contacts = () => {

    const contactVariants = {
        initialLeft: { opacity: 0, x: '-100vw', y: 0 }, //  появляется справа
        initialRight: {opacity: 0, x: '100vw', y: 0 }, //  появляется влева
        initialDown: { opacity: 0, x: 0, y: '100vw' }, //  появляется внизу
        animate: { opacity: 1, x: 0, y: 0, duration: 2 }, //  становится видимой
        exit: { opacity: 0, x: '100vw' }, //  уходит влево
    };

    return (  
        <motion.main className="section-contacts"

        >
            <div className="section">
                <div className="container">
                    <FadeInOnScroll className="title-1">
                        <h2><strong>Contacts</strong></h2>
                    </FadeInOnScroll>
                    <ul className="content-list">
                        <FadeInOnScroll className="content-list__item">


                            <motion.h2 
                                variants={contactVariants}
                                className="title-2"
                                initial='initialRight'
                                animate='animate'
                                transition={{duration: 2}}
                            >   
                                Location
                            </motion.h2>


                            <motion.p
                                variants={contactVariants}
                                initial='initialDown'
                                animate='animate'
                                transition={{duration: 2}}  
                                style={{fontSize: 25, padding: 5, marginTop: 10}}
                            
                            ><strong>Perm, Russia</strong></motion.p>
                        </FadeInOnScroll>
                        <FadeInOnScroll className="content-list__item">
                            <motion.h2 
                                variants={contactVariants}
                                className="title-2"
                                initial='initialLeft'
                                animate='animate'
                                transition={{duration: 2}}
                            >   
                                Telegram / WhatsApp
                            </motion.h2>
                            <motion.p
                                variants={contactVariants}
                                initial='initialDown'
                                animate='animate'
                                transition={{duration: 2}}
                                style={{fontSize: 25}}
                            >
                                <a href="tel:+79051234567"><strong>+7 (905) 123-45-67</strong></a></motion.p>
                        </FadeInOnScroll>
                        <FadeInOnScroll className="content-list__item">
                            <motion.h2 
                                variants={contactVariants}
                                className="title-2"
                                initial='initialLeft'
                                animate='animate'
                                transition={{duration: 2}}
                            >
                                Email
                            </motion.h2>

                            <motion.p
                                variants={contactVariants}
                                initial='initialDown'
                                animate='animate'
                                transition={{duration: 2}}  
                                style={{fontSize: 25}}
                            >
                                <motion.a 
                                    href="mailto:webdev@protonmail.com">
                                    <strong>webdev@protonmail.com</strong>
                                </motion.a>
                            </motion.p>
                        </FadeInOnScroll>
                    </ul>
                </div>
            </div>
        </motion.main>
    );
}

export default Contacts;