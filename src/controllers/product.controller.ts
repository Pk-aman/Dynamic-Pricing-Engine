import { Request, Response } from "express";
import Product from "../models/product.model";
import {
  CreateProductRequestDto,
  CreateProductResponseDto,
  CreateProductStaus,
  GetProductByIdRequestDto,
  GetProductListDto,
  GetProductResponseDto,
  ProductRequest,
  ProjectDto,
} from "../utils/types/product";
import { productService } from "../services/product";
import { marketDataService } from "../services/marketData";

export const produtController = {
  async createProduct(
    req: Request<ProductRequest>,
    res: Response<CreateProductResponseDto>
  ) {
    try {
      const {
        name,
        basePrice,
        category,
        stock,
        demandScore,
        competitorPrices,
      } = req.body;
      console.log("Controller: ", req.body);
      const productResponse = await productService.create({
        name,
        basePrice,
        category,
      });
      if (productResponse.status == CreateProductStaus.SUCESS) {
        const marketResponse = await marketDataService.create({
          stock,
          demandScore,
          competitorPrices,
        });
        if (marketResponse) {
          res.json({
            status: CreateProductStaus.SUCESS,
            id: productResponse.id,
          });
        }
        res.json({
          status: CreateProductStaus.FAILED,
          id: null,
        });
      }
    } catch (error) {
      console.error("Error: ", error);
      res.json({
        status: CreateProductStaus.FAILED,
        id: null,
      });
    }
  },

  async getAllProducts(req: Request, res: Response<GetProductListDto>) {
    try {
      const products = await productService.getAllProduct();
      if (products) {
        res.json(products);
      }
      res.json({
        status: CreateProductStaus.FAILED,
        products: null,
      });
    } catch (error) {
      console.error("Error: ", error);
      res.json({
        status: CreateProductStaus.FAILED,
        products: null,
      });
    }
  },

  async getProductsById(
    req: Request<GetProductByIdRequestDto>,
    res: Response<GetProductResponseDto>
  ) {
    try {
      const body = req.params;
      const product = await productService.getById(body);
      if (product) {
        res.json(product);
      }
      res.json({
        status: CreateProductStaus.FAILED,
        product: null,
      });
    } catch (error) {
      console.error("Error: ", error);
      res.json({
        status: CreateProductStaus.FAILED,
        product: null,
      });
    }
  },
};
