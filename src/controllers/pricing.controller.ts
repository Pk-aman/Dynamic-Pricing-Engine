import { Request, response, Response } from "express";
import { pricingService } from "../services/pricing.service";
import {
  ProductByIdRequestDto,
  ProductByIdsRequestDto,
} from "../utils/types/product";
import {
  DynamicPriceDto,
  DynamicPriceResponseDto,
  DynamicPriceResponseErrorDto as DynamicPriceResponseError,
  PriceListDto,
} from "../utils/types/pricing";

export const pricingController = {
  async getDynamicPrice(
    req: Request<ProductByIdRequestDto>,
    res: Response<DynamicPriceResponseDto | DynamicPriceResponseError>
  ) {
    try {
      const id = req.params.id;
      const response = await pricingService.calculateDynamicPrice(id);

      return res.json(response);
    } catch (error: unknown) {
      console.error("Pricing Error:", error);

      return res.status(500).json({
        status: "FAILED",
        message: "Unable to calculate dynamic price",
      });
    }
  },

  async setDynamicPrice(
    req: Request<{}, {}, ProductByIdsRequestDto>,
    res: Response<PriceListDto | DynamicPriceResponseError>
  ) {
    try {
      const { productIds } = req.body;

      const prices = await Promise.all(
        productIds.map(async (id: string) => {
          const response = await pricingService.calculateDynamicPrice(id);
          return response.price; // ✅ extract only price
        })
      );

      return res.json({
        status: "SUCESS",
        prices,
      });
    } catch (error: unknown) {
      console.error("Pricing Error:", error);

      return res.status(500).json({
        status: "FAILED",
        message: "Unable to calculate dynamic price",
      });
    }
  },
};
