import axios from 'axios';

export const getPokemons = async () => {
  const urlApi = `https://pokeapi.co/api/v2/pokemon?limit=10`;
  const res = await axios.get(urlApi);
  return res.data.results;
};
