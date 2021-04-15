import app from './app';
import config from '../config';

app.listen(config.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express is running on port: ${config.PORT}`);
})