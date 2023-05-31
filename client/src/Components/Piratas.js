import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PiratasList from './PiratasList';
import { CircularProgress, Box, Typography } from '@mui/material';

const Piratas=() =>{
  const [piratas, setPiratas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetch = async () => {
      setLoading(true);
      setPiratas([]);
      try {
        const res = await axios.get('http://13.59.197.9:6060/api/pirate');

        setLoading(false);
        setPiratas(res.data);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setPiratas(null);
      }
    }

    if (loading) {
      fetch();
    }
  },[loading]);

  return (
    <>
      {(piratas?.length <= 0 && loading) && (
        <Box sx={{textAlign: 'center', mt: 4}}>
          <CircularProgress />
        </Box>
      )}

      {(piratas?.length <= 0 && !loading) && (
        <Box sx={{textAlign: 'center', mt: 4}}>
          <Typography>No hay piratas en el barco. Argggggggggg...</Typography>
        </Box>
      )}
      {(piratas === null) && (<span>No se han podido obtener los Piratas Registrado.</span>)}
      {(piratas?.length > 0 && (<PiratasList setLoading={setLoading} piratas={piratas} />))}
    </>
  )
};

export default Piratas;