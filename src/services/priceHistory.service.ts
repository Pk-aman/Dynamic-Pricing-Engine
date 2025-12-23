import PriceHistory from "../models/priceHistory.model";
import {
  CreatePriceHistoryRequestDto,
  CreatePriceHistoryResponseDto,
  PriceHistoryResponseDto,
  ClearPriceHistoryResponseDto,
} from "../utils/types/priceHistory";
import {
  CreateProductStaus,
  ProductByIdRequestDto,
} from "../utils/types/product";

class PriceHistoryService {
  async create(
    data: CreatePriceHistoryRequestDto
  ): Promise<CreatePriceHistoryResponseDto> {
    const history = await PriceHistory.create({
      productId: data.productId,
      calculatedPrice: data.calculatedPrice,
      basePrice: data.basePrice,
      appliedRules: data.appliedRules,
    });

    return {
      status: CreateProductStaus.SUCESS,
      id: history._id,
    };
  }

  async findByProductId(
    param: ProductByIdRequestDto
  ): Promise<PriceHistoryResponseDto> {
    console.log("id: ", param.id);
    const history = await PriceHistory.findOne({ productId: param.id });
    console.log("History: ", history);
    return {
      status: CreateProductStaus.SUCESS,
      history: history,
    };
  }

  async clearByProductId(
    param: ProductByIdRequestDto
  ): Promise<ClearPriceHistoryResponseDto> {
    const result = await PriceHistory.deleteMany(param);

    return {
      status: CreateProductStaus.SUCESS,
      deletedCount: result.deletedCount ?? 0,
    };
  }
}

export const priceHistoryService = new PriceHistoryService();
