import { Pool } from 'pg';
import configEnv from './envPath.config';
configEnv();

let client: Pool;
export const pgClient = (): Pool => {
	if (!client) {
		try {
			client = new Pool({
				host: process.env.DB_HOST,
				port: parseInt(`${process.env.DB_PORT}`),
				user: process.env.DB_USER,
				password: process.env.DB_PASSWORD,
				database: process.env.DB_NAME,
			});
			client.connect(); // Connect to the database
			console.log('Connected to database with idle count: ' + client.idleCount);
		} catch (error) {
			console.log('Error connecting to the database:', error);
			throw new Error('Database connection failed');
		}
	}
	return client;
};
