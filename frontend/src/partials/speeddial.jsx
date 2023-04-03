import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';

const actions = [
  { icon: <Link to="/about"><InfoOutlinedIcon /></Link>, name: 'About'},
  { icon: <Link to="/blog"><BookOutlinedIcon /></Link>, name: 'Blog'},
];

export default function SpeedDialTooltipOpen() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  return (
    <Box sx={{ height: 330, transform: 'translateZ(0px)', zIndex: 9999, flexGrow: 1, position: 'fixed', bottom: 16, right: 16}}>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}