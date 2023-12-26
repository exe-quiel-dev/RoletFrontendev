

// IMGS
import img1 from '../assets/prj_1.jpg'
import img2 from '../assets/prj_2.jpg'
import img3 from '../assets/prj_3.jpg'
import img4 from '../assets/prj_4.jpg'

import CardProyecto from "./CardProyecto"
import CardProyectoInvertida from "./CardProyectoInvertida"

const Proyectos = () => {
  return (
    <section className="h-auto md:min-h-screen flex flex-col text-white p-5 xl:p-0" id='proyectos'>
      <div className='container mx-auto flex flex-col'>
        <h2 className='text-start text-base font-bold text-fuchsia-500 p-0 xl:p-5'>PROYECTOS</h2>
        <CardProyecto 
          img={img1}
          tech='vite - react router dom - normalize - tailwind css '
          nombre='Aberturas Marquez'
          info='Catalogo online de aberturas que le permite a los usuarios ver todos los productos de la tienda con sus respectivas descripciones.'
          link='https://www.aberturasmarquez.com/'
          repo='https://github.com/exe-quiel-dev/aberturas-context'
        />
        <CardProyectoInvertida 
          img={img2}
          tech='vite - react router dom - react parallax - normalize - tailwind css'
          nombre='Growshop'
          info='Una tienda growshop online donde podes encontrar todo lo que necesitas para tener tu cultivo en optimas condiciones.'
          link='https://growshop-frontend-vite.vercel.app/'
          repo='https://github.com/exe-quiel-dev/growshop-frontend-vite'
        />
        <CardProyecto 
          img={img3}
          tech='vite - react router dom - normalize - tailwind css '
          nombre='SPA Gomeria'
          info='SPA de gomeria para que el publico pueda ver los servicios prestados y comunicarse con la tienda para hacer las preguntas que desee.'
          link='https://gomeria-react-vite.vercel.app/'
          repo='https://github.com/exe-quiel-dev/gomeria-react-vite'
        />
        <CardProyectoInvertida 
          img={img4}
          tech='vite - react router dom - normalize - tailwind css '
          nombre='Photographer portfolio'
          info='Portfolio de artista fotografico que funciona tambien como pagina para contratar servicios. Cuenta con una seccion de contacto directo con el profesional'
          link='https://artist-portfolio-one.vercel.app/'
          repo='https://github.com/exe-quiel-dev/Artist-Portfolio'
        />
        
      </div>
    </section>
  )
}

export default Proyectos