import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <App />
)

const body = document.querySelector('body');
body.classList.add('dark:bg-gray-800');

console.warn = () => console.log();
