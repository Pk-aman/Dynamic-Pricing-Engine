import { Request, Response } from "express";
import Product from "../models/product.model";
import {
  CreateProductRequestDto,
  CreateProductResponseDto,
  CreateProductStaus,
  ProductByIdRequestDto,
  ProductListResponseDto,
  ProductResponseDto,
  ProductRequest,
  ProjectDto,
  UpdateeProductRequestDto,
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

      const productResponse = await productService.create({
        name,
        basePrice,
        category,
      });
      if (
        productResponse.status == CreateProductStaus.SUCESS &&
        productResponse.id
      ) {
        const marketResponse = await marketDataService.create({
          productId: productResponse.id,
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

  async getAllProducts(req: Request, res: Response<ProductListResponseDto>) {
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
    req: Request<ProductByIdRequestDto>,
    res: Response<ProductResponseDto>
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

  async deleteProduct(
    req: Request<ProductByIdRequestDto>,
    res: Response<ProductResponseDto>
  ) {
    try {
      const body = req.params;
      const product = await productService.deleteProduct(body);
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

  async updateProductsById(
    req: Request<ProductByIdRequestDto, {}, UpdateeProductRequestDto>,
    res: Response<ProductResponseDto>
  ) {
    try {
      const params = req.params;
      const body = req.body;
      const product = await productService.updateProduct(params, body);
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
