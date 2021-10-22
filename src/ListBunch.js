import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/ListItem';
import Box from '@mui/material/Box';

export default function ListBunch(props) {
  return (
    <>
      <Typography variant="h2">A List of Items</Typography>
      <Box sx={{ width: '50%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <List component="nav">
          <ListSubheader>
            <ListItemText primary="Some Text in the list sub header" />
          </ListSubheader>
          <Divider variant="inset" />
          <ListItem>
            <ListItemText primary="A list item" secondary="little text" />
          </ListItem>
          <Divider variant="middle" />
          <ListItemButton>
            <ListItemText
              primary="A list item button"
              secondary="little text"
            />
          </ListItemButton>
          <Divider />
        </List>
      </Box>
    </>
  );
}
