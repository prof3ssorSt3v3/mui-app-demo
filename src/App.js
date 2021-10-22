import React, { Fragment } from 'react';
import './app.css';
// import CssBaseline from '@mui/material/CssBaseline'; //css normalize
import Container from '@mui/material/Container'; //section or page wrapper
import Typography from '@mui/material/Typography'; //any text block basically
import Box from '@mui/material/Box'; //div basically

import TabBunch from './TabBunch';
// import IconBunch from './IconBunch';
// import CardBunch from './CardBunch';
// import ListBunch from './ListBunch';
// import GridBunch from './GridBunch';
// import ButtonBunch from './ButtonBunch';

function App() {
  return (
    <Fragment>
      <Container maxWidth="lg" sx={{ p: 2, bgcolor: 'background.paper' }}>
        <Typography color="primary" variant="h1" className="eduard">
          Website Title
        </Typography>
        <Typography variant="h2" align="center" color="text.primary">
          h2
        </Typography>
        <Typography variant="h3" align="right" color="text.secondary">
          h3
        </Typography>
        <Typography variant="subtitle1" color="secondary" gutterBottom>
          subtitle1
        </Typography>
        <Typography variant="subtitle2">subtitle2</Typography>
        <Typography variant="body1">body1</Typography>
        <Typography variant="body2" paragraph noWrap>
          body2 lorem ipsum and some other really long text that doesn't wrap
          but goes off the side of the page.
        </Typography>
        <Typography variant="caption">caption</Typography>
        <Typography variant="button">button</Typography>

        <Box>This is a Box component</Box>

        <TabBunch />
      </Container>
    </Fragment>
  );
}

export default App;

/**
 * Typography variants:
 * h1, h2, h3, h4, h5, h6
 * subtitle1, subtitle2, body1, body2,
 * button, caption, inherit
 */
