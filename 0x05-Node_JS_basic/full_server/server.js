import { express, route } from './routes/index';

const app = express();

app.use('/', route);
app.listen(1245, () => {
  console.log('Server is Running!');
});

export default app;
