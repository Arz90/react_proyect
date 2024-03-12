import "./App.css";
import HelloWorld from "./assets/components/layout/HelloWorld";
import List from "./assets/components/layout/List";
import Cabecera from "./assets/components/layout/Cabecera";
import Experiencia from "./assets/components/layout/Experiencia";
import Despedida from "./assets/components/layout/Despedida";
import Portrait from "./assets/components/common/Portrait";
import ListaExperiencias from "./assets/components/layout/ListaExperiencias";
import Contador from "./assets/components/pages/Contador";
import Armario from "./assets/components/pages/Armario";
import Presentacion from "./assets/components/layout/Presentacion";

function App() {
  const name = "Raimundo";
  const data = ["Raimundo", "Facundo", "Edmundo", "Segismundo"];

  return (
    <>
      <Portrait imagen={"../public/img/perfil.jpg"} />
      <Cabecera
        nombre={"Adrian"}
        apellidos={"Romero Zamora"}
        direccion={"Calle Flor de papel n. 5"}
        ciudad={"Sevilla"}
      />
     {/*  <Experiencia empresa={"Cocacola"} cargo={"Produccion"} /> */}
     {/*  <Experiencia empresa={"Ryanair"} cargo={"Operario de rampa"} /> */}
      {/* <Experiencia empresa={"Wonka"} cargo={"Chuchero"} /> */}
      <ListaExperiencias />
      <Despedida
        contacto={"67583325"}
        cualidades={
          "facil aprendizaje, trabajo cómodo en equipo, alta implicacion"
        }
        disponibilidad={"total"}
      />
      <Contador/>
      <Presentacion coleccion={"- MI COLECCION -"}/>
      <Armario/>
    </>
  );
}

export default App;
