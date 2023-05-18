import {NavBar} from "@components/NavBar/NavBar.tsx";
import {DarkModeSwitcher} from "@components/DarkModeSwitcher/DarkModeSwitcher.tsx";

export const Header = () => {
    return (
        <header className="h-14 flex content-center flex-wrap border-b-2 pl-8">
            <h2 className="w-[80%] dark:bg-black">Roberto del Pino</h2>
            <NavBar />
            <DarkModeSwitcher />
        </header>
    );
};