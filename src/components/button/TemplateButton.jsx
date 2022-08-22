import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const TemplateButton = (props) => {
  const { buttonName, handleClick, title } = props;

  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="contained"
        // buttonName={buttonName}
        // onClick={handleClick}
      >
        {title}
      </Button>
    </Stack>
  );
}
