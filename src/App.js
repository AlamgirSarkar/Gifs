/* eslint-disable */
import { useEffect, useState } from 'react';
import axios from 'axios';
const App = () => {
  const [gifs, setGifs] = useState();
  const [query, setQuery] = useState();
  console.log('query', query);
  useEffect(() => {
    axios
      .get(
        'https://api.giphy.com/v1/gifs/trending?api_key=Dst7UyI10lCaZeA9seXlAWA2qaXf0uGY'
      )
      .then((response) => {
        console.log('response', response.data);
        setGifs(response.data.data);
      });
  }, []);
  console.log('gifs', gifs);

  return (
    <>
      <input
        placeholder='Search...'
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      ></input>
      <div style={{ border: 'solid', width: 1000 }}>
        {gifs &&
          gifs.map((gif) => (
            <iframe
              key='id'
              title={gif.title}
              src={gif.embed_url}
              width='480'
              height='270'
              frameBorder='0'
              className='giphy-embed'
              allowFullScreen
            >
              {' '}
            </iframe>
          ))}
      </div>
    </>
  );
};
export default App;
