import {Home} from "@pages/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "@components/Header/Header.tsx";
import {About} from "@pages/About/About.tsx";
import {Footer} from "@components/Footer/Footer.tsx";

const App = () => (
    <div className="dark:bg-gray-800 h-[100%]">
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Home />}/>
                <Route path="/about" element={ <About />}/>
                {/*<Route path='*' element={<Navigate to='/pokemon' replace />} />*/}
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>
);

export default App
