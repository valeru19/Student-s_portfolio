// Импортируем компоненты и стили
//найти картинки, добавить css все на гроке 

import { motion } from 'framer-motion';
import './../styles/main.css';
import about1 from './../img/about/images.jpg'; // Замените на свои изображения
import about2 from './../img/about/java.png';
import about3 from './../img/about/react.svg';

// Компонент для страницы "About me"
const About = () => {
    return (
        <main className="section about-page" style={{ background: '#1a1a1a', color: '#fff', padding: '50px 0' }}>
            <div className="container">
                {/* Контейнер 1: Появление с масштабированием */}
                <motion.div
                    className="about-container"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    style={{ marginBottom: '50px', textAlign: 'center' }}
                >
                    <img src={about1} alt="About Me 1" style={{ width: '300px', height: '300px', objectFit: 'cover', borderRadius: '10px' }} />
                    <h2 className="title-1">Who Am I?</h2>
                    <p style={{ maxWidth: '600px', margin: '20px auto' }}>
                        I am a passionate frontend developer with a love for creating beautiful and functional web experiences. My journey started with HTML and CSS, and now I explore React, animations, and more!
                    </p>
                </motion.div>

                {/* Контейнер 2: Сдвиг сверху с вращением */}
                <motion.div
                    className="about-container"
                    initial={{ opacity: 0, y: -100, rotate: -10 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    style={{ marginBottom: '50px', textAlign: 'center' }}
                >
                    <img src={about2} alt="About Me 2" style={{ width: '300px', height: '600px', objectFit: 'cover', borderRadius: '10px' }} />
                    <h2 className="title-1">My Skills</h2>
                    <p style={{ maxWidth: '600px', margin: '20px auto' }}>
                        I specialize in JavaScript, React, and modern CSS frameworks like TailwindCSS. I also have experience with backend technologies like Node.js and databases.
                    </p>
                </motion.div>

                    {/* Контейнер 3: Затухание с боковым сдвигом */}
                <motion.div
                    className="about-container"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    style={{ textAlign: 'center' }}
                    >
                    <img src={about3} alt="About Me 3" style={{ width: '450px', height: '400px', objectFit: 'cover', borderRadius: '10px' }} />
                    <h2 className="title-1">My Journey</h2>
                    <p style={{ maxWidth: '600px', margin: '20px auto' }}>
                        From learning basics to building complex projects, my journey has been filled with challenges and growth. I’m excited to continue learning and collaborating!
                    </p>
                </motion.div>
            </div>
        </main>
    );
};

export default About;