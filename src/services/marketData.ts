import {
  CreateMarketRequestDto,
  CreateMarketResponseDto,
  CreateMarketStaus,
} from "../utils/types/marketData";
import MarketData from "../models/marketData.model";
class MarketDataService {
  async create(req: CreateMarketRequestDto): Promise<CreateMarketResponseDto> {
    console.log("Market Service");
    try {
      const marketResponse = await MarketData.create({
        stock: req.stock,
        demandScore: req.demandScore,
        competitorPrices: req.competitorPrices,
      });
      if (marketResponse) {
        return {
          status: CreateMarketStaus.SUCESS,
          id: marketResponse._id,
        };
      }
      return {
        status: CreateMarketStaus.FAILED,
        id: null,
      };
    } catch (error) {
      console.error("Error: ", error);
      return {
        status: CreateMarketStaus.FAILED,
        id: null,
      };
    }
  }
}

export const marketDataService = new MarketDataService();
