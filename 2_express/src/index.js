import express from 'express';
import {
  searchController,
  detailController,
  logController,
} from './controller';
import list from '../list.json';
import config from '../config';

const app = express();

app.get('/', (req, res) => {
  res.send(list);
})
app.get('/search', searchController);
app.get('/detail/:id', detailController);
app.get('/log', logController);



app.listen(config.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express is running on port: ${config.PORT}`);
})