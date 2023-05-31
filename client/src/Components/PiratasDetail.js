import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {
  Typography,
  Avatar,
  Box,
  CircularProgress,
  Grid,
  Checkbox
} from "@mui/material";

const PiratasDetail = () => {
  const [view, setView] = useState({});

  const navigate = useNavigate();

  let { id } = useParams();

  useEffect(() => {
    const detalles = async () => {
      try {
        const res = await axios.get("http://localhost:6060/api/pirate/" + id);

        setView(res.data);
      } catch (e) {
        console.log("Error", e);
        setView(null);
      }
    };

    detalles();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {(!view?._id && view !== null) && (
        <Box sx={{ mt: 4 }} textAlign='center'>
          <CircularProgress />
        </Box>
      )}

      {view === null && (
        <Box sx={{ mt: 4 }} textAlign='center'>
          <Typography>No hay nada por aquí grumete. Argggg......</Typography>
        </Box>
      )}

      {view?._id && (
        <div>
          <Box sx={{mt: 4}}>
            <Grid container>
              <Grid container justifyContent={'center'} alignItems='center' xs={12}>
                <Avatar variant="rounded" sx={{ width: 100, height: 100 }} src={view.imagenUrl}>{view.pirateName[0]}</Avatar>
              </Grid>
              <Grid container justifyContent='center' xs={12}>
                <Typography variant='h5'>Nombre:{view.pirateName}</Typography>
              </Grid>
              <Grid container justifyContent='center' xs={12}>
                <Typography variant='h5'>Cofres del Tesoro:{view.treasureChests}</Typography>
              </Grid>
              <Grid container justifyContent='center' xs={12}>
                <Typography variant='h5'>Frase Pirata:{view.pirateCatch}</Typography>
              </Grid>
              <Grid container justifyContent='center' xs={12}>
                <Typography variant='h5'>Rol:{view.crewPosition}</Typography>
              </Grid>
              <Grid container justifyContent='center' xs={12}>
                <Typography variant='h5'>Pata de Palo: <Checkbox disabled={true} checked={view.pegLeg} /></Typography>
              </Grid>
              <Grid container justifyContent='center' xs={12}>
                <Typography variant='h5'>Parche en el Ojo: <Checkbox disabled={true} checked={view.eyePatch} /></Typography>
              </Grid>
              <Grid container justifyContent='center' xs={12}>
                <Typography variant='h5'>Gancho de Mano: <Checkbox disabled={true} checked={view.hoolHand} /></Typography>
              </Grid>
            </Grid>
          </Box>
        
        </div>
      )}
    </>
  );
};

export default PiratasDetail;
