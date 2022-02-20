import { useState } from "react";
import axios from "axios";
import { useLocalStorage } from './useLocalStorage'


const useGetGames = () => {
    const [games, setGames] = useLocalStorage("games", "");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    async function getGames() {
        try {
            const response = await axios.get(
                "https://server-final-project-node.herokuapp.com/api/games/"
            );
            console.log(response.data);
            setGames(response.data);
            setError(false);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    return { games, error, loading, getGames };

};

export default useGetGames;
