import { Footer } from '@components/Footer/Footer';
import { Header } from '@components/Header/Header';
import { About } from '@pages/About/About';
import { BlogEntry } from '@pages/BlogEntry/BlogEntry';
import { BlogPage } from '@pages/BlogPage/BlogPage';
import { Home } from '@pages/Home/Home';
import { NotFound } from '@pages/NotFound/Home';
import { ProjectsPage } from '@pages/ProjectsPage/ProjectsPage';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
            <Route path="/" element={ <Home />}/>
            <Route path="/about" element={ <About />}/>
            <Route path="/projects" element={ <ProjectsPage />}/>
            <Route path="/blog" element={ <BlogPage/> }/>
            <Route path="/blog/:fileName" element={ <BlogEntry/> } />
            <Route path="/*" element={ <NotFound/> }/>
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
