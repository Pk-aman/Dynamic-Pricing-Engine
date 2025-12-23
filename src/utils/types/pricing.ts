export type DynamicPriceResponseDto = {
  status: string;
  price: DynamicPriceDto;
};

export type DynamicPriceDto = {
  productId: string;
  basePrice: number;
  dynamicPrice: number;
  appliedRules: string[];
};

export type DynamicPriceResponseErrorDto = {
  status: "FAILED" | "SUCESS";
  message: string;
};

export type PriceListDto = {
  status: "FAILED" | "SUCESS";
  prices: DynamicPriceDto[];
};
