// Импортируем стили
import "./style.css";
import FadeInOnScroll from "../dynamic/FadeInOnScroll"; // Компонент для появления текста
import SlideInText from "../dynamic/SlideInText"; // Компонент для перемещения текста

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <SlideInText className="header__title" direction="left">
                    <h1>
                        <strong>Hi, my name is <em>Valeriy</em></strong>
                        <br />
                        a frontend developer
                    </h1>
                </SlideInText>
                <FadeInOnScroll className="header__text">
                    <p>with passion for learning and creating.</p>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    {/* Добавляем target="_blank" для открытия в новой вкладке и rel="noopener noreferrer" для безопасности */}
                    <a href="https://github.com/valeru19" className="btn" target="_blank" rel="noopener noreferrer">
                        Continue with GitHub
                    </a>
                </FadeInOnScroll>
            </div>
        </header>
    );
};

export default Header;