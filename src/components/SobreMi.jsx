// ICONS
import iconoHtml from '../assets/html.svg'
import iconoCss from '../assets/css.svg'
import iconoJs from '../assets/javascript.svg'
import iconoBs from '../assets/bootstrap.svg'
import iconoTw from '../assets/tailwind-css.svg'
import iconoReact from '../assets/react.svg'
import iconoPhotoshop from '../assets/photoshop.svg'
import iconoIllustrator from '../assets/illustrator.svg'


// IMGS
import imgDesarrollador from '../assets/aboutme.png'


const SobreMi = () => {
  return (
    <section className="min-h-screen text-white flex items-center justify-center light-bg p-5" id='about'>
      <div className='container mx-auto flex items-center justify-center xl:justify-between gap-20 min-h-screen'>
        <img src={imgDesarrollador} alt='Foto del desarrollador' className='w-1/3 hidden xl:inline' />
        <div className='w-full'>
          <h2 className='text-start text-base font-bold text-fuchsia-500 py-4'>SOBRE MI</h2>
          <p className="text-lg w-full md:w-auto">Hola! Me llamo <span className='font-bold'>Mariano</span>, soy desarrollador web <span className='font-bold'>Frontend</span>. Estoy dispuesto a enfrentar nuevos desafíos y ampliar mis conocimientos. Me destaca mi versatilidad para adaptarme al entorno de trabajo y a las tareas pedidas.</p>
          <p className="text-lg w-full md:w-auto py-4">Stack de <span className='font-bold'>tecnologías</span>:</p>
          <div className="flex flex-wrap items-center justify-start gap-4" id="skills">
            <img src={iconoHtml} alt='Logo HTML5' />
            <img src={iconoCss} alt='Logo CSS3' />
            <img src={iconoJs} alt='Logo Javascript' />
            <img src={iconoBs} alt='Logo Bootstrap' />
            <img src={iconoTw} alt='Logo Tailwind Css' />
            <img src={iconoReact} alt='Logo React JS' />
          </div>
          <p className="text-lg font-semibold w-full md:w-auto py-4"><span className='font-bold'>Extras</span>:</p>

          <div className="flex items-center justify-start">
            <img src={iconoPhotoshop} alt='Logo React Photoshop' />
            <img src={iconoIllustrator} alt='Logo React Illustrator' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreMi