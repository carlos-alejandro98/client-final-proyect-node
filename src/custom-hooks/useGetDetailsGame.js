import { useState, useEffect } from 'react';

const useGetDetailsGame = () => {
  const game_id = window.location.pathname.split("/")[2];
  const [doneFetchGameDetail, setDoneFetchGameDetail] = useState(false);
  const [game, setGame] = useState([]);
  const [platformGame, setPlatformGame] = useState([]);
  const [genreGame, setGenreGame] = useState([]);

  useEffect(() => {
    getDetailsGame(game_id);
  }, [game_id]);

  useEffect(() => {
    getPlatforms();
  }, []);

  useEffect(() => {
    getGenres();
  }, []);

  const getDetailsGame = (game_id) => {
    fetch('https://server-final-project-node.herokuapp.com/api/game/detailsGame/' + game_id)
      .then((res) => res.json())
      .then((data) => {
        setDoneFetchGameDetail(true);
        !Array.isArray(data) && setGame(data);
      })
      .catch((err) => console.log(err));
  };

  const getPlatforms = () => {
    fetch("https://server-final-project-node.herokuapp.com/api/platform/getPlatforms")
      .then((res) => res.json())
      .then((data) => {
        setPlatformGame(data);
      })
      .catch((err) => console.log(err));
  };

  const getGenres = () => {
    fetch("https://server-final-project-node.herokuapp.com/api/genre/getGenre")
      .then((res) => res.json())
      .then((data) => {
        setGenreGame(data);
      })
      .catch((err) => console.log(err));
  };

  return { game, platformGame, genreGame, doneFetchGameDetail };
}



export default useGetDetailsGame;
