export type CreateMarketRequestDto = {
  productId: string;
  stock: number;
  demandScore: number;
  competitorPrices: number[];
};

export type CreateMarketResponseDto = {
  status: string;
  id: string | null;
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
  marketData: MarketDataDto | null;
};

export type ProductListResponseDto = {
  status: CreateMarketStaus;
  marketData: Array<MarketDataDto> | null;
};

export type UpdateMarketRequestDto = {
  productId: string;
  stock?: number;
  demandScore?: number;
  competitorPrices?: number[];
};
