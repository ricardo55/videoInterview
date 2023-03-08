import { Box } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Preguntas from './preguntas';

// este es el componente que se encarga de mostrar las preguntas
// este componente se encarga de mostrar las preguntas que se van a grabar
const Menu = () => {
  return (
    <Box>
      <div className='center'>
      <h1>Video Interview</h1>
      </div>
      <Box
        sx={{
          display: 'flex',
          gap: 3,
        }}
      >
      
        <Preguntas question={'¿Cual es tu video juego favorito?'} />

        <Preguntas question={'¿Cual es tu lenguaje de programacón favorito y di algunas metas?'} />

        <Preguntas question={'¿Cual es el mejor trabajo para ti en el mundo y cómo te ves al respecto?'} />

        <Preguntas question={'¿Por que te gusta esta empresa y porque no elegir otras mejores?'} />
      </Box>
    </Box>
  );
};

export default Menu;
