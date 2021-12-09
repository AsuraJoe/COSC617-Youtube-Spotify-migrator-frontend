import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const url='http://localhost:4657/playlist/PLjyBSjRcT7fuAW9p-EZUQbctCEYUXJ15u';

function App() {
  const [songs, setSongs] = useState(null);

  function handleChange(index, value){
    console.log('current index'+index);
    const newSongs = [...songs];
    console.log(newSongs[index]);
    newSongs[index].spotify_id=value;
    console.log(newSongs);
    setSongs(newSongs);
  };

  function submitPlaylist() {
    axios.post('http://localhost:4657/playlist/spotify', {
      title :'TEST',
      items: songs
    })
    .then(() => console.log('Success'))
    .catch(err=>console.log(err));
  }
  useEffect(()=>{
    axios.get(`${url}`).then((response) => {
      console.log(response.data);
      setSongs(response.data);
    })
  }, []);
  return (
    <div>
      <ul>
      {!songs?null:songs.map((element, index)=>{
        return (<Song index={index} song={element} handleChange={handleChange}/>);})}
      </ul>
      {/* <p>{songs}</p> */}
      <button class="submitList" onClick={submitPlaylist}>submit</button>
    </div>
  );
}

function Song(props){
  const song=props.song
  const embed=`https://www.youtube.com/embed/${song.id}`;
  var spotifyEmbed=`https://open.spotify.com/embed/track/${song.spotify_id}`;
  const submitChange =(e)=>{
    props.handleChange(props.index,e.target.value);
  }
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
        <input class="changeText" type="text" title="new link" placeholder={spotifyEmbed} onChange={submitChange}></input> 
        </div> 
    </div>
  );
}
export default App;
