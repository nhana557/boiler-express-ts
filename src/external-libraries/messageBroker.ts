import { injectable } from 'inversify';
import { IMessageBroker } from '../interfaces/libraries/IMessageBroker';

@injectable()
export class MessageBroker implements IMessageBroker {
	NotifToPromotionService(product: unknown) {
		// Kafka  or RabbitMQ
		console.log('Calling message broker');
		return true;
	}
}
