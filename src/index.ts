import express, { Request, Response } from 'express';
import 'reflect-metadata';
import configEnv from './configs/envPath.config';
import morgan from './configs/morgan.config';
import routers from './routes/index';
import { pgClient } from './configs/pgDB.config';
import reidisConfig from './configs/redis.config';

configEnv();
pgClient();
reidisConfig();
const app = express();

app.use(express.json());
app.use(morgan.successHandler);
app.use(morgan.errorHandler);

app.use('/api/v1', routers);
app.use('/test', (req: Request, res: Response) => {
	res.send('hello world!');
});

const port = process.env.PORT;
app.listen(port, () => {
	console.log(`server listening on port ${port}`);
});
