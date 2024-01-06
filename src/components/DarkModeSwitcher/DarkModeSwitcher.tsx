import {useEffect, useState} from "react";

export const DarkModeSwitcher = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "" );

    const handleThemeSwitch = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme)
    };

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <>
            <button
                type="button"
                onClick={handleThemeSwitch}
                className=" text-lg rounded-md mr-4"
                role="button"
                aria-label="dark-mode"
            >
                {theme === 'dark' ? '🌙' : '🌞'}
            </button>
        </>
    );
}