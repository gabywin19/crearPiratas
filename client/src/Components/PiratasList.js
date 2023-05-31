import React from "react";
import { useNavigate } from "react-router-dom";
import {Button, Container,Paper,Typography,Avatar} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import axios from "axios";
// import Eliminar from './Eliminar';

const PiratasList = ({ piratas, setLoading }) => {
  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/pirate/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:6060/api/pirate/" + id);

      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <Grid sx={{mt: 4}} container spacing={2}>
        {piratas.map((pirata, i) => (
          <Grid xs={12} key={i}>
            <Paper sx={{p: 4}}>
              <Grid container>
                <Grid container justifyContent={{xs: 'center', md: 'flex-start'}} alignItems='center' xs={12} md={1}>
                  <Avatar variant="rounded" sx={{ width: 100, height: 100 }} src={pirata.imagenUrl}>{pirata.pirateName[0]}</Avatar>
                </Grid>
                <Grid container xs={12} md>
                  <Grid container justifyContent='center' xs={12}>
                    <Typography variant='h5'>{pirata.pirateName}</Typography>
                  </Grid>
                  <Grid textAlign='center' xs={6}>
                    <Button variant='outlined' onClick={() => {handleView(pirata._id)}}>Ver pirata</Button>
                  </Grid>
                  <Grid textAlign='center' xs={6}>
                  <Button variant='outlined' color='error' onClick={() => {handleDelete(pirata._id)}}>Caminar la plancha</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PiratasList;
