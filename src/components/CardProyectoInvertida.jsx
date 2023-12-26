/* eslint-disable react/prop-types */
// ICONS
import { AiFillGithub } from "react-icons/ai";
import { GoLinkExternal } from "react-icons/go";

const CardProyectoInvertida = ({img, tech, info, nombre, link, repo}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 place-items-center p-0 xl:p-5 pb-8'>
      <a href={link} target='blank' className='opacity-50 hover:opacity-100 transition-all w-full inline md:hidden h-full'><img src={img} alt={`Imagen de proyecto ${nombre}`} className='rounded-md lg:rounded-xl w-full h-full' /></a>
      <div className='flex flex-col items-center h-full'>
        <p className='hidden md:inline text-sm p-5 w-4/6 h-1/2 text-center text-white/75'>{info}</p>
        <p className='hidden md:inline text-sm p-5 w-4/6 h-1/2 text-center font-bold'>{tech}</p>
        <div className='flex py-4 md:py-0'>
          <div className="flex items-center">
            <a href={repo} target='blank'><AiFillGithub className="text-base lg:text-3xl mx-2 cursor-pointer hover:text-fuchsia-500 transition colors text-gray-400" /></a>
          </div>
          <div className="flex items-center">
            <a href={link} target='blank'><GoLinkExternal className="text-base lg:text-3xl mx-2 cursor-pointer hover:text-fuchsia-500 transition colors text-gray-400" /></a>
          </div>
        </div>
      </div>
      <a href={link} target='blank' className='opacity-50 hover:opacity-100 transition-all w-full hidden md:inline h-full'><img src={img} alt={`Imagen de proyecto ${nombre}`} className='rounded-md lg:rounded-xl w-full h-full' /></a>
    </div>
  )
}

export default CardProyectoInvertida