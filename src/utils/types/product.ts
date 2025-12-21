import { CreateMarketRequestDto } from "./marketData";

export type CreateProductRequestDto = {
  name: string;
  basePrice: number;
  category: string;
};

export type CreateProductResponseDto = {
  status: string;
  id: string | null;
};

export enum CreateProductStaus {
  SUCESS = "Sucess",
  FAILED = "failed",
}

export type ProductRequest = CreateProductRequestDto | CreateMarketRequestDto;

export type ProjectDto = {
  id: String;
  name: string;
  basePrice: number;
  category: string;
};

export type GetProductByIdRequestDto = {
  id: String;
};

export type GetProductResponseDto = {
  status: CreateProductStaus;
  product: ProjectDto | null;
};

export type GetProductListDto = {
  status: CreateProductStaus;
  products: Array<ProjectDto> | null;
};
