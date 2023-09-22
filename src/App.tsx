import {Home} from "@pages/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "@components/Header/Header.tsx";
import {About} from "@pages/About/About.tsx";
import {Footer} from "@components/Footer/Footer.tsx";
import {ProjectsPage} from "@pages/ProjectsPage/ProjectsPage.tsx";
import { BlogPage } from "@pages/BlogPage/BlogPage";
import { BlogEntry } from "@pages/BlogEntry/BlogEntry";

const App = () => (
    <div className="dark:bg-gray-800 h-[100%]">
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Home />}/>
                <Route path="/about" element={ <About />}/>
                <Route path="/projects" element={ <ProjectsPage />}/>
                <Route path="/blog" element={ <BlogPage/> }/>
                <Route path="/blog/:fileName" element={ <BlogEntry/> } />
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>
);

export default App
