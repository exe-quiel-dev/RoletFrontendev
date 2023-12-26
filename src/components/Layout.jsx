import { Outlet } from "react-router-dom"



const Layout = () => {
  return (
    <>
      <nav className="  bg-slate-900 shadow-lg p-2 sticky top-0 z-50">
        <div>
          <div className="sm:flex justify-around">
            <h1><a href="/" className="text-white text-2xl font-bold p-0 xl:p-3 hover:text-fuchsia-500 transition-colors uppercase">Frontend - <span className="text-fuchsia-500 hover:text-white transition-colors p-0 xl:p-3">React Dev</span></a></h1>

            <ul className="text-white hover:text-slate-500 hover:font-black transition-all sm:self-center text-xl border-t sm:border-none">
              <li className="sm:inline-block">
                <a href="#about" className="p-3 text-base hover:text-white">Sobre mi</a>
              </li>
              <li className="sm:inline-block">
                <a href="#proyectos" className="p-3 text-base hover:text-white">Proyectos</a>
              </li>
              <li className="sm:inline-block">
                <a href="#contacto" className="p-3 text-base hover:text-white">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />

    </>
  )
}

export default Layout