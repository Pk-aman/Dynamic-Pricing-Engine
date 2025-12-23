import { Request, Response } from "express";
import {
  CreateMarketStaus,
  MarketDataResponseDto,
  MarketResponseError,
  UpdateMarketRequestDto,
} from "../utils/types/marketData";
import { marketDataService } from "../services/marketData";
import { ProductByIdRequestDto } from "../utils/types/product";

export const marketDataController = {

  async getMarketDataById(
    req: Request<ProductByIdRequestDto>,
    res: Response<MarketDataResponseDto | MarketResponseError>
  ) {
    try {
      const id = req.params.id;
      const marketData = await marketDataService.getMarketDataByProductId(id);

      if (marketData) {
        res.json(marketData);
      }
    } catch (error) {
      console.error("Error: ", error);
      res.json({
        status: CreateMarketStaus.FAILED,
      });
    }
  },

  async updateMarketDataById(
    req: Request<ProductByIdRequestDto, {}, UpdateMarketRequestDto>,
    res: Response<MarketDataResponseDto | MarketResponseError>
  ) {
    try {
      const param = req.params;
      const body = req.body;
      const marketData = await marketDataService.updateMarketDataById(
        param,
        body
      );

      if (marketData) {
        res.json(marketData);
      }
    } catch (error) {
      console.error("Error: ", error);
      res.json({
        status: CreateMarketStaus.FAILED,
      });
    }
  },
};
