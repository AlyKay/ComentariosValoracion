import React,{Component,useState}from 'react'
import LugarActual from './componets/LugarActual'
import { Header} from 'semantic-ui-react'
import Termino from './componets/Termino'
import PuntuacionGeneral from './componets/PuntuacionGeneral'
import PuntuacionFactores from './componets/PuntuacionFactores'
import Comentario from './componets/Comentario'
import FechaVisita from './componets/FechaVisita'
import Cuestionario from './componets/Cuestionario'
import Enviar from './componets/Enviar'
import Comentarios from './componets/Comentarios'
import './ComentariosValoracion.css'
import ServicioComentario from '../../services/http/comentario'
const ComentariosValoracion = () => {
    const [Cali, setCali] = useState(0);
    
    const calificacion =(Cali)=>{
        setCali(Cali);
        console.log('esto es de state',Cali);
         ServicioComentario.getAll().then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }
   
    return (
        <div className="cvpadre">
            <Header as='h1' textAlign ="center">Cometarios y Valoración</Header>
            <LugarActual/>
            <div className="container">
                <section className="preguntas">
                    <Termino/>
                    <PuntuacionGeneral calificacion={calificacion}/>

                    <PuntuacionFactores/>
                    <Comentario/>
                    <FechaVisita/>
                    <Cuestionario/>
                </section>
                <div class="vertical-line"></div>
                <section className="cometarios">
                    <Comentarios/>
                </section>
               
            </div>
            <Enviar className="enviar"/>
        </div>
    )
}

export default ComentariosValoracion
