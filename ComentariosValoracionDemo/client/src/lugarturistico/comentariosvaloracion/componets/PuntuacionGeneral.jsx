import React, { Fragment,useState } from 'react'
import { Rating } from 'semantic-ui-react';
const PuntuacionGeneral = ({calificacion}) => {
    
    const handleRate = (e, { rating, maxRating }) =>{
       calificacion(rating);
    }
    return (  
       <Fragment>
           <h3>Puntuacion general para lugar turistico</h3>
           <Rating  onRate={handleRate} maxRating={5} defaultRating={0} icon='star' size='massive' />
           
       </Fragment>
    );
}
 
export default PuntuacionGeneral
