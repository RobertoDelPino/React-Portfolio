import { useEffect, useState } from "react";

export const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
    
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

      // Función para desplazarse a la parte superior
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    };
  
    return (
        isVisible && (
            <button className="fixed bottom-4 right-3 transition duration-300 p-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-100 hover:dark:bg-gray-300" onClick={scrollToTop}>
                <img className="w-4" src="/flecha-arriba.webp" alt="Flecha hacia arriba para ir hacia el inicio de la página" />
            </button>
        )
    );
    
}