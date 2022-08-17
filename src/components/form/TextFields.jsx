import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const TextFields = (props) => {
  const { title, textValue, handleChange } = props;


  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <h1>{title}</h1>
      <TextField
        id="outlined-basic"
        name={title}
        label={`ここに${title}を入力`}
        variant="outlined"
        value={textValue}
        onChange={handleChange}
      />
    </Box>
  );
};
