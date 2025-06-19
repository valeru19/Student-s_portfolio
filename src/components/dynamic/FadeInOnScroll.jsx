import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Компонент для появления текста при прокрутке

const FadeInOnScroll = ({children, className}) => {

    const ref = useRef(null); // создаем референс для отслеивания элемента на странице

    // useInView проверяет видимость элемента, срабатывает один раз при 20% видимости
    const isInView = useInView(ref, {triggerOnce: true, threshold: 0.2});

      // Варианты анимации: скрытый (сдвиг вниз) и видимый (появление)
    const variants = {
        hidden: {opasity: 0, y: 50},
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },   
    }

    return (
        <motion.div
            ref={ref} // Привязываем рееренс для отслеживания
            initial="inital" // Начальное состояние
            animate={isInView ? 'visible' : 'hidden'} // Анимация запускается если элемент виден
            variants={variants} // Варианты анимации
            className={className} // Передаем классы для стилизации
        >
            {children} 
        </motion.div>
    );
};

export default FadeInOnScroll;