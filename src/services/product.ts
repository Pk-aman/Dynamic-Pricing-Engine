import Product from "../models/product.model";
import {
  CreateProductRequestDto,
  CreateProductResponseDto,
  CreateProductStaus,
  ProductByIdRequestDto,
  ProductListResponseDto,
  ProductResponseDto,
  UpdateeProductRequestDto,
} from "../utils/types/product";

class ProductService {
  async create(
    requestData: CreateProductRequestDto
  ): Promise<CreateProductResponseDto> {
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
    id: string
  ): Promise<ProductResponseDto> {
    const product = await Product.findById(id);
    return {
      status: CreateProductStaus.SUCESS,
      product: product,
    };
  }

  async getAllProduct(): Promise<ProductListResponseDto> {
    const product = await Product.find();

    return {
      status: CreateProductStaus.SUCESS,
      products: product,
    };
  }

  async updateProduct(
    requestParam: ProductByIdRequestDto,
    requestData: UpdateeProductRequestDto
  ): Promise<ProductResponseDto> {
    const product = await Product.findByIdAndUpdate(
      requestParam.id,
      {
        name: requestData.name,
        basePrice: requestData.basePrice,
        category: requestData.category,
      },
      { new: true }
    );

    return {
      status: CreateProductStaus.SUCESS,
      product: product,
    };
  }

  async deleteProduct(
    requestParam: ProductByIdRequestDto
  ): Promise<ProductResponseDto> {
    const product = await Product.findByIdAndDelete(requestParam.id);

    return {
      status: CreateProductStaus.SUCESS,
      product: product,
    };
  }
}

export const productService = new ProductService();
