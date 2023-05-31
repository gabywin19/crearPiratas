import React, { useState } from "react";
import { useFormik } from "formik";
import validate from "./PiratasValidaciones";
import axios from "axios";
import { TextField, Button, Box, Paper } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Unstable_Grid2";

const PiratasForm = () => {
  const [pirateForm, setPirateForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (valores) => {
    setPirateForm(false);
    setLoading(true);
    try {
      await axios.post("http://13.59.197.9:6060/api/pirate", valores);
      setPirateForm(200);
    } catch (e) {
      console.log("Error", e);
      if (e?.response?.status === 400) {
        setPirateForm(400);
      } else {
        setPirateForm(500);
      }
    }
    setLoading(false);
  };

  const formik = useFormik({
    initialValues: {
      pirateName: "",
      imagenUrl: "",
      treasureChests: "",
      pirateCatch: "",
      crewPosition: "Captain",
      pegLeg: false,
      eyePatch: false,
      hoolHand: false,
    },
    validate,
    onSubmit: handleSubmit,
  });

  return (
    <main>
      <Grid container justifyContent='center'>
        <Paper elevation={0} sx={{mt: 4, p: 4, width: 600}}>
          <form onSubmit={formik.handleSubmit} autoComplete="off">
            <Grid container spacing={2}>
              <Grid xs={12}>
                <TextField
                  fullWidth
                  disabled={loading}
                  id="pirateName"
                  name="pirateName"
                  label="Nombre del Pirata"
                  value={formik.values.pirateName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.pirateName && Boolean(formik.errors.pirateName)
                  }
                  helperText={formik.touched.pirateName && formik.errors.pirateName}
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  fullWidth
                  disabled={loading}
                  id="imagenUrl"
                  name="imagenUrl"
                  label="Imagen Url"
                  value={formik.values.imagenUrl}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.imagenUrl && Boolean(formik.errors.imagenUrl)
                  }
                  helperText={formik.touched.imagenUrl && formik.errors.imagenUrl}
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  fullWidth
                  disabled={loading}
                  type="number"
                  id="treasureChests"
                  name="treasureChests"
                  label="Numero de Cofres del Tesoro"
                  value={formik.values.treasureChests}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.treasureChests &&
                    Boolean(formik.errors.treasureChests)
                  }
                  helperText={
                    formik.touched.treasureChests && formik.errors.treasureChests
                  }
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  fullWidth
                  disabled={loading}
                  id="pirateCatch"
                  name="pirateCatch"
                  label="Frase para el Pirata"
                  value={formik.values.pirateCatch}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.pirateCatch && Boolean(formik.errors.pirateCatch)
                  }
                  helperText={
                    formik.touched.pirateCatch && formik.errors.pirateCatch
                  }
                />
              </Grid>
              <Grid xs={12}>
                <InputLabel id="demo-simple-select-label">Roles</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  disabled={loading}
                  id="crewPosition"
                  name='crewPosition'
                  value={formik.values.crewPosition}
                  label="Roles"
                  onChange={formik.handleChange}
                >
                  <MenuItem value="Captain">Capitan</MenuItem>
                  <MenuItem value="First Mate">Jefe de Intendencia</MenuItem>
                  <MenuItem value="Quarter Master">Cuarto Maestro</MenuItem>
                  <MenuItem value="Boatswain">Contramaestre</MenuItem>
                  <MenuItem value="Powder Monkey">Mono de Polvora</MenuItem>
                </Select>
              </Grid>
              <Grid xs={12}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox disabled={loading} name='pegLeg' onChange={formik.handleChange} checked={formik.values.pegLeg} />}
                    label="Pata de Palo"
                  />
                  <FormControlLabel
                    control={<Checkbox disabled={loading} name='eyePatch' onChange={formik.handleChange} checked={formik.values.eyePatch} />}
                    label="Parche en el Ojo"
                  />
                  <FormControlLabel
                    control={<Checkbox disabled={loading} name='hoolHand' onChange={formik.handleChange} checked={formik.values.hoolHand} />}
                    label="Gancho de Mano"
                  />
                </FormGroup>
              </Grid>
              <Grid container spacing={2} xs={12}>
                <Grid container justifyContent="flex-end" xs={12}>
                  <Button disabled={loading} type="submit" color="inherit">
                    Crear Pirata
                  </Button>
                </Grid>

                {(pirateForm === 200) && (
                  <Grid xs={12} textAlign="center">
                    <Box color="success.main">Pirata creado</Box>
                  </Grid>
                )}

                {(pirateForm === 400) && (
                  <Grid xs={12} textAlign="center">
                    <Box color="error.main">El pirata con el rango "Capitan" ya existe</Box>
                  </Grid>
                )}

                {(pirateForm === 500) && (
                  <Grid xs={12} textAlign="center">
                    <Box color="error.main">Error al crear el pirata</Box>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </main>
  );
};

export default PiratasForm;
