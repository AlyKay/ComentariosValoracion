import React, { Fragment } from 'react';
import { Rating,Grid,GridRow,GridColumn } from 'semantic-ui-react';
const PuntuacionFactores = () => {
    return ( 
       <Fragment>
            <h3>Puntuacion de factores</h3>
            <div >
            <GridColumn>
                <Grid columns={2}>
                    <GridRow>
                        <h4>Beneficio</h4>
                        <Rating icon='star' defaultRating={0} maxRating={5} />
                    </GridRow>
                </Grid>
                <Grid columns={2}>
                    <GridRow>
                        <h4>Precio</h4>
                        <Rating icon='star' defaultRating={0} maxRating={5} />
                    </GridRow>
                </Grid>
                <Grid columns={2}>
                    <GridRow>
                        <h4>Ubicacion</h4>
                        <Rating icon='star' defaultRating={0} maxRating={5} />
                    </GridRow>
                </Grid>
                <Grid columns={2}>
                    <GridRow>
                        <h4>Calidad</h4>
                        <Rating icon='star' defaultRating={0} maxRating={5} />
                    </GridRow>
                </Grid>
            </GridColumn>
            </div>
       
       </Fragment>
  );
}
 
export default PuntuacionFactores;