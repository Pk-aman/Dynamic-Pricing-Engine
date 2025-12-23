import { Request, Response } from "express";
import { priceHistoryService } from "../services/priceHistory.service";
import {
  PriceHistoryResponseDto,
  ClearPriceHistoryResponseDto,
  PriceHistoryResponseError,
} from "../utils/types/priceHistory";
import {
  CreateProductStaus,
  ProductByIdRequestDto,
} from "../utils/types/product";

export const priceHistoryController = {
  async getHistory(
    req: Request<ProductByIdRequestDto>,
    res: Response<PriceHistoryResponseDto | PriceHistoryResponseError>
  ) {
    try {
      const param = req.params;
      const response = await priceHistoryService.findByProductId(param);
      return res.json(response);
    } catch (error: unknown) {
      console.error("Price History Fetch Error: ", error);

      return res.status(500).json({
        status: CreateProductStaus.FAILED,
      });
    }
  },

  async clearHistory(
    req: Request<ProductByIdRequestDto>,
    res: Response<ClearPriceHistoryResponseDto | PriceHistoryResponseError>
  ) {
    try {
      const param = req.params;

      const response = await priceHistoryService.clearByProductId(param);

      return res.json(response);
    } catch (error: unknown) {
      console.error("Price History Clear Error: ", error);

      return res.status(500).json({
        status: CreateProductStaus.FAILED,
        deletedCount: 0,
      });
    }
  },

};
