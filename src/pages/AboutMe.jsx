import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import './../styles/main.css';
import about1 from './../img/about/react-native.png';
import about2 from './../img/about/react2.png';
import about3 from './../img/about/react.svg';

// Варианты анимации для контейнера
const containerVariants = {
    collapsed: {
        height: 'auto',
        width: 'fit-content',
        transition: { duration: 0.5, ease: 'easeInOut' },
    },
    expanded: {
        height: 'auto',
        width: '100%',
        transition: { duration: 0.5, ease: 'easeInOut' },
    },
    };

    // Варианты анимации для заголовка
    const titleVariants = {
    initial: { y: 0 },
    shifted: { y: -20, transition: { duration: 0.5, ease: 'easeInOut' } },
    };

    // Варианты анимации для изображений
    const imageVariants = {
    hidden: {
        opacity: 0,
        x: '100vw',
    },
    visible: {
        opacity: 1,
        x: 0,
        rotate: 360,
        transition: {
        x: { duration: 1, ease: 'easeOut' },
        rotate: { repeat: Infinity, duration: 3, ease: 'linear' },
        },
    },
    };

    // Варианты анимации для текста
    const textVariants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
        duration: 0.5,
        ease: 'easeInOut',
        delay: 0.5, // Задержка для появления после изображения
        },
    },
    };

    // Компонент для страницы "About me"
    const About = () => {
    // Состояние для управления видимостью контента в каждом контейнере
    const [isExpanded, setIsExpanded] = useState({
        container1: false,
        container2: false,
        container3: false,
    });

    // Обработчик клика по заголовку
    const handleTitleClick = (containerKey) => {
        setIsExpanded((prev) => ({
        ...prev,
        [containerKey]: !prev[containerKey],
        }));
    };

    return (
        <main
            className="section about-page"
            style={{
                background: 'var(--bg-color)',
                color: 'var(--text-color)',
                padding: '50px 0',
            }}
            >
            <div className="container">
                {/* Контейнер 1 */}
                <motion.div
                className="about-container"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
                animate={isExpanded.container1 ? 'expanded' : 'collapsed'}
                style={{
                    marginBottom: '50px',
                    textAlign: 'center',
                    backgroundColor: '#6ad4ad',
                    padding: '20px',
                    borderRadius: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: '1200px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
                >
                <motion.h2
                    className="title-1"
                    onClick={() => handleTitleClick('container1')}
                    style={{ cursor: 'pointer' }}
                    variants={titleVariants}
                    animate={isExpanded.container1 ? 'shifted' : 'initial'}
                >
                    Who Am I?
                </motion.h2>
                <AnimatePresence>
                    {isExpanded.container1 && (
                    <>
                        <motion.img
                        src={about1}
                        alt="About Me 1"
                        style={{
                            width: '450px',
                            height: '400px',
                            objectFit: 'cover',
                            borderRadius: '10px',
                            margin: '20px 0',
                        }}
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        />
                        <motion.p
                        style={{
                            maxWidth: '600px',
                            margin: '20px auto',
                            fontSize: '25px',
                        }}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        >
                        I am a passionate frontend developer with a love for creating
                        beautiful and functional web experiences. My journey started with
                        HTML and CSS, and now I explore React, animations, and more!
                        </motion.p>
                    </>
                    )}
                </AnimatePresence>
                </motion.div>

                {/* Контейнер 2 */}
                <motion.div
                className="about-container"
                initial={{ opacity: 0, y: -200, rotate: -10 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
                animate={isExpanded.container2 ? 'expanded' : 'collapsed'}
                style={{
                    marginBottom: '50px',
                    textAlign: 'center',
                    backgroundColor: '#6ad4ad',
                    padding: '20px',
                    borderRadius: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: '1200px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
                >
                <motion.h2
                    className="title-1"
                    onClick={() => handleTitleClick('container2')}
                    style={{ cursor: 'pointer' }}
                    variants={titleVariants}
                    animate={isExpanded.container2 ? 'shifted' : 'initial'}
                >
                    My Skills
                </motion.h2>
                <AnimatePresence>
                    {isExpanded.container2 && (
                    <>
                        <motion.img
                        src={about2}
                        alt="About Me 2"
                        style={{
                            width: '450px',
                            height: '400px',
                            objectFit: 'cover',
                            borderRadius: '10px',
                            margin: '20px 0',
                        }}
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        />
                        <motion.p
                        style={{
                            maxWidth: '600px',
                            margin: '20px auto',
                            fontSize: '25px',
                        }}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        >
                        I specialize in JavaScript, React, and modern CSS frameworks like
                        TailwindCSS. I also have experience with backend technologies like
                        Node.js and databases.
                        </motion.p>
                    </>
                    )}
                </AnimatePresence>
                </motion.div>

                {/* Контейнер 3 */}
                <motion.div
                className="about-container"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
                animate={isExpanded.container3 ? 'expanded' : 'collapsed'}
                style={{
                    marginBottom: '50px',
                    textAlign: 'center',
                    backgroundColor: '#6ad4ad',
                    padding: '20px',
                    borderRadius: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: '1200px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
                >
                <motion.h2
                    className="title-1"
                    onClick={() => handleTitleClick('container3')}
                    style={{ cursor: 'pointer' }}
                    variants={titleVariants}
                    animate={isExpanded.container3 ? 'shifted' : 'initial'}
                >
                    My Journey
                </motion.h2>
                <AnimatePresence>
                    {isExpanded.container3 && (
                    <>
                        <motion.img
                        src={about3}
                        alt="About Me 3"
                        style={{
                            width: '450px',
                            height: '400px',
                            objectFit: 'cover',
                            borderRadius: '10px',
                            margin: '20px 0',
                        }}
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        />
                        <motion.p
                        style={{
                            maxWidth: '600px',
                            margin: '20px auto',
                            fontSize: '25px',
                        }}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        >
                        From learning basics to building complex projects, my journey has
                        been filled with challenges and growth. I’m excited to continue
                        learning and collaborating!
                        </motion.p>
                    </>
                    )}
                </AnimatePresence>
                </motion.div>
            </div>
        </main>
    );
};

export default About;