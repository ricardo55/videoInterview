import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// esta variable se encarga de guardar el estado de play flags
const Play_status = 'play_status';

// esta variable se encarga de guardar el estado de stop
const Stop_status = 'stop_status';

// este es el componente que se encarga de mostrar las preguntas
const Preguntas = ({
  question,
  onClickPlay,
  onClickStop,
  width = 245,
  height = 393,
  sxProps = {},
  paddingTop = '290px',
  marginTop = 0,
  videoButtonsPosition = 'initial',
  videoComponent = null,
  typoProps = {},
}) => {
  const [videoRecoderStatus, setVideoRecoderStatus] = useState(
    Play_status
  );

  // este evento se ejecuta cuando se presiona el boton de play y grabar
  const eventoOnClick = (status) => {
    setVideoRecoderStatus(status);
  };

  // este evento se ejecuta cuando se presiona el boton de stop
  const eventoClickParar = () => {
    eventoOnClick(Play_status);
    onClickStop();
  };

  // este evento se ejecuta cuando se presiona el boton de play
  const eventoClickRep = () => {
    eventoOnClick(Stop_status);
    onClickPlay();
  };

  // este muestra el fondo
  return (
    <Box>
      <Box
        sx={{
          width: { width },
          height: { height },
          backgroundColor: 'black',
        }}
      >
        {videoComponent}
        <Box
          sx={{
            paddingTop: { paddingTop },
            marginTop: { marginTop },
            position: videoButtonsPosition,
          }}
        >
          <Box
            sx={{
              marginTop: '10px',
              marginLeft: '12px',
            }}
          >
            
            <img src="./assets/play.png"></img>
          </Box>

          {videoRecoderStatus === Play_status && (
            <Box
              onClick={eventoClickRep}
              sx={{
                marginTop: '-43px',
                marginLeft: '36px',
              }}
            >
              <img src="./assets/play.png"></img>
            </Box>
          )}

          {videoRecoderStatus === Stop_status && (
            <Box
              onClick={eventoClickParar}
              sx={{
                marginTop: '-45px',
                marginLeft: '35px',
              }}
            >
              <img src="./assets/stop.png"></img>
            </Box>
          )}
        </Box>
        <Box
          sx={{
            marginTop: '0',
            width: '245px',
            height: '65px',
            ...sxProps,
              backgroundColor: '#C4C4C4',
              padding: '0px 0px',
              borderRadius:'0px 0px 8px 8px',
          }
          
          
          }
        >
          <Link to={`/question/${encodeURIComponent(question)}`}>
            <Typography
              px={0.5}
              py={1}
              sx={{
                marginTop: '30px',
                textAlign: 'center',
                ...typoProps,
              }}
            >
              {question}
            </Typography>
          </Link>
          
        </Box>
      </Box>
    </Box>
  );
};

export default Preguntas;
