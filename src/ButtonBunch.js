import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ButtonGroup, Button } from '@mui/material';
import Stack from '@mui/material/Stack';

export default function ButtonBunch(props) {
  return (
    <>
      <Box>
        <Typography variant="body1">Inside the button box</Typography>
        <Stack direction="column" spacing={2}>
          <Button variant="text" size="small">
            First
          </Button>
          <Button variant="contained" size="medium">
            Second
          </Button>
          <Button variant="outlined" size="large">
            Third
          </Button>
        </Stack>
        <ButtonGroup>
          <Button color="primary">One</Button>
          <Button color="secondary">Two</Button>
          <Button color="error">Three</Button>
        </ButtonGroup>
      </Box>
    </>
  );
}

/*
Button Colours
 'primary'
 'secondary'
 'success'
 'error'
 'info'
 'warning'

Button sizes
small
medium
large

Button variants
text
contained
outlined
*/
