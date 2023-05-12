import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Copyright() {
  return (
    <Typography variant="body2" color="inherit" align="center">
      Brandon Armstrong{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box sx={{
      bgcolor: '#ffa500',
      display: 'flex',
      flexDirection: 'column',
      marginTop: 'auto'
    }} component="footer">
      <Typography
        variant="subtitle1"
        align="center"
        color="inherit"
        component="p"
      >
        Little Project For Me
      </Typography>
      <Copyright />
    </Box>
  )
}