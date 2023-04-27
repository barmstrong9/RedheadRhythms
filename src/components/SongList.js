import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from "@mui/material/IconButton";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

export default function SongList({ songs, audioURL, songPlaying, toggleSong }) {

  return (
    <Grid container spacing={4}>
      {songs.map((song, index) => {
        const image = `https://source.unsplash.com/random/200x200/?music&id=${song.id}`
        return (<Grid item key={song.id} xs={12} sm={6} md={4}>
          <Card className="song-card" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              image={image}
              alt="random"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography>
                {song.title}
              </Typography>
              <Typography>
                <b>{song.artist}</b>
              </Typography>
            </CardContent>
            <CardActions style={{ height: '8px', maxHeight: '40px', padding: '0px' }}>
              {songPlaying === index ? (
                null
              ) : (
                <IconButton id='play-pause-music' style={{ margin: '0 auto 0 auto' }} aria-label="play" onClick={() => toggleSong(index)}>
                  <PlayCircleIcon />
                </IconButton>
              )}
              {
                songPlaying === index ? (
                  <audio
                    autoPlay={true}
                    controls
                    src={audioURL}
                    style= {{ width: '100%' }}
                  >
                  </audio>
                ) : null
              }
            </CardActions>
            <CardActions style={{ display: 'inline-block' }}>
            </CardActions>
          </Card>
        </Grid>)
      }
      )}
    </Grid>
  )
}