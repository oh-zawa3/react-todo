import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


export const SelectBox = (props) => {
  const { items, handleChange, selectValue } = props;

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '20ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          value={selectValue.value}
          onChange={handleChange}
          helperText="Please select an item to add"
          variant="standard"
        >
          {items.map((v) => (
            <MenuItem key={v.value} value={v.value}>
              {v.label}
            </MenuItem>
          ))}
        </TextField>
    </Box>
  );
};
