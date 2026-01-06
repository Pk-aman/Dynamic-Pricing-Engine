import { Controller, Delete, Get, Path, Route, Tags } from "tsoa";
import { priceHistoryService } from "../services/priceHistory.service";
import {
  ClearPriceHistoryResponseDto,
  PriceHistoryResponseDto,
  PriceHistoryResponseError,
} from "../utils/types/priceHistory";
import {
  CreateProductStaus,
  ProductByIdRequestDto,
} from "../utils/types/product";
@Route("history")
@Tags("History")
export class PriceHistoryTsoa extends Controller {
  @Get("{id}")
  public async getHistory(
    @Path("id") id: string
  ): Promise<PriceHistoryResponseDto | PriceHistoryResponseError> {
    return {} as PriceHistoryResponseDto | PriceHistoryResponseError;
  }

  @Delete("{id}")
  async clearHistory(
    @Path("id") id: string
  ): Promise<ClearPriceHistoryResponseDto | PriceHistoryResponseError> {
    return {} as ClearPriceHistoryResponseDto | PriceHistoryResponseError;
  }
}
