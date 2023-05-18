import {NavBar} from "@components/NavBar/NavBar.tsx";

export const Header = () => {
    return (
        <header className="h-14 flex content-center flex-wrap border-b-2 pl-8">
            <NavBar />
        </header>
    );
};