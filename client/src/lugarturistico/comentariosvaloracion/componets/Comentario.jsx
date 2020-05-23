import React from 'react'
import { Comment, Form , Grid, GridColumn } from 'semantic-ui-react'
const Comentario = () => {
    return ( 
       <GridColumn>
           <h2>Comentario</h2>
            <Comment.Group>
                <h3>Titulo del comentario</h3>
                <input type="text" placeholder="ingrese tiutlo del comentario"/>
                <Form reply>
                <Form.TextArea placeholder="Escribe tu comentario"/>
                </Form>
            </Comment.Group>
       </GridColumn>
     );
}
 
export default Comentario;