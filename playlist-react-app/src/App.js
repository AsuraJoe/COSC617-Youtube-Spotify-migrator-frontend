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
    </div>
  );
}

function Song(props){
  const song=props.song
  const embed=`https://www.youtube.com/embed/${song.id}`;
  return (
    <div className="song" class="card">
      {/* <h2>{song.title}</h2> */}
      <iframe src={embed} title="youtube" loading="lazy"></iframe>
    </div>
  );
}
export default App;
