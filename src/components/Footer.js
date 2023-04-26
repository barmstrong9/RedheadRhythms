import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      Brandon Armstrong{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box sx={{
      bgcolor: 'background.paper', p: 1,
      display: 'flex',
      flexDirection: 'column',
      marginTop: 'auto'
    }} component="footer">
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Little Project For Me
      </Typography>
      <Copyright />
    </Box>
  )
}