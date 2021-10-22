import React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import Icon from '@mui/material/Icon'; //inside the specific ones
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AlarmIcon from '@mui/icons-material/Alarm';
import Fingerprint from '@mui/icons-material/Fingerprint';
import SendIcon from '@mui/icons-material/Send';

export default function IconBunch(props) {
  return (
    <>
      <Typography variant="h2">Some Icons</Typography>
      <Stack direction="column" spacing={1} sx={{ p: 2 }}>
        <AccountCircleIcon />
        <Typography variant="body2">Just a couple Icons</Typography>
        <DeleteIcon />
      </Stack>
      <Divider />
      <Stack direction="row" spacing={1} sx={{ p: 2 }}>
        <IconButton aria-label="delete">
          <DeleteIcon fontSize="large" />
        </IconButton>
        <IconButton aria-label="delete" disabled color="primary">
          <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton color="secondary" aria-label="add an alarm">
          <AlarmIcon />
        </IconButton>
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
        <IconButton aria-label="fingerprint" color="success">
          <Fingerprint />
        </IconButton>
        <Typography variant="body2">Some IconButtons</Typography>
      </Stack>
      <Divider />
      <Stack direction="row" spacing={1} sx={{ p: 2 }}>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
        <Typography variant="body2">
          Some Buttons with startIcon and endIcon
        </Typography>
      </Stack>
    </>
  );
}

/*
<SvgIcon /> uses the built-in Svg Icons

It is much easier to add the font to index.html and use 
<IconButton/> and <Icon /> 

Needed to install 
yarn add @mui/icons-material

Then import the icon you want from @mui/icons-material/...

Search here for the icon you want
https://mui.com/components/material-icons/

*/
