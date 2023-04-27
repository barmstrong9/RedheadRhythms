import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import LogoutIcon from '@mui/icons-material/Logout';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import UploadRoundedIcon from '@mui/icons-material/UploadRounded';

export default function CustomAppBar({ signOut, user }) {
  return (
    <AppBar position="relative">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <LibraryMusicIcon sx={{ marginRight: 2 }} />
        <Typography variant="h6" color="inherit" noWrap sx={{ marginLeft: 'auto', marginRight: 'auto' }} >
          Hello, {user.attributes.given_name}
        </Typography>
        <UploadRoundedIcon sx={{ marginRight: 2, cursor: 'pointer' }} onClick={console.log("working")}/>
        <LogoutIcon sx={{ cursor: 'pointer' }} onClick={signOut} />
      </Toolbar>
    </AppBar>
  )
}