import { Body, Controller, Get, Patch, Path, Route, Tags } from "tsoa";
import {
  MarketDataResponseDto,
  MarketResponseError,
  UpdateMarketRequestDto,
} from "../utils/types/marketData";
import { ProductByIdRequestDto } from "../utils/types/product";
@Route("marketdata")
@Tags("Marketdata")
export class MarketDataTsoa extends Controller {
  @Get("{id}")
  public async getMarketDataById(
    @Path() id: string
  ): Promise<MarketDataResponseDto | MarketResponseError> {
    return {} as MarketDataResponseDto | MarketResponseError;
  }

  @Patch("{id}")
  public async updateMarketDataById(
    @Path() id: string,
    @Body() body: UpdateMarketRequestDto
  ): Promise<MarketDataResponseDto | MarketResponseError> {
    return {} as MarketDataResponseDto | MarketResponseError;
  }
}
