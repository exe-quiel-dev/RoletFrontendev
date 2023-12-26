import emailjs from '@emailjs/browser';

// HOOKS
import { useRef, useState } from "react";


// ICONS 
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";


const Form = () => {
  const [error, setError] = useState(false);
  const [alerta, setAlerta] = useState(false);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    if ([ nombre, email, mensaje].includes('')) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000);
      return;
    }
    
    emailjs.sendForm('service_h9ybzxp', 'template_ia25mxh', form.current, 'qvvp-hpw1xeAsnK8y')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      setAlerta(true);
      setTimeout(() => {
        setAlerta(false)
      }, 3000);
      
  };
  


  return (
    <section className="bg-gradient-to-b from-gray-950 to-indigo-950 h-auto md:min-h-screen flex p-5 xl:p-0" id='contacto'>
      <div className="container mx-auto text-gray-800 flex flex-col md:flex-row items-center justify-between">
        <form 
          ref={form} 
          onSubmit={sendEmail}
          className="w-full bg-blue-900/50 p-5 rounded-md border"
        >
          {error && (
            <div className='bg-red-600 rounded p-2 shadow'>
              <p className='text-white text-sm'>Todos los campos son obligatorios</p>
            </div>
          )}
          {alerta && (
            <div className='bg-green-600 rounded p-2 shadow'>
              <p className='text-white text-sm'>Mensaje enviado</p>
            </div>
          )}
          <div className="flex flex-col justify-center items-start py-4">
            <label htmlFor='user_name' className="my-2 text-white">Nombre</label>
            <input
              type='text'
              placeholder="Nombre"
              name="user_name"
              className="p-2 rounded-lg w-full"
              onChange={e => {setNombre(e.target.value)}}
            />
          </div>
          <div className="flex flex-col justify-center items-start py-4">
            <label htmlFor='user_email' className="my-2 text-white">Email</label>
            <input
              type='text'
              placeholder="Email"
              name="user_email"
              className="p-2 rounded-lg w-full"
              onChange={e => {setEmail(e.target.value)}}
            />
          </div>
          <div className="flex flex-col justify-center items-start py-4">
            <label htmlFor='message' className="my-2 text-white">Mensaje</label>
            <textarea 
            name='message' 
            placeholder="Mensaje" 
            cols='50' 
            rows='4' 
            className="w-full p-2 rounded-lg"
            onChange={e => {setMensaje(e.target.value)}}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gray-400 rounded-md text-white p-2 my-4 hover:bg-fuchsia-500 transition-colors hover:text-gray-800 cursor-pointer"
          >Enviar</button>
        </form>

        <div className="flex flex-col items-center justify-center w-full py-6">
          <div className="flex py-2">
            <div className="text-center">
              <FiMapPin className="hidden md:inline text-xl mx-auto text-fuchsia-500 transition colors" />
            </div>
            <p className="text-base md:text-md text-white px-2">Buenos Aires - Argentina</p>
          </div>
          <div className="flex py-2">
            <div className="text-center">
              <AiOutlineMail className="hidden md:inline text-xl mx-auto text-fuchsia-500 transition colors" />
            </div>
            <p className="text-base md:text-md text-white px-2">exe_frontendev@outlook.com</p>
          </div>
          
          <div className="flex mt-4">
            <div className="text-center">
              <AiFillGithub className="text-4xl mx-2 cursor-pointer hover:text-fuchsia-500 transition colors text-gray-400" />
            </div>
            <div className="text-center">
              <AiFillLinkedin className="text-4xl mx-2 cursor-pointer hover:text-fuchsia-500 transition colors text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Form