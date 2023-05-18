import {NavBar} from "@components/NavBar/NavBar.tsx";
import {DarkModeSwitcher} from "@components/DarkModeSwitcher/DarkModeSwitcher.tsx";

export const Header = () => {
    return (
        <header className="h-16 flex justify-between content-center flex-wrap border-b-2 pl-8 dark:bg-gray-800 relative">
            <h2 className="w-[70%] lg:w-[50%] leading-10 dark:text-white text-xl font-bold">Roberto del Pino</h2>
            <section className="flex">
                <NavBar />
                <DarkModeSwitcher />
            </section>
        </header>
    );
};