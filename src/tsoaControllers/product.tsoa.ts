import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Path,
  Post,
  Route,
  Tags,
} from "tsoa";

import {
  ProductRequest,
  CreateProductResponseDto,
  ProductListResponseDto,
  ProductResponseDto,
  UpdateeProductRequestDto,
} from "../utils/types/product";

@Route("product")
@Tags("Product")
export class ProductTsoaController extends Controller {
  @Post("/")
  public async createProduct(
    @Body() body: ProductRequest
  ): Promise<CreateProductResponseDto> {
    return {} as CreateProductResponseDto;
  }

  @Get("/")
  public async getAllProducts(): Promise<ProductListResponseDto> {
    return {} as ProductListResponseDto;
  }

  @Get("{id}")
  public async getProductById(@Path() id: string): Promise<ProductResponseDto> {
    return {} as ProductResponseDto;
  }

  @Patch("{id}")
  public async updateProduct(
    @Path() id: string,
    @Body() body: UpdateeProductRequestDto
  ): Promise<ProductResponseDto> {
    return {} as ProductResponseDto;
  }

  @Delete("{id}")
  public async deleteProduct(@Path() id: string): Promise<ProductResponseDto> {
    return {} as ProductResponseDto;
  }
}
