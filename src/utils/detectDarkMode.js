// Функция для определения текущего режима цветовой схемы
    const detectDarkMode = () => {
        // eslint-disable-next-line no-lone-blocks
        {
            return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
        }
    };

    export default detectDarkMode;