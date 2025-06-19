import Header from "../components/header/Header";
import FadeInOnScroll from "../components/dynamic/FadeInOnScroll";
import SlideInText from "../components/dynamic/SlideInText";


const Home = () => {
    return ( 
        <>
            <Header/>
            <main className="section">
                <div className="container">
                    {/* список навыков с анимацией появления */}
                    <ul className="content-list">
                        <FadeInOnScroll className="content-list__item">
                            <SlideInText className="title-2">
                                <h2>Frontend</h2>
                            </SlideInText>
                            <p>JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents</p>
                        </FadeInOnScroll>
                        <FadeInOnScroll className="content-list__item">
                            <SlideInText className="title-2">
                                <h2>Backend</h2>
                            </SlideInText>
                            <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
                        </FadeInOnScroll>
                    </ul>
                </div>
            </main>
        </>
    );
}

export default Home;