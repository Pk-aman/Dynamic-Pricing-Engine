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
  ProductResponseError,
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

  async getAllProducts(
    req: Request,
    res: Response<ProductListResponseDto | ProductResponseError>
  ) {
    try {
      const products = await productService.getAllProduct();
      if (products) {
        res.json(products);
      }
      res.json({
        status: CreateProductStaus.FAILED,
        message: "Something went wrong",
      });
    } catch (error) {
      console.error("Error: ", error);
      res.json({
        status: CreateProductStaus.FAILED,
        message: "Something went wrong",
      });
    }
  },

  async getProductsById(
    req: Request<ProductByIdRequestDto>,
    res: Response<ProductResponseDto | ProductResponseError>
  ) {
    try {
      const id = req.params.id;
      const product = await productService.getById(id);

      if (!product.product) {
        return res.status(404).json({
          status: CreateProductStaus.FAILED,
          message: "Product not found",
        });
      }

      return res.json(product);
      
    } catch (error) {
      console.error("Error: ", error);
      res.json({
        status: CreateProductStaus.FAILED,
        message: "Something went wrong",
      });
    }
  },

  async deleteProduct(
    req: Request<ProductByIdRequestDto>,
    res: Response<ProductResponseDto | ProductResponseError>
  ) {
    try {
      const body = req.params;
      const product = await productService.deleteProduct(body);
      if (product) {
        res.json(product);
      }
      res.json({
        status: CreateProductStaus.FAILED,
        message: "Something went wrong",
      });
    } catch (error) {
      console.error("Error: ", error);
      res.json({
        status: CreateProductStaus.FAILED,
        message: "Something went wrong",
      });
    }
  },

  async updateProductsById(
    req: Request<ProductByIdRequestDto, {}, UpdateeProductRequestDto>,
    res: Response<ProductResponseDto | ProductResponseError>
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
        message: "Something went wrong",
      });
    } catch (error) {
      console.error("Error: ", error);
      res.json({
        status: CreateProductStaus.FAILED,
        message: "Something went wrong",
      });
    }
  },
};
