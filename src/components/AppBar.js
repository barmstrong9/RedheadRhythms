import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import LogoutIcon from '@mui/icons-material/Logout';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import UploadRoundedIcon from '@mui/icons-material/UploadRounded';
import UploadForm from './uploadForm';

export default function CustomAppBar({ signOut, user }) {
  const [showUploadForm, setShowUploadForm] = React.useState(false)
  const handleUploadIconClick = () => {
    if (showUploadForm === false) {
      setShowUploadForm(true);
    } else {
      setShowUploadForm(false)
    }
  };

  const handleUploadFormClose = () => {
    setShowUploadForm(false);
  };
  return (
    <AppBar position="relative">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <LibraryMusicIcon sx={{ marginRight: 2 }} />
        <Typography variant="h6" color="inherit" noWrap sx={{ marginLeft: 'auto', marginRight: 'auto' }} >
          Hello, {user.attributes.given_name}
        </Typography>
        <UploadRoundedIcon sx={{ marginRight: 2, cursor: 'pointer' }} onClick={ handleUploadIconClick }/>
        <LogoutIcon sx={{ cursor: 'pointer' }} onClick={signOut} />
      </Toolbar>
      {showUploadForm && <UploadForm onClose={handleUploadFormClose} />}
    </AppBar>
  )
}