import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById('root') as HTMLElement;
rootElement.classList.add('dark:bg-gray-800');

ReactDOM.createRoot(rootElement).render(
    <App />
);

console.warn = () => console.log();
