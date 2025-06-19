import { motion } from "framer-motion";

// Компонент для анимации текста с боковым сдвигом

const SlideInText = ({children, className, direction = 'left'}) => {
    const variants = {
        hidden: { opacity: 0, x: direction === 'left' ? -100 : 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };
    
    
    return (
        <motion.div
            initial="hidden" // начальное состояние
            whileInView="visible" // анимация запускается при видимости
            viewport={{once: true, amount: 0.3}} // срабатывает 1 раз при видимости 30%
            variants={variants} // варианты анимации
            className={className} // передали классы
            >
            {children}
        </motion.div>
    );
};

export default SlideInText;