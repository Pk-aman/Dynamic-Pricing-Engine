import { Request, Response } from "express";
import {
  CreateMarketRequestDto,
  CreateMarketResponseDto,
  CreateMarketStaus,
  MarketDataResponseDto,
  UpdateMarketRequestDto,
} from "../utils/types/marketData";
import { marketDataService } from "../services/marketData";
import { ProductByIdRequestDto } from "../utils/types/product";

export const marketDataController = {
  async create(
    req: Request<CreateMarketRequestDto>,
    res: Response<CreateMarketResponseDto>
  ) {
    try {
      const body = req.body;
      const response = await marketDataService.create(body);

      if (response) {
        res.json(response);
      }
      res.json({
        status: CreateMarketStaus.FAILED,
        id: null,
      });
    } catch (error) {
      console.error("Error: ", error);
      res.json({
        status: CreateMarketStaus.FAILED,
        id: null,
      });
    }
  },

  async getMarketDataById(
    req: Request<ProductByIdRequestDto>,
    res: Response<MarketDataResponseDto>
  ) {
    console.log("product by Id");
    try {
      const body = req.params;
      const marketData = await marketDataService.getMarketDataById(body);

      if (marketData) {
        res.json(marketData);
      }
    } catch (error) {
      console.error("Error: ", error);
      res.json({
        status: CreateMarketStaus.FAILED,
        marketData: null,
      });
    }
  },

  async updateMarketDataById(
    req: Request<ProductByIdRequestDto, {}, UpdateMarketRequestDto>,
    res: Response<MarketDataResponseDto>
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
        marketData: null,
      });
    }
  },
};
