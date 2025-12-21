export type CreateMarketRequestDto = {
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
