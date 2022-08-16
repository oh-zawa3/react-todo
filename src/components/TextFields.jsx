import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const TextFields = () => {



  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="ここに〇〇を入力" variant="outlined" />
    </Box>
  );
};
