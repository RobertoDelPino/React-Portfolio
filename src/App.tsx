import {Home} from "@pages/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "@components/Header/Header.tsx";

const App = () => (
    <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Home />}/>
            </Routes>
        </BrowserRouter>
    </>
);

export default App
