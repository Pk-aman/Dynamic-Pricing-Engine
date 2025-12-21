import {
  CreateMarketRequestDto,
  CreateMarketResponseDto,
  CreateMarketStaus,
  MarketDataDto,
  MarketDataResponseDto,
  UpdateMarketRequestDto,
} from "../utils/types/marketData";
import MarketData from "../models/marketData.model";
import { ProductByIdRequestDto } from "../utils/types/product";
class MarketDataService {
  async create(req: CreateMarketRequestDto): Promise<CreateMarketResponseDto> {
    const marketResponse = await MarketData.create({
      productId: req.productId,
      stock: req.stock,
      demandScore: req.demandScore,
      competitorPrices: req.competitorPrices,
    });

    return {
      status: CreateMarketStaus.SUCESS,
      id: marketResponse._id,
    };
  }

  async getMarketDataById(
    req: ProductByIdRequestDto
  ): Promise<MarketDataResponseDto> {
    const marketDataResponse = await MarketData.findOne({ productId: req.id });

    return {
      status: CreateMarketStaus.SUCESS,
      marketData: marketDataResponse,
    };
  }

  async updateMarketDataById(
    params: ProductByIdRequestDto,
    body: UpdateMarketRequestDto
  ): Promise<MarketDataResponseDto> {
    const marketDataResponse = await MarketData.findOneAndUpdate(
      {
        productId: params.id,
      },
      body,
      { new: true }
    );

    return {
      status: CreateMarketStaus.SUCESS,
      marketData: marketDataResponse,
    };
  }
}

export const marketDataService = new MarketDataService();
