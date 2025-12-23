import { CreateProductStaus } from "./product";

export type CreatePriceHistoryRequestDto = {
  productId: string;
  calculatedPrice: number;
  basePrice: number;
  appliedRules: string[];
};

export type PriceHistoryDto = {
  id: string;
  productId: string;
  calculatedPrice: number;
  basePrice: number;
  appliedRules: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type PriceHistoryResponseDto = {
  status: CreateProductStaus;
  history: PriceHistoryDto[];
};

export type CreatePriceHistoryResponseDto = {
  status: CreateProductStaus;
  id: string;
};

export type ClearPriceHistoryResponseDto = {
  status: CreateProductStaus;
  deletedCount: number;
};

export type PriceHistoryResponseError = {
  status: CreateProductStaus;
  message?: "Something went wrong.";
};
