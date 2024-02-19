import {Home} from "@pages/Home/Home";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import {Header} from "@components/Header/Header.tsx";
import {About} from "@pages/About/About.tsx";
import {Footer} from "@components/Footer/Footer.tsx";
import {ProjectsPage} from "@pages/ProjectsPage/ProjectsPage.tsx";
import { BlogPage } from "@pages/BlogPage/BlogPage";
import { BlogEntry } from "@pages/BlogEntry/BlogEntry";
import { NotFound } from "@pages/NotFound/Home";
import { useEffect } from "react";
import { ScrollToTopButton } from "@components/ScrollToTopButton/ScrollToTopButton.tsx";
import Contact from "@pages/Contact/Contact";

function ScrollToTop() : null {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
const App = () => (
    <div className="dark:bg-gray-800 min-h-full max-w-screen-2xl flex flex-col mx-auto">
        <BrowserRouter>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={ <Home />}/>
                <Route path="/about" element={ <About />}/>
                <Route path="/projects" element={ <ProjectsPage />}/>
                <Route path="/blog" element={ <BlogPage/> }/>
                <Route path="/blog/:fileName" element={ <BlogEntry/> } />
                <Route path="/contact" element={ <Contact/> }/>
                <Route path="/*" element={ <NotFound/> }/>
            </Routes>
            <ScrollToTopButton/>
            <Footer />
        </BrowserRouter>
    </div>
);

export default App
