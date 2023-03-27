import React, { Fragment } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { connect } from "react-redux";
import { logout } from '../actions/auth';

import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import PropTypes from 'prop-types';




function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
});

  
const HideAppBar = ({ props, logout, isAuthenticated}) => {

    const guestLinks = () => (
        <Fragment>
            <Button color="inherit" onClick={() => navigate("/login")}>Login</Button>

            <Button color="inherit" onClick={() => navigate("/signup")}>Sign Up</Button>
        </Fragment>
    );
    
    const authLinks = () => (
        <Fragment>
            <Button color="inherit" onClick={logout}>Logout</Button>
        </Fragment>
      
    );

    const navigate = useNavigate();


    return (
      <React.Fragment>
        <CssBaseline />
            <ThemeProvider theme={darkTheme}>
                <AppBar>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    
                          <Button color="inherit" onClick={() => navigate("/")}>HOME</Button>
                        </Typography>

                        {isAuthenticated ? authLinks() : guestLinks()}

                    </Toolbar>
                </AppBar>
            </ThemeProvider>

        <Toolbar id="back-to-top-anchor"/>
        <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      </React.Fragment>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(HideAppBar);













// import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import CssBaseline from '@mui/material/CssBaseline';
// import useScrollTrigger from '@mui/material/useScrollTrigger';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Fab from '@mui/material/Fab';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import Fade from '@mui/material/Fade';

// function ScrollTop(props) {
//   const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//     disableHysteresis: true,
//     threshold: 100,
//   });

//   const handleClick = (event) => {
//     const anchor = (event.target.ownerDocument || document).querySelector(
//       '#back-to-top-anchor',
//     );

//     if (anchor) {
//       anchor.scrollIntoView({
//         block: 'center',
//       });
//     }
//   };

//   return (
//     <Fade in={trigger}>
//       <Box
//         onClick={handleClick}
//         role="presentation"
//         sx={{ position: 'fixed', bottom: 16, right: 16 }}
//       >
//         {children}
//       </Box>
//     </Fade>
//   );
// }

// ScrollTop.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default function BackToTop(props) {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <AppBar>
//         <Toolbar>
//           <Typography variant="h6" component="div">
//             Scroll to see button
            
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Toolbar id="back-to-top-anchor" />
//       <Container>
//         <Box sx={{ my: 2 }}>
//           {[...new Array(12)]
//             .map(
//               () => `Cras mattis consectetur purus sit amet fermentum.
// Cras justo odio, dapibus ac facilisis in, egestas eget quam.
// Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
// Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
//             )
//             .join('\n')}
//         </Box>
//       </Container>
//       <ScrollTop {...props}>
//         <Fab size="small" aria-label="scroll back to top">
//           <KeyboardArrowUpIcon />
//         </Fab>
//       </ScrollTop>
//     </React.Fragment>
//   );
// }

