import axios from 'axios';
import config from '../../config';
import helperLogs from '../helper';


export async function searchController (req, res) {
  const { query: {q= '' } } = req || {};
  if(q === '') return res.send('Please use like: search?q={keyword}')
  const response = await axios.get(`${config.ENDPOINT}&s=${q}`);
  helperLogs('/search', q);

  return res.send(response?.data?.Search??{});
}

export async function detailController (req, res){
  const { params: { id } } = req || {};
  const response = await axios.get(`${config.ENDPOINT}&i=${id}`);
  helperLogs('/detail/', id);

  return res.send(response?.data?? {});
}
