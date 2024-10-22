import morgan, { StreamOptions } from 'morgan';
import logger from './logger.config';

// Define a new token 'message' for Morgan
morgan.token('message', (req: any, res: any) => {
	if (!req.errorMessage) {
		return res.statusMessage || '';
	}
	return req.errorMessage || '';
});

// Helper to get the IP format
const getIpFormat = (): string => ':remote-addr - ';

// Define formats for success and error logs
const successResponseFormat = `:date[web] - ${getIpFormat()}:method :url :status - :response-time ms message: :message`;
const errorResponseFormat = `:date[web] - ${getIpFormat()}:method :url :status - :response-time ms - message: :message`;

// Define the stream options for logging
const successStream: StreamOptions = {
	write: (message: string) => logger.info(message.trim()),
};

const errorStream: StreamOptions = {
	write: (message: string) => logger.error(message.trim()),
};

// Define the handlers for success and error logging
const successHandler = morgan(successResponseFormat, {
	skip: (req, res) => res.statusCode >= 400,
	stream: successStream,
});

const errorHandler = morgan(errorResponseFormat, {
	skip: (req, res) => res.statusCode < 400,
	stream: errorStream,
});

export default {
	successHandler,
	errorHandler,
};
