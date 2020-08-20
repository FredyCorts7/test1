import {useState, useEffect} from 'react';
import {getPokemons} from '../helpers/getPokemons';

export const useFetchApi = () => {
  const [state, setState] = useState({data: [], loading: true});
  useEffect(() => {
    getPokemons().then((pokemons) => {
      setState({
        data: pokemons,
        loading: false,
      });
    });
  }, []);
  return state;
};
