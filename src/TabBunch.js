import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
// import { Link as RRLink, useRouteMatch } from 'react-router-dom';

export default function TabBunch(props) {
  // const routeMatch = useRouteMatch(['/', '/people', '/places', '/things']);
  // const currentTab = routeMatch?.path;

  return (
    <>
      <Typography color="secondaryText">And now some tabs</Typography>
      <Tabs value={'/things'}>
        <Tab label="People" value="/people" to="/people" component={Link} />
        <Tab label="Places" value="/places" to="/places" component={Link} />
        <Tab label="Things" value="/things" to="/things" component={Link} />
      </Tabs>
    </>
  );
}
