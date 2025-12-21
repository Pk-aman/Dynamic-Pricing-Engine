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

export type ProductByIdRequestDto = {
  id: String;
};

export type ProductResponseDto = {
  status: CreateProductStaus;
  product: ProjectDto | null;
};

export type ProductListResponseDto = {
  status: CreateProductStaus;
  products: Array<ProjectDto> | null;
};

export type UpdateeProductRequestDto = {
  name?: string;
  basePrice?: number;
  category?: string;
};
