import React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Button, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/material/Icon';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

const Header: React.FC = () => {
  return (
    <StyledAppBar position='fixed'>
      <Toolbar>
        <IconButton edge='start' color='inherit' aria-label='menu'>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Logo
        </Typography>
        <Button color='inherit'>Home</Button>
        <Button color='inherit'>About</Button>
        <Button color='inherit'>Services</Button>
        <Button color='inherit'>Contact</Button>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
