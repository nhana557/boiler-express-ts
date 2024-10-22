import winston from 'winston';

// Define a custom format to handle errors
const enumerateErrorFormat = winston.format((info: winston.Logform.TransformableInfo) => {
	if (info instanceof Error) {
		Object.assign(info, { message: info.stack });
	}
	return info;
});

// Create the logger
const logger = winston.createLogger({
	level: 'info',
	format: winston.format.combine(
		enumerateErrorFormat(),
		winston.format.colorize(),
		winston.format.splat(),
		winston.format.printf(
			({ level, message }: { level: string; message: string }) => `${level}: ${message}`,
		),
	),
	transports: [
		new winston.transports.Console({
			stderrLevels: ['error'],
		}),
	],
});

export default logger;
