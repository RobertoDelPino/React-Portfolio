import {NavBar} from "@components/NavBar/NavBar.tsx";

export const Header = () => {
    return (
        <header className="h-14 flex content-center flex-wrap border-b-2 pl-8">
            <h2 className="w-[85%]">Roberto del Pino</h2>
            <NavBar />
        </header>
    );
};