// COMPONENTS
import SobreMi from "../components/SobreMi"
import Proyectos from "../components/Proyectos"
import Form from "../components/Form"

const Index = () => {
  return (
    <>
      <SobreMi />
      <div className="h-40"></div>
      <Proyectos />
      <div className="h-40"></div>
      <Form />
    </>
  )
}

export default Index