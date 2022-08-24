import { Api } from './apiService';
const API = new Api();

export const sortVotedCats = async page => {
  let votingCats = null;

  if (page === 'favorites') {
    votingCats = await API.getFavoritesCats();
  } else {
    const res = await API.getVotedCats();
    if (page === 'likes') {
      votingCats = res.filter(cat => cat.value === 1);
    } else {
      votingCats = res.filter(cat => cat.value === 0);
    }
  }

  return votingCats;
};
