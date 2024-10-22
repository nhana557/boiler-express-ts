import express from 'express';
import { Container } from 'inversify';
import { IProductRepository } from '../interfaces/product/IProductRepository';
import { INTERFACE_TYPE } from '../utils';
import { ProductRepository } from '../respositories/ProductRepository';
import { IProductInteractor } from '../interfaces/product/IProductInteractor';
import { ProductInteractor } from '../interactors/productInteractor';
import { IMailer } from '../interfaces/libraries/IMailer';
import { Mailer } from '../external-libraries/mailer';
import { IMessageBroker } from '../interfaces/libraries/IMessageBroker';
import { MessageBroker } from '../external-libraries/messageBroker';
import { ProductController } from '../controllers/productController';

const container = new Container();

container.bind<IProductRepository>(INTERFACE_TYPE.ProductRepository).to(ProductRepository);

container.bind<IProductInteractor>(INTERFACE_TYPE.ProductInteractor).to(ProductInteractor);

container.bind<IMailer>(INTERFACE_TYPE.Mailer).to(Mailer);

container.bind<IMessageBroker>(INTERFACE_TYPE.MessageBroker).to(MessageBroker);

container.bind(INTERFACE_TYPE.ProductController).to(ProductController);

const router = express.Router();

const controller = container.get<ProductController>(INTERFACE_TYPE.ProductController);

router.post('/', controller.onCreateProduct.bind(controller));
router.get('/', controller.onGetProducts.bind(controller));
router.patch('/:id', controller.onUpdateStock.bind(controller));

export default router;
