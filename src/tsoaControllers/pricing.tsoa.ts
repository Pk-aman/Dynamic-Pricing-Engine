import {
  ProductByIdsRequestDto,
} from "../utils/types/product";
import {
  DynamicPriceResponseDto,
  DynamicPriceResponseErrorDto as DynamicPriceResponseError,
  PriceListDto,
} from "../utils/types/pricing";
import { Body, Controller, Get, Path, Post, Route, Tags } from "tsoa";

@Route("pricing")
@Tags("Pricing")
export class PricingController extends Controller {
  @Get("{id}")
  public async getDynamicPrice(
    @Path("id") id: string
  ): Promise<DynamicPriceResponseDto | DynamicPriceResponseError> {
    return {} as DynamicPriceResponseDto | DynamicPriceResponseError;
  }
  @Post()
  public async setDynamicPrice(
    @Body() req: ProductByIdsRequestDto
  ): Promise<PriceListDto | DynamicPriceResponseError> {
    return {} as PriceListDto | DynamicPriceResponseError;
  }
}
