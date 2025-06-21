// Импортируем motion из Framer Motion для создания анимаций
import { motion } from 'framer-motion';

const AnimatedPage = ({ children }) => {
    const pageVariants = {
        initial: { opacity: 0, x: '-100vw' }, // Страница появляется справа
        animate: { opacity: 1, x: 0 }, // Страница становится видимой
        exit: { opacity: 0, x: '100vw' }, // Страница уходит влево
    };

    return (
        <motion.div
            initial="initial" // Начальное состояние
            animate="animate" // Конечное состояние
            exit="exit" // Состояние при уходе
            variants={pageVariants} // Варианты анимации
            transition={{ duration: 1, ease: 'circInOut' }} // Настройки перехода
            style={{ width: '100%' }} // Убеждаемся, что элемент занимает полную ширину
        >
            {children} 
        </motion.div>
    );
};

export default AnimatedPage;