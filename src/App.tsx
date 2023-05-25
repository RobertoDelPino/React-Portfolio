import {Home} from "@pages/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "@components/Header/Header.tsx";
import {About} from "@pages/About/About.tsx";

const App = () => (
    <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Home />}/>
                <Route path="/about" element={ <About />}/>
                {/*<Route path='*' element={<Navigate to='/pokemon' replace />} />*/}
            </Routes>
        </BrowserRouter>
    </>
);

export default App
