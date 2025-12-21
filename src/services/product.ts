import Product from "../models/product.model";
import {
  CreateProductRequestDto,
  CreateProductResponseDto,
  CreateProductStaus,
  GetProductByIdRequestDto,
  GetProductListDto,
  GetProductResponseDto,
  ProjectDto,
} from "../utils/types/product";

class ProductService {
  async create(
    requestData: CreateProductRequestDto
  ): Promise<CreateProductResponseDto> {
    console.log("Product Service");

    const product = await Product.create({
      name: requestData.name,
      basePrice: requestData.basePrice,
      category: requestData.category,
    });

    return {
      status: CreateProductStaus.SUCESS,
      id: product._id,
    };
  }

  async getById(
    requestData: GetProductByIdRequestDto
  ): Promise<GetProductResponseDto> {
    const product = await Product.findById(requestData.id);

    return {
      status: CreateProductStaus.SUCESS,
      product: product,
    };
  }

  async getAllProduct(): Promise<GetProductListDto> {
    const product = await Product.find();

    return {
      status: CreateProductStaus.SUCESS,
      products: product,
    };
  }
}

export const productService = new ProductService();
