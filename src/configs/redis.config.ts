import { createClient, RedisClientType } from 'redis';
import configEnv from './envPath.config';
configEnv();

let client: RedisClientType;

const connectToRedis = (): void => {
	if (!client) {
		client = createClient({
			socket: {
				host: process.env.HOST_REDIS || 'localhost',
				port: Number(process.env.PORT_REDIS),
			},
			password: process.env.PASS_REDIS,
		});

		client.on('connect', () => {
			console.log('Connected to Redis');
		});

		client.on('error', (err: Error) => {
			console.error('Redis connection error:', err);
		});
		client.connect();
	}
};

export default connectToRedis;
