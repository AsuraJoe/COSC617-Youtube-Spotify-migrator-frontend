import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const url='http://localhost:4657/playlist/PLjyBSjRcT7fuAW9p-EZUQbctCEYUXJ15u';

function App() {
  const [songs, setSongs] = useState(null);

  useEffect(()=>{
    axios.get(`${url}`).then((response) => {
      console.log(response.data);
      setSongs(response.data);
    })
  }, []);
  return (
    <div>
      <ul>
        {!songs?null:songs.map(song=><Song song={ song}/>)}
      </ul>
      {/* <p>{songs}</p> */}
    </div>
    
  );
}

function Song(props){
  const song=props.song
  const embed=`https://www.youtube.com/embed/${song.id}`;
  var spotifyEmbed=`https://open.spotify.com/embed/track/${song.spotify_id}`;
  return (
    
    <div className="song" class="card">
      <h3>{song.title}</h3>
      <div class="divider">
        <div class="frame">  
         <iframe src={embed} title="youtube" loading="lazy"></iframe>
        </div>
        <div class="frame">  
         <iframe src={spotifyEmbed} title="spotify" loading="lazy"></iframe>
        </div>
      </div>
      <div class ="changeLink">
        <input type="text" title="new link" placeholder={song.spotify_id}></input>
        <button title="confirm change">Change</button> 
        </div> 
    </div>
  );
}
export default App;
