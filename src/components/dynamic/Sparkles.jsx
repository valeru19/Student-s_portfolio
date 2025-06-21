import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './../../styles/main.css';
import './../footer/style.css';

// Варианты анимации для блесток
const sparkleVariants = {
    initial: (custom) => ({
        opacity: 1,
        x: custom.x, // Случайная горизонтальная позиция
        y: custom.startY, // Начало под навбаром
    }),
    animate: (custom) => ({
        opacity: 0,
        y: '500vw', // Падение до футера
        transition: {
            duration: 10, // Случайная длительность
            ease: 'linear',
        },
    }),
};

// Палитра цветов для блесток
const sparkleColors = [
  'rgba(255, 215, 0, 0.8)', // Золотой
  'rgba(255, 99, 71, 0.8)', // Красный
  'rgba(135, 206, 235, 0.8)', // Синий
  'rgba(50, 205, 50, 0.8)', // Зеленый
  'rgba(238, 130, 238, 0.8)', // Фиолетовый
];

// Компонент для генерации падающих блесток
const Sparkles = ({ navbarHeight = 100, maxCount = 50, intervalDelay = 50 }) => {
    const [sparkles, setSparkles] = useState([]);

    // Генерация одной блестки
    const generateSparkle = () => {
        const footer = document.querySelector('.footer');
        const endY = footer
        ? footer.getBoundingClientRect().top - navbarHeight
        : window.innerHeight - navbarHeight; // Запасной вариант
        return {
            id: Math.random(),
            x: Math.random() * window.innerWidth, // Случайная позиция по X
            startY: 0, // Начало сразу под навбаром (относительно контейнера)
            endY: endY, // Падение до футера
            duration: 10 + Math.random() * 10, // Длительность от 5 до 10 секунд
            size: 10 + Math.random() * 10, // Размер от 10 до 20px
            color: sparkleColors[Math.floor(Math.random() * sparkleColors.length)], // Случайный цвет
        };
    };

  // Добавление новых блесток и удаление завершенных
    useEffect(() => {
        // Инициализация начальных блесток
        setSparkles(Array.from({ length: maxCount }, generateSparkle));

        // Добавление новой блестки каждые intervalDelay мс
        const interval = setInterval(() => {
        setSparkles((prev) => {
            if (prev.length < maxCount) {
            return [...prev, generateSparkle()];
            }
            return prev;
        });
        }, intervalDelay);

        // Удаление блесток после завершения анимации
        const cleanupInterval = setInterval(() => {
            setSparkles((prev) => prev.filter((sparkle) => {
                const elapsed = (Date.now() - sparkle.id * 1000) / 1000; // Примерное время
                return elapsed < sparkle.duration; // Удаляем завершенные
            }));
        }, 500);

        // Обновление позиций при ресайзе или скролле
        const handleUpdate = () => {
            setSparkles((prev) => prev.map((sparkle) => ({
                ...sparkle,
                x: Math.random() * window.innerWidth,
                endY: document.querySelector('.footer')
                ? document.querySelector('.footer').getBoundingClientRect().top - navbarHeight
                : window.innerHeight - navbarHeight,
        })));
        };
        window.addEventListener('resize', handleUpdate);
        window.addEventListener('scroll', handleUpdate);

        return () => {
        clearInterval(interval);
        clearInterval(cleanupInterval);
        window.removeEventListener('resize', handleUpdate);
        window.removeEventListener('scroll', handleUpdate);
        }; // Очистка при размонтировании
    }, [navbarHeight, maxCount, intervalDelay]);

    return (
        <div
        style={{
            position: 'fixed',
            top: navbarHeight, // Начинается под навбаром
            left: 0,
            width: '100%',
            height: '100vh', // Полная видимая высота
            pointerEvents: 'none', // Не мешает взаимодействию
            zIndex: 1000, // Под навбаром и футером
        }}
        >
        {sparkles.map((sparkle) => (
            <motion.div
            key={sparkle.id}
            className="sparkle"
            style={{
                position: 'absolute',
                width: sparkle.size,
                height: sparkle.size,
                background: `radial-gradient(circle, ${sparkle.color} 0%, rgba(255, 255, 255, 0) 70%)`,
                borderRadius: '50%',
            }}
            variants={sparkleVariants}
            initial="initial"
            animate="animate"
            custom={sparkle}
            />
        ))}
        </div>
    );
};

export default Sparkles;