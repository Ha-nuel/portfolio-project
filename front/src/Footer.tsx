import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Grid, Typography } from '@mui/material';

const StyledFooter = styled('footer')({
  width: '100%',
});

const Logo: React.FC = () => {
  return <Typography variant='h6'>로고</Typography>;
};

interface LinkItemProps {
  text: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ text }) => {
  return <Typography variant='body2'>{text}</Typography>;
};

interface IconProps {
  name: string;
}

const Icon: React.FC<IconProps> = ({ name }) => {
  return <div>{name}</div>;
};

const Footer = () => {
  return (
    <StyledFooter>
      <Container maxWidth='lg'>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Logo />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2} justifyContent='flex-end'>
              <Grid item>
                <LinkItem text='링크' />
              </Grid>
              <Grid item>
                <LinkItem text='링크' />
              </Grid>
              <Grid item>
                <LinkItem text='링크' />
              </Grid>
              <Grid item>
                <LinkItem text='링크' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant='body2'>Reserved</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2} justifyContent='flex-end'>
              <Grid item>
                <Icon name='아이콘' />
              </Grid>
              <Grid item>
                <Icon name='아이콘' />
              </Grid>
              <Grid item>
                <Icon name='아이콘' />
              </Grid>
              <Grid item>
                <Icon name='아이콘' />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
