import dotenv from 'dotenv';
dotenv.config();

export default function configEnv() {
	const pathEnv = process.env.NODE_ENV !== 'production' ? './.env.development' : './.env.production';
	dotenv.config({
		path: pathEnv,
	});
}
