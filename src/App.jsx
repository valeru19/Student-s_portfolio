// Импортируем стили и необходимые компоненты
import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion'; // Для управления анимациями переходов
import Navbar from "./components/navbar/Navbar";
import AboutMe from "./pages/AboutMe";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import ProjectPage from "./pages/ProjectPage";
import AnimatedPage from "./components/dynamic/AnimatedPage"; // Компонент анимации страниц
import ScrollToTop from "./utils/ScrollToTop";

// Компонент для получения текущего location
const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait"> {/* Управляет анимацией входа и выхода страниц */}
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
                <Route path="/about" element={<AnimatedPage><AboutMe/></AnimatedPage>}></Route>
                <Route path="/projects" element={<AnimatedPage><Projects /></AnimatedPage>} />
                <Route path="/project/:id" element={<AnimatedPage><ProjectPage /></AnimatedPage>} />
                <Route path="/contacts" element={<AnimatedPage><Contacts /></AnimatedPage>} />
            </Routes>
        </AnimatePresence>
    );
};

function App() {
    return (
        <div className="App">
            <Router>
                <ScrollToTop /> 
                <Navbar />
                <AnimatedRoutes /> {/* Используем кастомный компонент для маршрутов */}
                <Footer />
            </Router>
        </div>
    );
}

export default App;