import { useState } from "react";
import emailJs from '@emailjs/browser';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const submitForm = (e: React.FormEvent) => {
        document.querySelector('.bg-red-500')?.classList.add('hidden');
        document.querySelector('.bg-green-500')?.classList.add('hidden');
        e.preventDefault();
        
        if (!name || !email || !message) {
            document.querySelector('.bg-red-500')?.classList.remove('hidden');
            setTimeout(() => {
                document.querySelector('.bg-red-500')?.classList.add('hidden');
            }, 2000);
            return;
        }

        emailJs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, e.target as HTMLFormElement, import.meta.env.VITE_EMAILJS_FORM_ID)
        
        document.querySelector('.bg-green-500')?.classList.remove('hidden');
        setTimeout(() => {
            document.querySelector('.bg-green-500')?.classList.add('hidden');
        }, 2000);

        setName('');
        setEmail('');
        setMessage('');
    }

  return (
    <section id="contact" className="max-w-screen-xl dark:text-white text-black mb-5 h-full min-h-[95%] md:mx-auto flex flex-col lg:flex-grow ">
        <h2 className="text-3xl text-center my-5 font-bold tracking-wider">Contacto</h2>

        <section className="flex flex-wrap flex-row gap-10 justify-center w-full  ">
            <form onSubmit={submitForm} className="flex flex-col space-y-5 w-[90%] lg:w-[50%] dark:bg-transparent bg-gray-200 p-4 rounded-md">
                <p className="leading-7 dark:text-white text-black">
                    Si tienes alguna duda, propuesta o proyecto, estoy aquí para ayudarte. Si 
                    estás listo para empezar, envíame un correo electrónico a  <strong className=" bg-gray-300 hover:bg-gray-400 p-1 rounded-sm text-black"><a href="mailto:robertodelpino11@gmail.com">robertodelpino11@gmail.com</a></strong> o utiliza 
                    el formulario de contacto a continuación. ¡Espero con ansias conocer más sobre lo que tienes 
                    en mente y cómo puedo ayudar!
                </p>
                <section className="flex justify-between flex-wrap">
                    <article className="flex flex-col w-[100%] mb-3 lg:w-[49%]">
                        <label htmlFor="name" className="dark:text-white text-black mb-3">Nombre</label>
                        <input
                            name="name"
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            autoComplete="on"
                            placeholder="Nombre"
                            className="input-field px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c0b2a2] text-black"
                        />
                    </article>
                    <article className="flex flex-col w-[100%] lg:w-[49%] mt-1 md:mt-0">
                        <label htmlFor="email" className="dark:text-white text-black mb-3">Email</label>
                        <input 
                            name="email"
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="on"
                            placeholder="Email"
                            className="input-field px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c0b2a2] text-black"
                        />
                    </article>
                </section>
                <section className="flex flex-col space-y-0">
                    <label htmlFor="message" className="dark:text-white text-black mb-3">Mensaje</label>
                    <textarea
                        name="message"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Mensaje"
                        autoComplete="off"
                        rows={6}
                        className="input-field px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c0b2a2] text-black"
                    />
                </section>
                
                <button 
                    type="submit" 
                    className="w-[50%] m-auto submit-button px-4 py-2 rounded-lg text-black font-semibold bg-gray-300 hover:bg-gray-400"
                >
                    Enviar
                </button>
                
                <p className="hidden bg-green-500 px-4 py-2 text-center w-[70%] m-auto">Se ha enviado correctamente el mensaje</p>
                <p className="hidden bg-red-500 px-4 py-2 text-center w-[70%] m-auto">Debes rellenar todos los campos</p>
            </form>
        </section>
    </section>
  )
}

export default Contact