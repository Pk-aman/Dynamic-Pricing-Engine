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
  id: string;
  name: string;
  basePrice: number | 0;
  category: string;
};

export type ProductByIdRequestDto = {
  id: string;
};

export type ProductResponseDto = {
  status: CreateProductStaus;
  product: ProjectDto;
};

export type ProductListResponseDto = {
  status: CreateProductStaus;
  products: Array<ProjectDto>;
};

export type UpdateeProductRequestDto = {
  name?: string;
  basePrice?: number;
  category?: string;
};

export type ProductResponseError = {
  status: CreateProductStaus;
  message: string;
};

export type ProductByIdsRequestDto = {
  productIds: string[];
};
