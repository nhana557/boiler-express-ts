import { NextFunction, Request, Response } from 'express';
import { IProductInteractor } from '../interfaces/product/IProductInteractor';
import { inject, injectable } from 'inversify';
import { INTERFACE_TYPE } from '../utils';

@injectable()
export class ProductController {
	private interactor: IProductInteractor;

	constructor(@inject(INTERFACE_TYPE.ProductInteractor) interactor: IProductInteractor) {
		this.interactor = interactor;
	}

	async onCreateProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const body = req.body;
			// validate logic
			const data = await this.interactor.createProduct(body);

			res.status(200).json(data);
		} catch (error) {
			next(error);
		}
	}
	async onGetProducts(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const offset = parseInt(`${req.query.offset}`) || 0;
			const limit = parseInt(`${req.query.limit}`) || 10;

			const data = await this.interactor.getProducts(limit, offset);

			res.status(200).json(data);
		} catch (error) {
			next(error);
		}
	}
	async onUpdateStock(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const id = parseInt(req.params.id);
			const stock = req.body.stock;

			const data = await this.interactor.updateStock(id, stock);

			res.status(200).json(data);
		} catch (error) {
			next(error);
		}
	}
}
