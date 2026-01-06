export type CreateMarketRequestDto = {
  productId: string;
  stock: number;
  demandScore: number;
  competitorPrices: number[];
};

export type CreateMarketResponseDto = {
  status: string;
  id: string;
};

export enum CreateMarketStaus {
  SUCESS = "Sucess",
  FAILED = "failed",
}

export type MarketDataDto = {
  id: string;
  productId: string;
  stock: number;
  demandScore: number;
  competitorPrices: number[];
};

export type MarketDataResponseDto = {
  status: CreateMarketStaus;
  marketData: MarketDataDto;
};

export type ProductListResponseDto = {
  status: CreateMarketStaus;
  marketData: Array<MarketDataDto>;
};

export type UpdateMarketRequestDto = {
  stock?: number;
  demandScore?: number;
  competitorPrices?: number[];
};

export type MarketResponseError = {
  status: string;
  message?: "Something went wrong";
};
