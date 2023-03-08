import Preguntas from './preguntas';
import { Link, useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { useRef, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import * as React from 'react';

const Detalles_preg = () => {
  // este es el estado que se encarga de guardar el objeto que se encarga de grabar el video
  const [mediaRecorder, setMediaRecorder] = useState();
  const params = useParams();

  // este es el parametro que se encarga de guardar la pregunta que se va a mostrar en la pantalla
  const query = params['q'];

  // este es el apuntador que se encarga de apuntar al elemento video
  const apuntadorVideos = useRef();


  // estos son los eventos que se ejecutan cuando se presiona el boton de play y stop
  // el evento de play es el que se encarga de pedir permisos al usuario para acceder a la camara y el microfono
  // el evento de stop es el que se encarga de detener la grabacion
  const clickRep = () => {
    if (navigator.mediaDevices) {
      
      // este es el objeto que se encarga de pedir permisos al usuario para acceder a la camara y el microfono
      const check = { video: true, audio: true };
      // este es el evento que se ejecuta cuando el usuario acepta los permisos
      navigator.mediaDevices.getUserMedia(check).then((stream) => {
        // este es el evento que se ejecuta cuando el usuario rechaza los permisos
        apuntadorVideos.current.srcObject = stream;
        // este es el objeto que se encarga de grabar el video
        const grabador = new MediaRecorder(stream);
        // este es el evento que se ejecuta cuando el video esta listo para ser reproducido
        setMediaRecorder(grabador);
      });
    }
  };

  // este evento se ejecuta cuando se presiona el boton de stop
  // este evento se encarga de detener la grabacion y de guardar el video en el disco duro del usuario o lap
  const clickParar = () => {
    mediaRecorder.stop();
  };


// este evento se ejecuta cuando el video esta listo para ser reproducido
  const puedoRep = () => {
    apuntadorVideos.current.play();
    mediaRecorder.start();
  };

  // 
  return (
    <Box>
      <Link to="/"> <ArrowBackIcon />Volver </Link>
      <Preguntas
        width="860px"
        height="600px"
        onClickPlay={clickRep}
        onClickStop={clickParar}
        sxProps={{ marginTop: '-34px', width: '860px', height: '100px' }}
        paddingTop="0px"
        marginTop="-80px"
        videoButtonsPosition="absolute"
        query={query}
        typoProps={{ fontSize: '2rem', paddingTop: '25px' }}
        videoComponent={
          <video
            ref={apuntadorVideos}
            onCanPlay={puedoRep}
            width="860px"
            height="600px"
            autoPlay
            playsInline
            muted
          ></video>
        }
      />
    </Box>
  );
};

export default Detalles_preg;
